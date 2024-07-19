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
    dirtGoblin:{
        maxDistance: 2.5,
        name: "dirtGoblin",
        dn: "dirt goblin",
        modelStyle: "goblin",
        stats: {
            dmg: 25,
            magDmg: 1,
            spd: 3,
            atkSpd: 1,    
            accuracy: 1, //10 // accuracy >= hero.stats.accuracy
            critical: 1.4,
        },
        deathSound: "goblinDeathS",
        encounterSound: false,
        lvl: 2,
        hp: 3000,
        maxHp: 3000,
        expToGain: 100,
        x: 3.6,
        z: -40,
        bodyHeight: 1.8,
        origPos: { x: 3.6, z: -40, },
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
    luminousGoblin:{
        maxDistance: 2.5,
        name: "luminousGoblin",
        dn: "Luminous goblin",
        modelStyle: "goblin",
        stats: {
            dmg: 46,
            magDmg: 1,
            spd: 4,
            atkSpd: 2,    
            accuracy: 1, //10 // accuracy >= hero.stats.accuracy
            critical: 1.4,
        },
        deathSound: "goblinDeathS",
        encounterSound: false,
        lvl: 2,
        hp: 3000,
        maxHp: 3000,
        expToGain: 100,
        x: 3.6,
        z: -40,
        bodyHeight: 1.8,
        origPos: { x: 3.6, z: -40, },
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
    orangelith:{
        maxDistance: 2.5,
        name: "orangelith",
        dn: "orange lith",
        modelStyle: "monolith",
        stats: {
            dmg: 15,
            magDmg: 1,
            spd: 3.5,
            atkSpd: 1.5,    
            accuracy: 1, //10 // accuracy >= hero.stats.accuracy
            critical: 1.4,
        },
        deathSound: 'beeS',
        encounterSound: 'beeS',
        lvl: 10,
        hp: 4500,
        maxHp: 4500,
        expToGain: 240,
        x: 3.6,
        z: -40,
        bodyHeight: 2,
        origPos: { x: 3.6, z: -40, },
        effects: [
            // { effectType: 'spdrain', chance: 10, permanent: false, dn: 'SP Drained', spcost: 20, hpcost: 0, mpcost: 0, hungercost: 4, energycost: 0 },
            {effectType: 'poisoned', chance: 10, permanent: true, dn:'Poison Sting', spcost: 20, hpcost:10, mpcost:0, hungercost:4, energycost: 0}
        ],
        effectsWhenHit: [
            // { effectType: 'spdrain', chance: 10, permanent: false, dn: 'SP Drained', spcost: 20, hpcost: 0, mpcost: 0, hungercost: 4, energycost: 0 }
        ],
        titles: ['stinger'],
        skills: [],
        aptitude: ['poison'],
        blessings: [],
        currentPlace: "afterWarScene",
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
            respawnTime: 40 * 1000,
        }
    },
    lesserdemon:{
        maxDistance: 2.5,
        name: "lesserdemon",
        dn: "Demon Monster",
        modelStyle: "demonmonster",
        stats: {
            dmg: 15,
            magDmg: 1,
            spd: 3.5,
            atkSpd: 1.5,    
            accuracy: 4, //10 // accuracy >= hero.stats.accuracy
            critical: 1.4,
        },
        deathSound: false,
        encounterSound: false,
        lvl: 30,
        hp: 12000,
        maxHp: 12000,
        expToGain: 600,
        bodyHeight: 3.5,
        effects: [
            { effectType: 'spdrain', chance: 10, permanent: false, dn: 'SP Drained', spcost: 20, hpcost: 0, mpcost: 0, hungercost: 4, energycost: 0 },
            // {effectType: 'poisoned', chance: 10, permanent: true, dn:'Poison Sting', spcost: 20, hpcost:10, mpcost:0, hungercost:4, energycost: 0}
        ],
        effectsWhenHit: [
            { effectType: 'spdrain', chance: 10, permanent: false, dn: 'SP Drained', spcost: 20, hpcost: 0, mpcost: 0, hungercost: 4, energycost: 0 }
        ],
        titles: [],
        skills: [],
        aptitude: [],
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
        loots: [],
        respawnDetails: {
            willRespawn: true,
            respawnTime: 5000 * 1000,
        }
    },
}