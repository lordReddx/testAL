Events.on(ClientLoadEvent, () => {
    const routros = new Planet("routros", Planets.sun, 1, 1);
    routros.generator = new SerpuloPlanetGenerator();
    routros.mesh = new HexMesh(routros, 5);
    routros.orbitRadius = 10;
    routros.orbitTime = 1.5 * 60;
    routros.rotateTime = 30;
    routros.bloom = true;
    routros.accessible = true;
    routros.startSector = 1;
    routros.hasAtmosphere = true;
    routros.atmosphereColor = Liquids.cryofluid.color;
    routros.atmosphereRadIn = 0.1;
    routros.atmosphereRadOut = 0.3;
    routros.alwaysUnlocked = true;
    routros.localizedName = "test";
});