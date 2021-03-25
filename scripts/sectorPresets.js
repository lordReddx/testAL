
const plains = new SectorPreset("sector1", mino, 1);
plains.captureWave = 45;
plains.localizedName = "n2";
plains.difficulty = 8;
plains.alwaysUnlocked = false;

const oldRefinery = new SectorPreset("sector2", mino, 2);
oldRefinery.localizedName = "n3";
oldRefinery.difficulty = 8;
oldRefinery.alwaysUnlocked = false;

const frozenMountains = new SectorPreset("sector3", mino, 3);
frozenMountains.localizedName = "n1";
frozenMountains.difficulty = 5;
frozenMountains.alwaysUnlocked = false;

const spaceshipWorkshop = new SectorPreset("n4", mino, 4);
spaceshipRepairShop.captureWave = 30;
spaceshipRepairShop.localizedName = "Spaceship workshop";
spaceshipRepairShop.difficulty = 5;
spaceshipRepairShop.alwaysUnlocked = false;

const spaceAirport = new SectorPreset("sector5", mino, 5);
spaceAirport.localizedName = "n5";
spaceAirport.difficulty = 9;
spaceAirport.alwaysUnlocked = false;