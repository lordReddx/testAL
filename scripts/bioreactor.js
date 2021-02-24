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
    {
      input:{
        items: ["plastanium/6","phase-fabric/2","metaglass/5"],
        liquids: ["water/2"],
        power: 3.4
      },
      output: {
        items: ["biotissue/2"],
      },
      craftTime: 90
    },
    {
      input: {
        items: ["biotissue/4","thorium/5","plastanium/2"],
        liquids: ["water/3.4"],
        power: 2.1
      },
      output: {
        items: ["biopanel/4"],
      },
      craftTime: 300
    },
    {
      input: {
        items: ["biopanel/2","surge-alloy/1","plastanium/2"],
        liquids: ["cryofluid/3"],
        power: 5
      },
      output: {
        items: ["bioalloy/1"],
      },
      craftTime: 330
    },
    {

      input: {

        items: ["biotissue/1"],
        liquids: ["acid/3.2"],
        power: 5.1
      },
      output: {
        items: ["acidtissue/1"],
      },
      craftTime: 300
    },
    {
    
      input: {
    
        items: ["biotissue/1", "titanium/2"],
        liquids: ["cryofluid/3"],
        power: 5.1
      },
      output: {
        items: ["frozentissue/1"],
      },
      craftTime: 300
    },
    {
    
      input: {
    
        items: ["biotissue/1", "blast-compound/3"],
        liquids: ["lava/2"],
        power: 5.1
      },
      output: {
        items: ["lavatissue/1"],
      },
      craftTime: 300
    },
    {
    
      input: {
    
        items: ["acidtissue/2", "frozentissue/2", "lavatissue/2"],
        liquids: ["cryofluid/3"],
        power: 4.1
      },
      output: {
        items: ["cosmotissue/2"],
      },
      craftTime: 120
    },
    {
    
      input: {
    
        items: ["cosmotissue/100"],
        power: 6
      },
      output: {
        items: ["biocore/1"],
      },
      craftTime: 300
    },
  ],{
    draw(){
      Draw.rect(Core.atlas.find("bioreactor-weave"), this.x, this.y);
      Draw.rect(Core.atlas.find("bioreactor-bottom"), this.x, this.y);
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