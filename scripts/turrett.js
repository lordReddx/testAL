const tmpVec2 = new Vec2();

const settingLib = require("modsettings");

const ephemeron = extendContent(PowerTurret, "turrett", {
	load(){
		this.super$load();
		
		this.baseRegion = Core.atlas.find("tAL-block-" + this.size);
		for(var i = 0; i < 3; i++){
			this.animationRegions[i] = Core.atlas.find(this.name + "-frame-" + (i + 1));
			this.heatRegions[i] = Core.atlas.find(this.name + "-heat-" + (i + 1));
		};
	},
	
	generateIcons(){
	return [
		Core.atlas.find("tAL-block-" + this.size),
		Core.atlas.find(this.name)
	];},
	
	createIcons(packer){
		this.super$createIcons(packer);
		
		//increases loading time by 170%
		
		if(this.animated){
			const radius = 4;
			for(var i = 0; i < 3; i++){
				var regionB = Core.atlas.getPixmap(this.name + "-frame-" + (i + 1));
				var out = new Pixmap(regionB.width, regionB.height);
				var color = new Color();
				
				for(var x = 0; x < regionB.width; x++){
					for(var y = 0; y < regionB.height; y++){
						
						regionB.getPixel(x, y, color);
						out.draw(x, y, color);
						if(color.a < 1){
							found = false;
							outer:
							for(var rx = -radius; rx < radius; rx++){
								for(var ry = -radius; ry < radius; ry++){
									if(Structs.inBounds(rx + x, ry + y, regionB.width, regionB.height) && Mathf.dst2(rx, ry) <= (radius * radius) && color.set(regionB.getPixel(rx + x, ry + y)).a > 0.01){
										found = true;
										break outer;
									}
								}
							};
							if(found){
								out.draw(x, y, this.outlineColor);
							}
						}
					}
				};
				packer.add(MultiPacker.PageType.main, this.name + "-frame-" + (i + 1), out);
			}
		}
	},
	
	update(tile){
		entity = tile.ent();
		
		var power = this.baseReloadSpeed(tile);
		
		this.super$update(tile);
		
		if(entity.target == null){
			entity.setTargetTime(entity.getTargetTime() + Time.delta());
		}else{
			entity.setTargetTime(0);
		};
		
		if(entity.getTargetTime() > 60 || power < 0.0001){
			//entity.setFrame(Mathf.lerpDelta(entity.getFrame(), 0, 0.06));
			entity.setFrame(entity.getFrame() - (Time.delta() / 3));
			entity.setFrame(Mathf.clamp(entity.getFrame(), 0, this.animationRegions.length));
			entity.setTargetTime(60);
		};
	},
	
	updateShooting(tile){
		entity = tile.ent();
		
		//this.super$updateShooting(tile);
		type = this.peekAmmo(tile);
		
		if(entity.reload >= this.reload){
			//type = this.peekAmmo(tile);

			//this.shoot(tile, type);

			//entity.reload = 0;
			
			entity.setChargeTime(entity.getChargeTime() + Time.delta());
			if(entity.getChargeTime() >= this.chargeTime){
				//type = this.peekAmmo(tile);
				this.shoot(tile, type);
				entity.reload = 0;
				entity.setChargeTime(0);
			};
		}else{
			entity.reload += tile.entity.delta() * type.reloadMultiplier * this.baseReloadSpeed(tile);
			
			maxUsed = this.consumes.get(ConsumeType.liquid).amount;

			liquid = entity.liquids.current();

			used = Math.min(Math.min(entity.liquids.get(liquid), maxUsed * Time.delta()), Math.max(0, ((this.reload - entity.reload) / this.coolantMultiplier) / liquid.heatCapacity)) * this.baseReloadSpeed(tile);
			entity.reload += used * liquid.heatCapacity * this.coolantMultiplier;
			entity.liquids.remove(liquid, used);

			if(Mathf.chance(0.06 * used)){
				Effects.effect(this.coolEffect, tile.drawx() + Mathf.range(this.size * Vars.tilesize / 2), tile.drawy() + Mathf.range(this.size * Vars.tilesize / 2));
			}
		};
		
		var power = this.baseReloadSpeed(tile);
		
		if(power > 0.0001){
			//entity.setFrame(Mathf.lerpDelta(entity.getFrame(), this.animationRegions.length, 0.06 * power));
			entity.setFrame(entity.getFrame() + (Time.delta() / 3));
			entity.setFrame(Mathf.clamp(entity.getFrame(), 0, this.animationRegions.length));
		}
	},
	
	shoot(tile, type){
		entity = tile.ent();
		
		entity.recoil = this.recoil;
		entity.heat = 1;
		var predict;
		
		if(entity.target != null){
			predict = Predict.intercept(tile, entity.target, type.speed);
		}else{
			tmpVec2.set(0, 0);
			predict = tmpVec2;
		};
		dst = entity.dst(predict.x, predict.y);
		maxTraveled = type.lifetime * type.speed;

		this.tr.trns(entity.rotation, this.size * Vars.tilesize / 2, Mathf.range(this.xRand));
		Bullet.create(type, entity, tile.getTeam(), tile.drawx() + this.tr.x, tile.drawy() + this.tr.y, entity.rotation, 1, (dst / maxTraveled));
		
		//this.tr.trns(entity.rotation, this.size * Vars.tilesize / 2, 0);
		this.effects(tile);
		
		this.useAmmo(tile);
	},
	
	drawLayer(tile){
		entity = tile.ent();

		this.tr2.trns(entity.rotation, -entity.recoil);
		
		var currentFrame = Mathf.round(Mathf.clamp(entity.getFrame(), 0, this.animationRegions.length - 1));
		//print(currentFrame);

		//Draw.rect(this.region, tile.drawx() + this.tr2.x, tile.drawy() + this.tr2.y, entity.rotation - 90);
		if(this.animated){
			Draw.rect(this.animationRegions[currentFrame], tile.drawx() + this.tr2.x, tile.drawy() + this.tr2.y, entity.rotation - 90);
		
			if(!entity.heat <= 0.00001){
				Draw.color(this.heatColor, entity.heat);
				Draw.blend(Blending.additive);
				Draw.rect(this.heatRegions[currentFrame], tile.drawx() + this.tr2.x, tile.drawy() + this.tr2.y, entity.rotation - 90);
				Draw.blend();
				Draw.color();
			};
		}else{
			Draw.rect(this.region, tile.drawx() + this.tr2.x, tile.drawy() + this.tr2.y, entity.rotation - 90);
			if(!entity.heat <= 0.00001){
				Draw.color(this.heatColor, entity.heat);
				Draw.blend(Blending.additive);
				Draw.rect(this.heatRegion, tile.drawx() + this.tr2.x, tile.drawy() + this.tr2.y, entity.rotation - 90);
				Draw.blend();
				Draw.color();
			};
		};
		
		var fadeIn = entity.getChargeTime() / this.chargeTime;
		if(entity.getChargeTime() <= 0.00001) return;
		this.tr2.trns(entity.rotation, -entity.recoil + (this.size * Vars.tilesize / 2));
		Draw.color(Color.valueOf("a9d8ff"));
		Fill.circle(tile.drawx() + this.tr2.x, tile.drawy() + this.tr2.y, fadeIn * (1.5 + 8));
		Draw.color(Color.valueOf("ffffff"));
		Fill.circle(tile.drawx() + this.tr2.x, tile.drawy() + this.tr2.y, fadeIn * (1 + 6.5));
	}
});
ephemeron.animated = settingLib.settingAnimatedSprite();
ephemeron.chargeTime = 60;
ephemeron.shootType = ephemeronBullet;
ephemeron.heatRegions = [];
ephemeron.animationRegions = [];
ephemeron.entityType = prov(() => {
	entityB = extend(Turret.TurretEntity, {
		getFrame(){
			return this._frame;
		},
		
		setFrame(a){
			this._frame = a;
		},
		
		getChargeTime(){
			return this._charge;
		},
		
		setChargeTime(a){
			this._charge = a;
		},
		
		getTargetTime(){
			return this._targetTime;
		},
		
		setTargetTime(a){
			this._targetTime = a;
		},
		
		getBool(){
			return this._targetBool;
		},
		
		setBool(a){
			this._targetBool = a;
		}
	});
	entityB.setChargeTime(0);
	entityB.setFrame(0);
	entityB.setTargetTime(60);
	entityB.setBool(false);
	
	return entityB;
});