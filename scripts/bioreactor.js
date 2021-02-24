try{
  const multiLib = require("wrapper");
  const biocrafter = multiLib.extend(GenericSmelter,"bioreactor",
    [
    /*
    {
      input:{
        items:[],     Modded Item:  "mod-name-item-name/amount", Vanilla Item: "item-name/amount"
        liquids:[],   Modded Liquid:  "mod-name-liquid-name/amount",  Vanilla liquid: "liquid-name/amount"
        power:0,
      },
      output:{
        items:[],
        liquids:[],
        power:0,
      },
      craftTime:80,
    },
    */
    /*{
      input:{
        items: ["plastanium/6","phase-fabric/2","metaglass/5"],
        liquids: ["water/2"],
        power: 3.4
      },
      output: {
        items: ["badGuns-biotissue/2"],
      },
      craftTime: 90
    },*/
    {
      input: {
        items: ["badGuns-biotissue/4","thorium/5","plastanium/2"],
        liquids: ["water/3.4"],
        power: 2.1
      },
      output: {
        items: ["badGuns-biopanel/4"],
      },
      craftTime: 300
    },
    {
      input: {
        items: ["badGuns-biopanel/2","surge-alloy/1","plastanium/2"],
        liquids: ["cryofluid/3"],
        power: 5
      },
      output: {
        items: ["badGuns-bioalloy/1"],
      },
      craftTime: 330
    },
    {

      input: {

        items: ["badGuns-biotissue/1"],
        liquids: ["badGuns-acid/3.2"],
        power: 5.1
      },
      output: {
        items: ["badGuns-acidtissue/1"],
      },
      craftTime: 300
    },
    {
    
      input: {
    
        items: ["badGuns-biotissue/1", "titanium/2"],
        liquids: ["cryofluid/3"],
        power: 5.1
      },
      output: {
        items: ["badGuns-frozentissue/1"],
      },
      craftTime: 300
    },
    {
    
      input: {
    
        items: ["badGuns-biotissue/1", "blast-compound/3"],
        liquids: ["badGuns-lava/2"],
        power: 5.1
      },
      output: {
        items: ["badGuns-lavatissue/1"],
      },
      craftTime: 300
    },
    {
    
      input: {
    
        items: ["badGuns-acidtissue/2", "badGuns-frozentissue/2", "badGuns-lavatissue/2"],
        liquids: ["cryofluid/3"],
        power: 4.1
      },
      output: {
        items: ["badGuns-cosmotissue/2"],
      },
      craftTime: 120
    },
    {
    
      input: {
    
        items: ["badGuns-cosmotissue/100"],
        power: 6
      },
      output: {
        items: ["badGuns-biocore/1"],
      },
      craftTime: 300
    },
  ],{
    draw(){
      Draw.rect(Core.atlas.find("badGuns-bioreactor-weave"), this.x, this.y);
      Draw.rect(Core.atlas.find("badGuns-bioreactor-bottom"), this.x, this.y);
      biocrafter.drawer = new DrawWeave();
    }
  },{
    /*entity customization*/
  });
  /*
  NOT CONFIGURABLE FIELDS
  configurable
  outputsPower
  hasItems
  hasLiquids
  hasPower
  */
  biocrafter.localizedName = "Bioreactor";
  biocrafter.description = "Produces high-tech biomaterials.";
  biocrafter.itemCapacity = 100;
  biocrafter.liquidCapacity = 10;
  biocrafter.size = 4;
  biocrafter.health = 750;
  biocrafter.craftEffect = Fx.pulverize;
  biocrafter.updateEffect = Fx.none;
  biocrafter.flameColor = biocrafter.flameColor = Color.valueOf("E77423");
  /*
  true: dump items and liquids of output according to button
  false: dump items and liquids of output unconditionally
  */
  biocrafter.dumpToggle = true;

  biocrafter.requirements(Category.crafting);

}
catch(err){

}