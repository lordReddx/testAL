Events.on(ClientLoadEvent, () => {
    const routros = new Planet("routros", Planets.sun, 1, 1);
    routros.generator = new SerpuloPlanetGenerator();
    routros.mesh = new HexMesh(routros, 5);
    routros.orbitRadius = 10;
    routros.orbitTime = 1.5 * 60;
    routros.rotateTime = 30;
    routros.bloom = true;
    routros.accessible = true;
    routros.startSector = 3;
    routros.hasAtmosphere = true;
    routros.atmosphereColor = Liquids.cryofluid.color;
    routros.atmosphereRadIn = 0.1;
    routros.atmosphereRadOut = 0.3;
    routros.alwaysUnlocked = true;
    routros.localizedName = "Router";

    
const plains = new JavaAdapter(SectorPreset, {}, "router1", Planets.mino, 1);
plains.captureWave = 45;
plains.localizedName = "n2";
plains.difficulty = 8;
plains.alwaysUnlocked = false;

const oldRefinery = new JavaAdapter(SectorPreset, {}, "router2", Planets.mino, 2);
oldRefinery.localizedName = "n3";
oldRefinery.difficulty = 8;
oldRefinery.alwaysUnlocked = false;

const frozenMountains = new JavaAdapter(SectorPreset, {}, "router3", Planets.mino, 3);
frozenMountains.localizedName = "n1";
frozenMountains.difficulty = 5;
frozenMountains.alwaysUnlocked = true;

const spaceshipWorkshop = new JavaAdapter(SectorPreset, {}, "router4", Planets.mino, 4);
spaceshipRepairShop.captureWave = 30;
spaceshipRepairShop.localizedName = "n4";
spaceshipRepairShop.difficulty = 5;
spaceshipRepairShop.alwaysUnlocked = false;

const spaceAirport = new JavaAdapter(SectorPreset, {}, "router5", Planets.mino, 5);
spaceAirport.localizedName = "n5";
spaceAirport.difficulty = 9;
spaceAirport.alwaysUnlocked = false;
});