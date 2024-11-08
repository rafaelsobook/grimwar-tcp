const { randNumString } = require("../tools/tools.js")
const {orangelith} = require("./enemyData.js")

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

let enemyInterface = {
    _id: `${randNumString()}`,
    maxDistance: 2.5,
    name: "dirtGoblin",
    dn: "dirt goblin",
    modelStyle: "goblin",
    stats: {
        dmg: 19,
        magDmg: 1,
        spd: 3.3,
        atkSpd: 2,

        accuracy: 1, //10 // accuracy >= hero.stats.accuracy
        critical: 1.4,
    },
    deathSound: "goblinDeathS",
    encounterSound: false,
    lvl: 2,
    hp: 9900,
    maxHp: 9900,
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
        respawnTime: 30 * 1000,
    }
}
module.exports = [
    enemyInterface,
    // {...orangelith,
    //     _id: `${randNumString()}`,
    //     x: 1,
    //     z: -45,
    //     origPos: { x: 0, z: -45 },
    //     currentPlace: "wisemanVillage"
    // },
    // dummy on training hall
    {
        ...enemyInterface,
        _id: `${randNumString()}`,
        x: 0,
        z: 5,
        origPos: { x: 0, z: 5 },
        currentPlace: "churchTrainingHall",
        actionType: "idle",
        name: "wooddummy",
        dn: "Wood Dummy",
        modelStyle: "dummy",
        deathSound: "brokenWoodS",
        hp: 300,
        maxHp: 300,
        stats: {
            dmg: 1,
            magDmg: 1,
            accuracy: 0, //10
            critical: 1.4,
            spd: 3,
            atkSpd: 1
        },
        loots: []
    },
    {
        ...enemyInterface,
        _id: `${randNumString()}`,
        x: -3,
        z: 5,
        origPos: { x: -3, z: 5 },
        currentPlace: "churchTrainingHall",
        actionType: "idle",
        name: "wooddummy",
        dn: "Wood Dummy",
        modelStyle: "dummy",
        deathSound: "brokenWoodS",
        hp: 30,
        maxHp: 30,
        stats: {
            dmg: 1,
            magDmg: 1,
            accuracy: 0, //10
            critical: 1.4,
            spd: 3,
            atkSpd: 1
        },
        loots: []
    },
    {
        ...enemyInterface,
        _id: `${randNumString()}`,
        x: 1,
        z: 5,
        origPos: { x: 1, z: 5 },
        currentPlace: "churchTrainingHall",
        actionType: "idle",
        name: "wooddummy",
        dn: "Wood Dummy",
        modelStyle: "dummy",
        deathSound: "brokenWoodS",
        hp: 30,
        maxHp: 30,
        stats: {
            dmg: 1,
            magDmg: 1,
            accuracy: 0, //10
            critical: 1.4,
            spd: 3,
            atkSpd: 1
        },
        loots: []
    },
    // goblins // afterWarScene
    {
        ...enemyInterface,
        _id: `${randNumString()}`,
        x: -30,
        z: -30,
        origPos: { x: -30, z: -30 },
        currentPlace: "afterWarScene",
    },
    {
        ...enemyInterface,
        _id: `${randNumString()}`,
        x: 1,
        z: 55,
        origPos: { x: 1, z: 55 },
        currentPlace: "afterWarScene",
    },
    {
        ...enemyInterface,
        _id: `${randNumString()}`,
        x: 10,
        z: 40,
        origPos: { x: 10, z: 40 },
        currentPlace: "afterWarScene",
    },
    {
        ...enemyInterface,
        _id: `${randNumString()}`,
        x: -12,
        z: -34,
        origPos: { x: -12, z: -34 },
        currentPlace: "afterWarScene",
    },
    {
        ...enemyInterface,
        _id: `${randNumString()}`,
        x: -20,
        z: -38,
        origPos: { x: -12, z: -34 },
        currentPlace: "afterWarScene",
    },
    // monolith// afterWarScene
    {
        ...enemyInterface,
        _id: `${randNumString()}`,
        x: -5,
        z: 45,
        bodyHeight: 3.4,
        origPos: { x: -5, z: 45 },
        currentPlace: "afterWarScene",
        actionType: "dynamic",
        rangeAtkDetails: {
            range: 15,
            modelName: "sting",            
        },
        name: "orangelith",
        dn: "Orange Lith",
        modelStyle: "monolith",
        deathSound: "beeS",
        encounterSound: "beeS",
        hp: 5700,
        maxHp: 5700,
        stats: {
            dmg: 40,
            magDmg: 1,

            accuracy: 1, //10
            critical: 1.4,
            spd: 3,
            atkSpd: 2.9
        },
        loots: [simpleCoreLoot],
        respawnDetails: {
            willRespawn: true,
            respawnTime: 30 * 1000,
        },
        effects: [
            // { effectType: 'spdrain', chance: 10, permanent: false, dn: 'SP Drained', spcost: 20, hpcost: 0, mpcost: 0, hungercost: 4, energycost: 0 },
            {effectType: 'poisoned', chance: 10, permanent: true, dn:'Venom Extracted', spcost: 20, hpcost:10, mpcost:0, hungercost:4, energycost: 0}
        ],
    },
    // ogresforest
    {
        ...enemyInterface,
        _id: `${randNumString()}`,
        x: -12,
        z: -34,
        origPos: { x: -12, z: -34 },
        currentPlace: "ogresforest",
    },
    {
        ...enemyInterface,
        _id: `${randNumString()}`,
        x: -20,
        z: -38,
        origPos: { x: -12, z: -34 },
        currentPlace: "ogresforest",
    },
    // monolith// ogresforest
    {
        ...enemyInterface,
        _id: `${randNumString()}`,
        x: -5,
        z: 45,
        bodyHeight: 3.4,
        origPos: { x: -5, z: 45 },
        currentPlace: "ogresforest",
        actionType: "dynamic",
        rangeAtkDetails: {
            range: 15,
            modelName: "sting",            
        },
        name: "orangelith",
        dn: "Orange Lith",
        modelStyle: "monolith",
        deathSound: "beeS",
        encounterSound: "beeS",
        hp: 5700,
        maxHp: 5700,
        stats: {
            dmg: 40,
            magDmg: 1,

            accuracy: 1, //10
            critical: 1.4,
            spd: 3,
            atkSpd: 2.9
        },
        loots: [simpleCoreLoot],
        respawnDetails: {
            willRespawn: true,
            respawnTime: 30 * 1000,
        },
        effects: [
            // { effectType: 'spdrain', chance: 10, permanent: false, dn: 'SP Drained', spcost: 20, hpcost: 0, mpcost: 0, hungercost: 4, energycost: 0 },
            {effectType: 'poisoned', chance: 10, permanent: true, dn:'Venom Extracted', spcost: 20, hpcost:10, mpcost:0, hungercost:4, energycost: 0}
        ],
    },
    {
        ...enemyInterface,
        _id: `${randNumString()}`,
        x: 5,
        z: 40,
        bodyHeight: 3.4,
        origPos: { x: -5, z: 45 },
        currentPlace: "ogresforest",
        actionType: "dynamic",
        rangeAtkDetails: {
            range: 15,
            modelName: "sting",            
        },
        name: "orangelith",
        dn: "Orange Lith",
        modelStyle: "monolith",
        deathSound: "beeS",
        encounterSound: "beeS",
        hp: 5700,
        maxHp: 5700,
        stats: {
            dmg: 40,
            magDmg: 1,

            accuracy: 1, //10
            critical: 1.4,
            spd: 3,
            atkSpd: 2.9
        },
        loots: [simpleCoreLoot],
        respawnDetails: {
            willRespawn: true,
            respawnTime: 30 * 1000,
        },
        effects: [
            // { effectType: 'spdrain', chance: 10, permanent: false, dn: 'SP Drained', spcost: 20, hpcost: 0, mpcost: 0, hungercost: 4, energycost: 0 },
            {effectType: 'poisoned', chance: 10, permanent: true, dn:'Venom Extracted', spcost: 20, hpcost:10, mpcost:0, hungercost:4, energycost: 0}
        ],
    },
    {
        ...enemyInterface,
        _id: `${randNumString()}`,
        x: -5,
        z: -35,
        bodyHeight: 3.4,
        origPos: { x: -5, z: 45 },
        currentPlace: "ogresforest",
        actionType: "dynamic",
        rangeAtkDetails: {
            range: 15,
            modelName: "sting",            
        },
        name: "orangelith",
        dn: "Orange Lith",
        modelStyle: "monolith",
        deathSound: "beeS",
        encounterSound: "beeS",
        hp: 5700,
        maxHp: 5700,
        stats: {
            dmg: 40,
            magDmg: 1,

            accuracy: 1, //10
            critical: 1.4,
            spd: 3,
            atkSpd: 2.9
        },
        loots: [simpleCoreLoot],
        respawnDetails: {
            willRespawn: true,
            respawnTime: 30 * 1000,
        },
        effects: [
            // { effectType: 'spdrain', chance: 10, permanent: false, dn: 'SP Drained', spcost: 20, hpcost: 0, mpcost: 0, hungercost: 4, energycost: 0 },
            {effectType: 'poisoned', chance: 10, permanent: true, dn:'Venom Extracted', spcost: 20, hpcost:10, mpcost:0, hungercost:4, energycost: 0}
        ],
    },
    {
        ...enemyInterface,
        _id: `${randNumString()}`,
        x: 6,
        z: -35,
        bodyHeight: 3.4,
        origPos: { x: -5, z: 45 },
        currentPlace: "ogresforest",
        actionType: "dynamic",
        rangeAtkDetails: {
            range: 15,
            modelName: "sting",            
        },
        name: "orangelith",
        dn: "Orange Lith",
        modelStyle: "monolith",
        deathSound: "beeS",
        encounterSound: "beeS",
        hp: 5700,
        maxHp: 5700,
        stats: {
            dmg: 40,
            magDmg: 1,

            accuracy: 1, //10
            critical: 1.4,
            spd: 3,
            atkSpd: 2.9
        },
        loots: [simpleCoreLoot],
        respawnDetails: {
            willRespawn: true,
            respawnTime: 30 * 1000,
        },
        effects: [
            // { effectType: 'spdrain', chance: 10, permanent: false, dn: 'SP Drained', spcost: 20, hpcost: 0, mpcost: 0, hungercost: 4, energycost: 0 },
            {effectType: 'poisoned', chance: 10, permanent: true, dn:'Venom Extracted', spcost: 20, hpcost:10, mpcost:0, hungercost:4, energycost: 0}
        ],
    },
]