
const plains = new SectorPreset("router1", mino, 1);
plains.captureWave = 45;
plains.localizedName = "n2";
plains.difficulty = 8;
plains.alwaysUnlocked = false;

const oldRefinery = new SectorPreset("router2", mino, 2);
oldRefinery.localizedName = "n3";
oldRefinery.difficulty = 8;
oldRefinery.alwaysUnlocked = false;

const frozenMountains = new SectorPreset("router3", mino, 3);
frozenMountains.localizedName = "n1";
frozenMountains.difficulty = 5;
frozenMountains.alwaysUnlocked = false;

const spaceshipWorkshop = new SectorPreset("router4", mino, 4);
spaceshipRepairShop.captureWave = 30;
spaceshipRepairShop.localizedName = "n4";
spaceshipRepairShop.difficulty = 5;
spaceshipRepairShop.alwaysUnlocked = false;

const spaceAirport = new SectorPreset("router5", mino, 5);
spaceAirport.localizedName = "n5";
spaceAirport.difficulty = 9;
spaceAirport.alwaysUnlocked = false;