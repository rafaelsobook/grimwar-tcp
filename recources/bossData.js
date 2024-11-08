const { randNumString } = require("../tools/tools.js")

let simpleCoreLoot = {
    itemId: randNumString(), // should be string also in client
    name: "smallcore", // is also the image name
    dn: "small core",
    itemCateg: "crafting",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
    itemType: "core", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff/cores
    weaponType: false,
    equipAbilities: {
        dmg: 100, def: 100, magicDmg: 100, plusStr: 0, plusDex: 0, plusInt: 0,
        plusDurability: 30
    }, //str(hp,dmg) // dex(def, spd) // int(magicDmg, mana)
    equiped: false,
    price: 50,
    qnty: 1,
    desc: "core that can be found on almost any small monsters, can be useful for enhancing items",
    rarity: "normal"
}

module.exports = {
    lesserdemon:  {
        maxDistance: 2.5,
        name: "lesserdemon",
        dn: "demon",
        modelStyle: "demonmonster",
        deathSound: "demonoidS",
        encounterSound: "demonoidS",
        stats: {
            dmg: 120,
            magDmg: 10,
            spd: 4,
            atkSpd: 2,    
            accuracy: 10, //10 // accuracy >= hero.stats.accuracy
            critical: 1.4,
        },        
        lvl: 20,
        hp: 7000,
        maxHp: 7000,
        expToGain: 100,     
        bodyHeight: 3.4,       
        effects: [
            { effectType: 'spdrain', chance: 10, permanent: false, dn: 'SP Drained', spcost: 20, hpcost: 0, mpcost: 0, hungercost: 4, energycost: 0 },
            // {effectType: 'poisoned', chance: 10, permanent: true, dn:'Venom Extracted', spcost: 20, hpcost:10, mpcost:0, hungercost:4, energycost: 0}
        ],
        effectsWhenHit: [
            { effectType: 'spdrain', chance: 10, permanent: false, dn: 'SP Drained', spcost: 20, hpcost: 0, mpcost: 0, hungercost: 4, energycost: 0 }
        ],
        titles: ['human killer'],
        skills: [],
        aptitude: ['light'],
        blessings: [],
        status: [], // sickness //poisoned etc
        regens: { sp: 1, hp: 1, mana: 1 },
        monsSoul: 2, // toReceive when killed
        race: "monster",
        characterType: "enemy",// npcStandby//npcEnemy//npcFighter//npcWalk
        actionType: "chasing", //idle//chasing//throwing//dynamic
        _isMoving: false,
        _targetId: false,
        _dirTarg: { x: 0, z: 0 },
        _attacking: false,
        loots: [simpleCoreLoot],
        respawnDetails: {
            willRespawn: true,
            respawnTime: 30 * 1000,
        }
    },
}