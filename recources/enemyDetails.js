const {randNumString} = require("../tools/tools.js")
let enemyInterface = {
    _id: `${randNumString()}`,
    maxDistance: 1.1,
    name: "dirtGoblin",
    dn: "dirt goblin",
    modelStyle: "goblin",
    stats: { 
        dmg: 1,
        magDmg: 1, 
        accuracy: 1, //10
        critical: 1.4, 
        spd: 3,
        atkSpd: 2000
    },
    lvl: 2,
    hp: 320,
    maxHp: 320,
    expToGain: 100,
    x:3.6,
    z: -40,
    titles: ['human killer'],
    skills: [], 
    currentPlace: "wisemanVillage",
    status: [], // sickness //poisoned etc
    regens: {sp: 1, hp: 1, mana: 1},
    monsSoul: 2, // toReceive when killed
    aptitude: ['light'],
    blessings: ["holyHand"],
    race: "monster",
    characterType:"enemy",// npcStandby//npcEnemy//npcFighter//npcWalk
    actionType: "chasing", //idle//chasing//throwing//dynamic
    randomSpeech: [            
        {name: "", message: "Weapons are reliable when facing danger"}, 
        {name: "", message: "But If you're planning to flee, better drop it to loss weight"},
        {name: "", message: "We have Geralt for crafting weapons, he just need the materials for it"}
    ],
    _isMoving: false,
    _targetId: false,
    _dirTarg: {x:0,z:0},
    _attacking: false,
}
module.exports = [
    enemyInterface
]