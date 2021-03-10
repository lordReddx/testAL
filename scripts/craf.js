const multiLib = require("multi-lib/library");
//you can use GenericSmelter instead GenericCrafter
//also GenericSmelter.SmelterBuild instead GenericCrafter.GenericCrafterBuild
//                                                                           ▼this has to be same with .json file name
//
const multi = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "craf", [
    /*default form for each recipes. You can change values.
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
    },*/
   
    { //4
      input: {
        items: ["sand/1"],
      },
      output: {
        items: ["silicon/1"],
      },
      craftTime: 30
    },
], {
    /*you can customize block here. ex) load()*/
  },
  /*this is Object constructor. This way is much better than literal way{a:123}
  you can replace this with {} if you don't want to modify entity*/
  function Extra() {
    /*you can use customUpdate=function(){}. this function excuted before update()
    also this.draw=function(){}
    you can customize entity here.
    ex)
    this._myProp=0;
    this.getMyProp=function(){
        return this._myProp;
    };
    this.setMyProp=function(a){
        this._myProp=a;
    };*/
  });
/*
YOU MUST NOT MODIFY VALUE OF THESE
configurable
outputsPower
hasItems
hasLiquids
hasPower
*/
//using example without .json file. I don't recommand this way because you can't use mod item as requirements.
/*multi.localizedName = "craf";
multi.description = "craf";
multi.itemCapacity = 30;
multi.liquidCapacity = 20;
multi.size = 4;
multi.health = 100;
multi.craftEffect = Fx.pulverizeMedium;
multi.updateEffect = Fx.none;*/
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
//multi.dumpToggle = false;
//multi.requirements(Category.crafting, ItemStack.with(Items.copper, 75));