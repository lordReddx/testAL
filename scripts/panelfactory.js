try{
  const multiLib = require("wrapper");
  const panelfactory = multiLib.extend(GenericSmelter,"panelfactory",
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
        liquids: ["water/5", "badGuns-lava/5", "cryofluid/2"],
        power: 1.1
      },
      output: {
        items: ["badGuns-solidstone/2"],
      },
      craftTime: 35
    },
    {
      input:{
        items: ["badGuns-solidstone/4"],
        power: 3
      },
      output: {
        items: ["badGuns-stonepanel/2"],
      },
      craftTime: 95
    },
    {
      input: {
        items: ["metaglass/8"],
        liquids: ["water/3.4"],
        power: 2
      },
      output: {
        items: ["badGuns-metapanel/2"],
      },
      craftTime: 90
    },
  ],{
    
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
  panelfactory.localizedName = "Panel factory";
  panelfactory.description = "Manufactures panels made of certain materials.";
  panelfactory.itemCapacity = 20;
  panelfactory.liquidCapacity = 25;
  panelfactory.size = 3;
  panelfactory.health = 300;
  panelfactory.craftEffect = Fx.pulverize;
  panelfactory.updateEffect = Fx.none;
  panelfactory.flameColor = panelfactory.flameColor = Color.valueOf("7B7B7B");
  /*
  true: dump items and liquids of output according to button
  false: dump items and liquids of output unconditionally
  */
  panelfactory.dumpToggle = true;

  panelfactory.requirements(Category.crafting);

}
catch(err){

}