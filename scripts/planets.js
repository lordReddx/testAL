Events.on(ClientLoadEvent, () => {

    var arrrrs = [
        [Blocks.water, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.stone, Blocks.stone],
        [Blocks.water, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.stone, Blocks.stone, Blocks.stone],
        [Blocks.water, Blocks.grass, Blocks.grass, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.stone, Blocks.stone, Blocks.stone],
        [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.salt, Blocks.salt, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.iceSnow, Blocks.ice],
        [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice],
        [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.snow, Blocks.ice],
        [Blocks.deepwater, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.grass, Blocks.snow, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.ice, Blocks.snow, Blocks.ice],
        [Blocks.water, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.hotrock, Blocks.grass, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
        [Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.dirt, Blocks.snow, Blocks.grass, Blocks.grass, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
        [Blocks.grass, Blocks.grass, Blocks.grass, Blocks.dirt, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice],
        [Blocks.water, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.grass, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
        [Blocks.grass, Blocks.grass, Blocks.grass, Blocks.dirt, Blocks.grass, Blocks.dirt, Blocks.iceSnow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
        [Blocks.grass, Blocks.grass, Blocks.snow, Blocks.ice, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice]
    ];
    const hhhaGenerator = extend(SerpuloPlanetGenerator, {
        getBlock(p){
            this.arr = arrrrs;
            this.super$getBlock(p);
        }
    });
    hhhaGenerator.arr = arrrrs;



    const brrrrr = new JavaAdapter(Planet, {}, "brrrrr", Planets.sun, 2, 1);
    brrrrr.generator = hhhaGenerator;
    brrrrr.mesh = new HexMesh(brrrrr, 3);
    brrrrr.orbitRadius = 5;
    brrrrr.orbitTime = 1.5 * 60;
    brrrrr.rotateTime = 30;
    brrrrr.bloom = true;
    brrrrr.accessible = true;
    brrrrr.startSector = 1;
    brrrrr.hasAtmosphere = true;
    brrrrr.atmosphereColor = Liquids.oil.color;
    brrrrr.atmosphereRadIn = 0.1;
    brrrrr.atmosphereRadOut = 0.5;
    brrrrr.alwaysUnlocked = true;
    brrrrr.localizedName = "Vgeyfrc";




    const trrrrr = new SectorPreset("fortress", brrrrr, 1);
    trrrrr.captureWave = 30;
    trrrrr.localizedName = "Fortress";
    trrrrr.difficulty = 6;
    trrrrr.alwaysUnlocked = true;


});