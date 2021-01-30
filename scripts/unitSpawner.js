const spawnEffect = Effect ("spawn", 60 {});

const unitSpawn = extendContent(Block, "unitSpawner", {
	buildConfiguration(table) {
        table.Button(new Packages.arc.scene.style.TextureRegionDrawable(up1), Styles.clearTransi, run(() => { this.configure(0) })).size(40);
    },

    configured(value) {
    	 Effects.effect(spawnEffect, tile);
    },
});

unitSpawn.localizedName = Unit Spawner;
unitSpawn.description = Touch me.;
unitSpawn.health = 10;
unitSpawn.size = 2;
unitSpawn.requirements(Category.units);
unitSpawn.abilities.add( new UnitSpawnAbility(mono, 1, 0, 0,));

