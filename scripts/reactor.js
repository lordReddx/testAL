const multiLib = require("multi-lib");


//you can use GenericSmelter instead GenericCrafter
//also GenericSmelter.SmelterBuild instead GenericCrafter.GenericCrafterBuild
//                                                                           ▼this has to be same with .json file name
//
const multi = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "reactor", [
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
    {
      input: {
        items: ["plastanium/6", "phase-fabric/2","metaglass/5"],
        liquids: ["water/2"],
        power: 3.4
      },
      output: {
        items: ["tAL-itemC/2"]
      },
      craftTime: 90
    },
    {
          input: {
            items: ["tAL-itemC/4", "thorium/5","plastanium/2"],
            liquids: [water/3.4],
            power: 2.1
          },
          output: {
            items: ["tAL-itempanel/4"]
          },
          craftTime: 300
        },
    {
      input: {
        items: ["tAL-itempanel/2", "surge-alloy/1","plastanium/2"],
        liquids: ["cryofluid/3"],
        power: 5
      },
      output: {
        items: ["tAL-itemalloy/1"]
      },
      craftTime: 330
    },
    {
      input: {
        items: ["tAL-itemC/1"],
        liquids: ["tAL-acid/3.2"],
        power: 5.1
      },
      output: {
        items: ["tAL-acidC/1"]
      },
      craftTime: 300
    },
    {
      input: {
        items: ["tAL-itemC/1", "titanium/2"],
        liquids: ["cryofluid/3"],
        power: 5.1
      },
      output: {
        items: ["tAL-frozenC/1"]
      },
      craftTime: 300
    },
        {
          input: {
            items: ["tAL-itemC/1", "blast-compound/3"],
            liquids: ["tAL-lava/2"],
            power: 5.1
          },
          output: {
            items: ["tAL-lavaC/1"]
          },
          craftTime: 300
        },
          {
            input: {
              items: ["acidC/2", "tAL-frozenC/2", "tAL-lavaC/2"],
              liquids: ["cryofluid/3"],
              power: 4.1
            },
            output: {
              items: ["tAL-cosmoC/2"]
            },
            craftTime: 120
          },
          {
            input: {
              items: ["tAL-cosmoC/100"],
              power: 6
            },
            output: {
              items: ["tAL-itemc0/1"]
            },
            craftTime: 300
          },
], {
    /*you can customize block here. ex) load()*/
  },
  /*this is Object constructor. This way is much better than literal way{a:123}
  you can replace this with {} if you don't want to modify entity*/
  function Extra() {
    this.draw=function(){
let region = Core.atlas.find("tAL-bioreactor-weave")
Draw.rect(region, this.x, this.y);
let bullet = Core.atlas.find("tAL-bioreactor-bottom")
Draw.rect(bullet, this.x, this.y)
};
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