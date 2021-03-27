Events.on(ClientLoadEvent, () => {
    const mino = new Planet("mino", Planets.sun, 1, 1);
    mino.generator = new SerpuloPlanetGenerator();
    mino.mesh = new HexMesh(mino, 5);
    mino.orbitRadius = 10;
    mino.orbitTime = 1.5 * 60;
    mino.rotateTime = 30;
    mino.bloom = true;
    mino.accessible = true;
    mino.startSector = 3;
    mino.hasAtmosphere = true;
    mino.atmosphereColor = Liquids.cryofluid.color;
    mino.atmosphereRadIn = 0.1;
    mino.atmosphereRadOut = 0.3;
    mino.alwaysUnlocked = true;
    mino.localizedName = "Mino";

    
const plains = new SectorPreset("router1", mino, 1);
plains.captureWave = 45;
plains.localizedName = "Plains";
plains.difficulty = 8;
plains.alwaysUnlocked = false;

const oldRefinery = new SectorPreset("router2", mino, 2);
oldRefinery.localizedName = "Old refinery";
oldRefinery.difficulty = 8;
oldRefinery.alwaysUnlocked = false;

const frozenMountains = new SectorPreset("router3", mino, 3);
frozenMountains.localizedName = "Frozen mountains";
frozenMountains.difficulty = 5;
frozenMountains.alwaysUnlocked = true;

const spaceshipWorkshop = new SectorPreset("router4", mino, 4);
spaceshipWorkshop.captureWave = 30;
spaceshipWorkshop.localizedName = "Spaceship workshop";
spaceshipWorkshop.difficulty = 5;
spaceshipWorkshop.alwaysUnlocked = false;

const spaceAirport = new SectorPreset("router5", mino, 5);
spaceAirport.localizedName = "Space airport";
spaceAirport.difficulty = 9;
spaceAirport.alwaysUnlocked = false;
});