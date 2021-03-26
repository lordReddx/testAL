const dirs = require("dirslib");

const explode = extendContent(Battery, "BatteryE", {});

explode.radius = 10;
explode.damage = 100;

explode.buildType = () => extend(Battery.BatteryBuild, explode, {
	onProximityUpdate() {
		this.super$onProximityUpdate();

		for (var i in dirs) {
			var near = this.tile.nearby(i);
			if (near && near.block() instanceof Battery) {
				this.snekDetected();
				// Prevent stack overflow from explosive routers exploding
				Core.app.post(() => this.tile.remove());
			}
		}
	},

	onDestroyed() {
		this.super$onDestroyed();
		this.snekDetected();
	},

	/* Call when a snek is found and must be eliminated */
	snekDetected() {
		const x = this.x, y = this.y;
		Core.app.post(() => {
			Damage.damage(x, y, explode.radius * Vars.tilesize, explode.damage);
		});

		if (!Vars.ui) return;

		Sounds.explosionbig.at(this.tile);
		Effect.shake(40, 16, x, y);
		Fx.nuclearShockwave.at(x, y);
		for (var i = 0; i < 4; i++) {
			Time.run(Math.random(40), () => {
				Fx.nuclearcloud.at(x + Mathf.range(4), y + Mathf.range(4));
			});
		}
	}
});

module.exports = explode;