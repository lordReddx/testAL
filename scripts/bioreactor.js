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
        items: ["tAL-biotissue/2"],
      },
      craftTime: 90
    },
    
  ],{
    draw(){
      Draw.rect(Core.atlas.find("tAL-bioreactor-weave"), this.x, this.y);
      Draw.rect(Core.atlas.find("tAL-bioreactor-bottom"), this.x, this.y);
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