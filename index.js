const http = require("http")
const express = require("express")
const app = express()
const cors = require("cors");
const server = http.createServer(app)
const {Server} = require("socket.io")
const PORT = process.env.PORT || 3000

const {randNumString,randNum} = require("./tools/tools.js")
const enemyArray = require("./recources/enemyDetails.js")

app.use(express.json())
app.use(express.urlencoded({extended: false}))
let worldMessage = []

let uzers = []
let tcpEnemies = enemyArray
let treasurez = [
    {
    pos: {x:0, y:0,z:4},
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
    durability: { current: 100, max: 100},
    price: 1000,
    qnty: 1,
    desc: "Frost Bite, A deadly Blade. It's blade is sharp as frozen blade",
    rarity: "rare"
},
{
    pos: {x:0, y:0,z:4},
    rotateY: 0,
    currentPlace: "church",
    itemId: randNumString(), // should be string also in client
    name: "hunterplate", // is also the image name
    dn: "Hunter Plate",
    itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
    itemType: "armor", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
    weaponType: "armor",
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
    price: 1000,
    qnty: 1,
    desc: "A very light armor can outrun any kind of danger",
    rarity: "normal"
},
{
    pos: {x:-5, y:0,z:-40},
    rotateY: 0,
    currentPlace: "wisemanVillage",
    itemId: randNumString(), // should be string also in client
    name: "leathermark", // is also the image name
    dn: "Leather Marc",
    itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
    itemType: "armor", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
    weaponType: "armor",
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
    price: 1000,
    qnty: 1,
    desc: "From ancient time gladiators call this leather marc for being light as leather and hard as marc",
    rarity: "rare"
},
{
    pos: {x:0, y:0,z:4},
    rotateY: 0,
    currentPlace: "church",
    itemId: randNumString(), // should be string also in client
    name: "warriorblade", // is also the image name
    dn: "Warrior Blade",
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
    durability: { current: 100, max: 100},
    price: 1000,
    qnty: 1,
    desc: "Durable blade, suitable for war and dungeon exploring",
    rarity: "rare"
},
{
    pos: {x:2, y:0,z:-7},
    rotateY: 0,
    currentPlace: "church",
    itemId: randNumString(), // should be string also in client
    name: "garaff", // is also the image name
    dn: "Garalf Staff",
    itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
    itemType: "weapon", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
    weaponType: "staff",
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
    price: 1000,
    qnty: 1,
    desc: "A staff easy to wield and popular among nobles",
    rarity: "rare"
},
{
    pos: {x:0, y:0,z:-30},
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
    price: 1000,
    qnty: 1,
    desc: "This helmet is light and useful for first time adventurers",
    rarity: "rare"
},
{
    pos: {x:0, y:0,z:-15},
    rotateY: 0,
    currentPlace: "church",
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
    price: 1000,
    qnty: 1,
    desc: "This helmet is light and useful for first time adventurers",
    rarity: "rare"
},
{
    pos: {x:-2, y:0,z:-6},
    rotateY: 0,
    currentPlace: "church",
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
    price: 1000,
    qnty: 1,
    desc: "This Armor is light and useful for first time adventurers",
    rarity: "rare"
},
{
    pos: {x:-2, y:0,z:-10},
    rotateY: 0,
    currentPlace: "church",
    itemId: randNumString(), // should be string also in client
    name: "priestbelt", // is also the image name
    itemModelStyle: "prieststyle1",
    dn: "Priest Belt",
    itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
    itemType: "belt", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
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
    price: 1000,
    qnty: 1,
    desc: "This Belt is light and useful for first time adventurers",
    rarity: "normal"
},
{
    pos: {x:2, y:0,z:-10},
    rotateY: 0,
    currentPlace: "church",
    itemId: randNumString(), // should be string also in client
    name: "priestvest", // is also the image name
    itemModelStyle: "prieststyle1",
    dn: "Priest Vest",
    itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
    itemType: "cloak", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
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
    price: 1000,
    qnty: 1,
    desc: "This Cloak is light and useful for first time adventurers",
    rarity: "normal"
},
{
    pos: {x:5, y:0,z:-5},
    rotateY: 0,
    currentPlace: "church",
    itemId: randNumString(), // should be string also in client
    name: "holycloak", // is also the image name
    itemModelStyle: "prieststyle1",
    dn: "Holy Cloak",
    itemCateg: "equipable",//equipable,crafting(for item looted),consum(/foods/buffs/potions)
    itemType: "cloak", // weapon/staff/spear/Pauldrons//armor/greaves || //food//potion//buff
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
    price: 1000,
    qnty: 1,
    desc: "This Cloak is light and useful for first time adventurers",
    rarity: "normal"
},
]

const log = console.log

app.get("/", (req, res) => {
    res.send(uzers).status(200)
})
const io = new Server(server, {
    cors: { 
        origin:[
            'https://grimwraith.vercel.app',
            'http://localhost:5173'
        ],
        methods: ["GET", "POST"]
    }
})
// ,'http://localhost:8080', 'https://dungeonborn.vercel.app'
// const io = require("socket.io")(server, {
//     allowRequest: (req, callback) => {
//       const noOriginHeader = req.headers.origin === undefined;
//       callback(null, noOriginHeader);
//     }
// });

io.on("connection", socket => {
    socket.on("join", data => {
        const isUser = uzers.some(user => user._id === data._id)
        if(isUser){
            io.emit("deliver-reload", data._id)
            log("user already in")
        }else{
            uzers.push({...data, socketId: socket.id})
            log(`${data.name} has joined ins ${data.currentPlace}`)
            io.emit("userJoined", {charData: data, uzers, treasurez, tcpEnemies})
            uzers.forEach(uzr => log(`${uzr.name}, : ${uzr.currentPlace}`))            
        }
    })
    // attacking related
    socket.on("emitPlayerAttack", data => {
        const player = uzers.find(uzr => uzr._id === data._id)
        if(!player) return log(`no valid player ${data._id}`)
        player._attacking = true
        player._isMoving = false
        const enemyTarg = tcpEnemies.find(ene => ene._id === data.targetId)
        if(!enemyTarg) return log("notffound enemy to be damaged")
        enemyTarg.hp -= data.hasWeapon ? data.dmgDetails.weaponDmg : data.dmgDetails.physicalDmg
        player.x = data.pos.x
        player.z = data.pos.z
        io.emit("player-attacked", {...data, hp: enemyTarg.hp, maxHp: enemyTarg.maxHp})
    })
    // EQUIPING
    socket.on("emitEquipItem", data =>{
        const {playerId, itemName, itemModelStyle,  itemType, currentPlace} = data
        const isValidPlayer = uzers.find(uzr => uzr._id === playerId)
        if(!isValidPlayer) return log(`no valid player ${playerId}`)
        log(data)
        io.emit('equiped-item', data)
    })
    //enemy related
    socket.on("removeEnemy", enemyId => {
        tcpEnemies = tcpEnemies.filter(enemy => enemy._id !== enemyId)
        log(tcpEnemies)
        io.emit("enemy-removed", enemyId)
    })
    socket.on("enemyWillAttack", data => {
        tcpEnemies.forEach(enem => {
            if(data._id === enem._id){
                enem._targetId = data.targetId
                enem._isMoving = false
                enem._attacking = true
            }
        })
        io.emit("enemy-attacked", data)
    })
    socket.on("enemyWillChase", data => {
        tcpEnemies.forEach(enem => {
            if(data._id === enem._id){
                enem._targetId = data.targetId
                enem._isMoving = true
                enem._attacking = false
                if(data.actionType === "idle"){
                    enem._isMoving = false
                    enem._attacking = true
                }
            }
        })
        io.emit("enemy-chasing", data)
    })
    // treasure
    socket.on("openTreasure", data => {
        const {itemTreasureId, playerId} = data
        const theTreasureHere = treasurez.find(tre => tre.itemId === itemTreasureId)
        if(!theTreasureHere) return console.log("treasure maybe opened and not here")
        
        io.emit("receive-treasure", {item: theTreasureHere, playerId})
        treasurez = treasurez.filter(tre => tre.itemId !== itemTreasureId)
        console.log("successfully opened treasure")
    })
    // movements
    socket.on("emitMove", data => {
        const {playerId, playerPos,targetId, dirTarg} = data
        const player = uzers.find(pl => pl._id === playerId)

        if(!player) return log("will move player not found")
        player._isMoving = true
        if(targetId) {
            player._attacking = true
            player._targetId = targetId
        }
        player._dirTarg = dirTarg
        io.emit("on-move", data)
    })
    socket.on("emitStop", data => {
        const {playerId, playerPos, dirTarg, targetId} = data
        const player = uzers.find(pl => pl._id === playerId)
        if(uzers.length){
            uzers.forEach(uzr => log(uzr._id))
        }
        if(!player) return log("will stop player not found")
        player._isMoving = false
        player._targetId = targetId
        player.x = playerPos.x
        player.z = playerPos.z
        player._dirTarg = dirTarg
        io.emit("on-stop", data)
    })
    
    // DISCONNECTIONS
    socket.on('will-die', data => {
        const theUzer = uzers.find(user => user._id === data._id)
        if(theUzer){
            uzers = uzers.filter(user => user._id !== data._id)
            tcpEnemies = tcpEnemies.map(mon => mon._targetId === theUzer._id ? {...mon, _isMoving: false, _attacking: false, _targetId: false} : mon)
        }
        log("total of players after disconnect " + uzers.length)
        io.emit('player-death', {_id: theUzer._id})
    })
    socket.on('dispose', data => {
        const theUzer = uzers.find(user => user._id === data._id)
        if(theUzer){
            uzers = uzers.filter(user => user._id !== data._id)
            // monz = monz.map(mon => mon.targHero === theUzer._id ? {...mon, isChasing: false, isAttacking: false, targHero: undefined} : mon)
        }
        log("total of players after disconnect " + uzers.length)
        io.emit('removeChar', data)
    })
    socket.on("disconnect", () => {
        const theUzer = uzers.find(user => user.socketId === socket.id)
        if(theUzer){
            const newArr = uzers.filter(user => user.socketId !== socket.id)
            uzers = newArr
            // monz = monz.map(mon => mon.targHero === theUzer._id ? {...mon, isChasing: false, isAttacking: false, targHero: undefined} : mon)
            io.emit("aUserDisconnect", theUzer)
            // log("total of players after disconnect " + uzers.length)
        }else{log("a user disconnects not found !")}
    })
})

server.listen(PORT, () => log("TCP server is on"))

