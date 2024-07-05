const { randNumString } = require("../tools/tools.js")
module.exports = {
    simpleCoreLoot = {
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
}