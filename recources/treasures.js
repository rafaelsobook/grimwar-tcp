const {randNumString,getNumUntil} = require('../tools/tools.js')
module.exports =  [
    {
    pos: {x:-44, y:0,z:30},
    rotateY: 0,
    currentPlace: "wisemanVillage",
    itemId: randNumString(), // should be string also in client
    name: "frostbite", // is also the image name
    dn: "Frost Bite",
    itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
    itemType: "weapon", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
    weaponType: "sword",
    equipAbilities: { 
        dmg: 100, def: 100, magicDmg: 100, plusStr: 0, plusDex: 0, plusInt: 0,
    }, //str(hp,dmg) // dex(def, spd) // int(magicDmg, mana)
    // if you calc spd(1/10 = .1) mychar.spd += plusSpd/10// it should only be .1 to 1
    consumeAbilities: { plusHp: 100, plusMp: 100, plusSp: 100, plusDmg: 10, plusSpd: 1, }, //for buffs foods potions
    equiped: false,
    soulFeed: 0,
    isEnhanceAble: true, // only for equipable items
    enhancedLevel: 0,
    slots: [],// { name, dn, equipAbilities } cores
    durability: { current: 100, max: 100},
    price: 10,
    qnty: 1,
    desc: "Frost Bite, A deadly Blade. It's blade is sharp as frozen blade",
    rarity: "rare"
    },
    {
        pos: {x:-63, y:0,z:60},
        rotateY: 0,
        currentPlace: "wisemanVillage",
        itemId: randNumString(), // should be string also in client
        name: "bronzehelm", // is also the image name
        dn: "Bronze Helm",
        itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
        itemType: "helmet", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
        equipAbilities: { 
            dmg: 100, def: 100, magicDmg: 100, plusStr: 0, plusDex: 0, plusInt: 0,
        }, //str(hp,dmg) // dex(def, spd) // int(magicDmg, mana)
        // if you calc spd(1/10 = .1) mychar.spd += plusSpd/10// it should only be .1 to 1
        consumeAbilities: { plusHp: 100, plusMp: 100, plusSp: 100, plusDmg: 10, plusSpd: 1, }, //for buffs foods potions
        equiped: false,
        soulFeed: 0,
        isEnhanceAble: true, // only for equipable items
        enhancedLevel: 0,
        durability: { current: 100, max: 100},
        price: 9,
        qnty: 1,
        desc: "This helmet is light and useful for first time adventurers",
        rarity: "rare"
    },
    {
        pos: {x:-1, y:0,z:-50},
        rotateY: 0,
        currentPlace: "wisemanVillage",
        itemId: randNumString(), // should be string also in client
        name: "orionhelm", // is also the image name
        dn: "Orion Helm",
        itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
        itemType: "helmet", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
        fullCover: true,
        equipAbilities: { 
            dmg: 0, def: 100, magicDmg: 100, plusStr: 0, plusDex: 0, plusInt: 0,
        }, //str(hp,dmg) // dex(def, spd) // int(magicDmg, mana)
        // if you calc spd(1/10 = .1) mychar.spd += plusSpd/10// it should only be .1 to 1
        consumeAbilities: { plusHp: 100, plusMp: 100, plusSp: 100, plusDmg: 10, plusSpd: 1, }, //for buffs foods potions
        equiped: false,
        soulFeed: 0,
        isEnhanceAble: true, // only for equipable items
        enhancedLevel: 0,
        durability: { current: 100, max: 100},
        price: 29,
        qnty: 1,
        desc: "This Helm is a gleaming, gold-plated helmet worn by noble knights in medieval wars. Its intricately engraved surface symbolizes power and prestige",
        rarity: "rare"
    },
    {
        pos: {x:-25, y:0,z:23},
        rotateY: 0,
        currentPlace: "afterWarScene",
        itemId: randNumString(), // should be string also in client
        name: "silverineplate", // is also the image name
        dn: "Silverine Plate",
        itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
        itemType: "armor", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
        equipAbilities: { 
            dmg: 100, def: 100, magicDmg: 100, plusStr: 0, plusDex: 0, plusInt: 0,
        }, //str(hp,dmg) // dex(def, spd) // int(magicDmg, mana)
        // if you calc spd(1/10 = .1) mychar.spd += plusSpd/10// it should only be .1 to 1
        consumeAbilities: { plusHp: 100, plusMp: 100, plusSp: 100, plusDmg: 10, plusSpd: 1, }, //for buffs foods potions
        equiped: false,
        soulFeed: 0,
        isEnhanceAble: true, // only for equipable items
        enhancedLevel: 0,
        durability: { current: 100, max: 100},
        price: 9,
        qnty: 1,
        desc: "This Armor is light and useful for first time adventurers",
        rarity: "rare"
    },

// {
//     pos: {x:1, y:0,z:-4},
//     rotateY: 0,
//     currentPlace: "church",
//     itemId: randNumString(), // should be string also in client
//     name: "knightaxe", // is also the image name
//     dn: "Knight's Axe",
//     itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
//     itemType: "weapon", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff/cores
//     weaponType: "axe",
//     equipAbilities: { 
//         dmg: 100, def: 100, magicDmg: 100, plusStr: 0, plusDex: 0, plusInt: 0,
//     }, //str(hp,dmg) // dex(def, spd) // int(magicDmg, mana)
//     // if you calc spd(1/10 = .1) mychar.spd += plusSpd/10// it should only be .1 to 1
//     consumeAbilities: { plusHp: 100, plusMp: 100, plusSp: 100, plusDmg: 10, plusSpd: 1, }, //for buffs foods potions
//     equiped: false,
//     soulFeed: 0,
//     isEnhanceAble: true, // only for equipable items
//     enhancedLevel: 0,
//     slots: [],// { name, dn, equipAbilities } cores
//     durability: { current: 100, max: 100},
//     price: 9,
//     qnty: 1,
//     desc: "From war to war this axe is commendable for battle, durable and sharp",
//     rarity: "rare"
// },
// {
//     pos: {x:0, y:0,z:4},
//     rotateY: 0,
//     currentPlace: "church",
//     itemId: randNumString(), // should be string also in client
//     name: "hunterplate", // is also the image name
//     dn: "Hunter Plate",
//     itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
//     itemType: "armor", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
//     weaponType: "armor",
//     equipAbilities: { 
//         dmg: 100, def: 100, magicDmg: 100, plusStr: 0, plusDex: 0, plusInt: 0,
//     }, //str(hp,dmg) // dex(def, spd) // int(magicDmg, mana)
//     // if you calc spd(1/10 = .1) mychar.spd += plusSpd/10// it should only be .1 to 1
//     consumeAbilities: { plusHp: 100, plusMp: 100, plusSp: 100, plusDmg: 10, plusSpd: 1, }, //for buffs foods potions
//     equiped: false,
//     soulFeed: 0,
//     isEnhanceAble: true, // only for equipable items
//     enhancedLevel: 0,
//     durability: { current: 100, max: 100},
//     price: 9,
//     qnty: 1,
//     desc: "A very light armor can outrun any kind of danger",
//     rarity: "normal"
// },
// {
//     pos: {x:-5, y:0,z:-40},
//     rotateY: 0,
//     currentPlace: "wisemanVillage",
//     itemId: randNumString(), // should be string also in client
//     name: "leathermark", // is also the image name
//     dn: "Leather Marc",
//     itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
//     itemType: "armor", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
//     weaponType: "armor",
//     equipAbilities: { 
//         dmg: 100, def: 100, magicDmg: 100, plusStr: 0, plusDex: 0, plusInt: 0,
//     }, //str(hp,dmg) // dex(def, spd) // int(magicDmg, mana)
//     // if you calc spd(1/10 = .1) mychar.spd += plusSpd/10// it should only be .1 to 1
//     consumeAbilities: { plusHp: 100, plusMp: 100, plusSp: 100, plusDmg: 10, plusSpd: 1, }, //for buffs foods potions
//     equiped: false,
//     soulFeed: 0,
//     isEnhanceAble: true, // only for equipable items
//     enhancedLevel: 0,
//     durability: { current: 100, max: 100},
//     price: 9,
//     qnty: 1,
//     desc: "From ancient time gladiators call this leather marc for being light as leather and hard as marc",
//     rarity: "rare"
// },
// {
//     pos: {x:0, y:0,z:4},
//     rotateY: 0,
//     currentPlace: "church",
//     itemId: randNumString(), // should be string also in client
//     name: "warriorblade", // is also the image name
//     dn: "Warrior Blade",
//     itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
//     itemType: "weapon", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
//     weaponType: "sword",
//     equipAbilities: { 
//         dmg: 100, def: 100, magicDmg: 100, plusStr: 0, plusDex: 0, plusInt: 0,
//     }, //str(hp,dmg) // dex(def, spd) // int(magicDmg, mana)
//     // if you calc spd(1/10 = .1) mychar.spd += plusSpd/10// it should only be .1 to 1
//     consumeAbilities: { plusHp: 100, plusMp: 100, plusSp: 100, plusDmg: 10, plusSpd: 1, }, //for buffs foods potions
//     equiped: false,
//     soulFeed: 0,
//     isEnhanceAble: true, // only for equipable items
//     enhancedLevel: 0,
//     slots: [],// { name, dn, equipAbilities } cores
//     durability: { current: 100, max: 100},
//     price: 9,
//     qnty: 1,
//     desc: "Durable blade, suitable for war and dungeon exploring",
//     rarity: "rare"
// },
// {
//     pos: {x:2, y:0,z:-7},
//     rotateY: 0,
//     currentPlace: "church",
//     itemId: randNumString(), // should be string also in client
//     name: "garaff", // is also the image name
//     dn: "Garalf Staff",
//     itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
//     itemType: "weapon", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
//     weaponType: "staff",
//     equipAbilities: { 
//         dmg: 100, def: 100, magicDmg: 100, plusStr: 0, plusDex: 0, plusInt: 0,
//     }, //str(hp,dmg) // dex(def, spd) // int(magicDmg, mana)
//     // if you calc spd(1/10 = .1) mychar.spd += plusSpd/10// it should only be .1 to 1
//     consumeAbilities: { plusHp: 100, plusMp: 100, plusSp: 100, plusDmg: 10, plusSpd: 1, }, //for buffs foods potions
//     equiped: false,
//     soulFeed: 0,
//     isEnhanceAble: true, // only for equipable items
//     enhancedLevel: 0,
//     slots: [],// { name, dn, equipAbilities } cores
//     durability: { current: 100, max: 100},
//     price: 9,
//     qnty: 1,
//     desc: "A staff easy to wield and popular among nobles",
//     rarity: "rare"
// },
// {
//     pos: {x:0, y:0,z:-15},
//     rotateY: 0,
//     currentPlace: "church",
//     itemId: randNumString(), // should be string also in client
//     name: "bronzehelm", // is also the image name
//     dn: "Bronze Helm",
//     itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
//     itemType: "helmet", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
//     equipAbilities: { 
//         dmg: 100, def: 100, magicDmg: 100, plusStr: 0, plusDex: 0, plusInt: 0,
//     }, //str(hp,dmg) // dex(def, spd) // int(magicDmg, mana)
//     // if you calc spd(1/10 = .1) mychar.spd += plusSpd/10// it should only be .1 to 1
//     consumeAbilities: { plusHp: 100, plusMp: 100, plusSp: 100, plusDmg: 10, plusSpd: 1, }, //for buffs foods potions
//     equiped: false,
//     soulFeed: 0,
//     isEnhanceAble: true, // only for equipable items
//     enhancedLevel: 0,
//     durability: { current: 100, max: 100},
//     price: 9,
//     qnty: 1,
//     desc: "This helmet is light and useful for first time adventurers",
//     rarity: "rare"
// },
// {
//     pos: {x:-2, y:0,z:-10},
//     rotateY: 0,
//     currentPlace: "church",
//     itemId: randNumString(), // should be string also in client
//     name: "priestbelt", // is also the image name
//     itemModelStyle: "prieststyle1",
//     dn: "Priest Belt",
//     itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
//     itemType: "belt", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
//     equipAbilities: { 
//         dmg: 100, def: 100, magicDmg: 100, plusStr: 0, plusDex: 0, plusInt: 0,
//     }, //str(hp,dmg) // dex(def, spd) // int(magicDmg, mana)
//     // if you calc spd(1/10 = .1) mychar.spd += plusSpd/10// it should only be .1 to 1
//     consumeAbilities: { plusHp: 100, plusMp: 100, plusSp: 100, plusDmg: 10, plusSpd: 1, }, //for buffs foods potions
//     equiped: false,
//     soulFeed: 0,
//     isEnhanceAble: true, // only for equipable items
//     enhancedLevel: 0,
//     durability: { current: 100, max: 100},
//     price: 9,
//     qnty: 1,
//     desc: "This Belt is light and useful for first time adventurers",
//     rarity: "normal"
// },
// {
//     pos: {x:2, y:0,z:-10},
//     rotateY: 0,
//     currentPlace: "church",
//     itemId: randNumString(), // should be string also in client
//     name: "priestvest", // is also the image name
//     itemModelStyle: "prieststyle1",
//     dn: "Priest Vest",
//     itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
//     itemType: "cloak", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
//     equipAbilities: { 
//         dmg: 100, def: 100, magicDmg: 100, plusStr: 0, plusDex: 0, plusInt: 0,
//     }, //str(hp,dmg) // dex(def, spd) // int(magicDmg, mana)
//     // if you calc spd(1/10 = .1) mychar.spd += plusSpd/10// it should only be .1 to 1
//     consumeAbilities: { plusHp: 100, plusMp: 100, plusSp: 100, plusDmg: 10, plusSpd: 1, }, //for buffs foods potions
//     equiped: false,
//     soulFeed: 0,
//     isEnhanceAble: true, // only for equipable items
//     enhancedLevel: 0,
//     durability: { current: 100, max: 100},
//     price: 9,
//     qnty: 1,
//     desc: "This Cloak is light and useful for first time adventurers",
//     rarity: "normal"
// },
// {
//     pos: {x:5, y:0,z:-5},
//     rotateY: 0,
//     currentPlace: "church",
//     itemId: randNumString(), // should be string also in client
//     name: "holycloak", // is also the image name
//     itemModelStyle: "prieststyle1",
//     dn: "Holy Cloak",
//     itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
//     itemType: "cloak", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
//     equipAbilities: { 
//         dmg: 100, def: 100, magicDmg: 100, plusStr: 0, plusDex: 0, plusInt: 0,
//     }, //str(hp,dmg) // dex(def, spd) // int(magicDmg, mana)
//     // if you calc spd(1/10 = .1) mychar.spd += plusSpd/10// it should only be .1 to 1
//     consumeAbilities: { plusHp: 100, plusMp: 100, plusSp: 100, plusDmg: 10, plusSpd: 1, }, //for buffs foods potions
//     equiped: false,
//     soulFeed: 0,
//     isEnhanceAble: true, // only for equipable items
//     enhancedLevel: 0,
//     durability: { current: 100, max: 100},
//     price: 9,
//     qnty: 1,
//     desc: "This Cloak is light and useful for first time adventurers",
//     rarity: "normal"
// },
]