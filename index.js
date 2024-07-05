const http = require("http")
const express = require("express")
const app = express()
const cors = require("cors");
const server = http.createServer(app)
const {Server} = require("socket.io")
const PORT = process.env.PORT || 3000

const {randNumString,randNum} = require("./tools/tools.js")
const enemyArray = require("./recources/enemyDetails.js")
const treasuresData = require("./recources/treasures.js");
const enemyByKeyClass = require("./recources/enemyByKeyClass.js");

app.use(express.json())
app.use(express.urlencoded({extended: false}))
let worldMessage = []
let uzers = []
let gatez = []
let tcpEnemies = enemyArray
let treasurez = treasuresData

const log = console.log

app.get("/", (req, res) => {
    res.send(uzers).status(200)
})
const io = new Server(server, {
    cors: { 
        origin:[
            'https://grimwraith.vercel.app',
            'https://html-classic.itch.zone',
            'https://rafael29.itch.io/grim-wraith',
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
            
        }else{
            uzers.push({...data, socketId: socket.id})
            log(`${data.name} has joined ins ${data.currentPlace}`)
            io.emit("userJoined", {charData: data, uzers, treasurez, tcpEnemies, worldMessage, gatez})
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
        if(!enemyTarg) return log("not found enemy to be damaged ", data.targetId)
        
        if(!data.isMissed){
            enemyTarg.hp -= data.hasWeapon ? data.dmgDetails.weaponDmg : data.dmgDetails.physicalDmg
            if(enemyTarg.hp <= 0) tcpEnemies = tcpEnemies.filter(enemy => enemy._id !== data.targetId)
        }
        player.x = data.pos.x
        player.z = data.pos.z
        io.emit("player-attacked", {...data, hp: enemyTarg.hp, maxHp: enemyTarg.maxHp})
    })
    // EQUIPING
    socket.on("emitEquipItem", data =>{
        const {playerId, itemName, itemModelStyle,  itemType, currentPlace} = data
        const isValidPlayer = uzers.find(uzr => uzr._id === playerId)
        if(!isValidPlayer) return log(`no valid player ${playerId}`)
    
        io.emit('equiped-item', data)
    })

    //enemy related
    socket.on('enemyChangeTarget', data => {
        tcpEnemies.forEach(enem => {
            if(data._id === enem._id){
                enem._targetId = data.newTargetId
            }
        })
        io.emit("enemy-changedtarget", data)
    })
    socket.on("respawnEnemy", data => {
        const {maxHp, name, respawnDetails} = data
       
        setTimeout(() => {
            tcpEnemies.push({...data,
                _id: randNumString(),
                hp: maxHp,
                _isMoving: false,
                _targetId: false,
                _dirTarg: {x:0,z:0},
                _attacking: false,
            })
            io.emit("enemy-respawned", tcpEnemies)
        }, respawnDetails.respawnTime)
    })
    socket.on("removeEnemy", enemyId => {
        tcpEnemies = tcpEnemies.filter(enemy => enemy._id !== enemyId)
 
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
    socket.on("registerPlayerAsEnemy", data => {
        tcpEnemies.forEach(enem => {
            if(data._id === enem._id){
                enem._targetId = data.targetId
            }
        })
        io.emit("registered-playerAsEnemy", tcpEnemies)
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
    socket.on('willAnimateEmoji', data => {
        const player = uzers.find(pl => pl._id === data.playerId)
        if(!player) return log("will move player not found")
        if(player._dead) return console.log("is dead")
        // if(player._attacking) return console.log("is attacking")
        if(player._isMoving) return console.log("is moving")

        io.emit("emoji-animated", data)
    })
    // movements    
    socket.on("emitMove", data => {
        const {playerId, playerPos,targetId, dirTarg} = data
        const player = uzers.find(pl => pl._id === playerId)

        if(!player) return log("will move player not found")
        if(player._dead) return
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

        if(!player) return log("will stop player not found")
        player._isMoving = false        
        player._targetId = targetId
        player.x = playerPos.x
        player.z = playerPos.z
        player._dirTarg = dirTarg
        if(!player._targetId) player._attacking = false
        io.emit("on-stop", data)
    })
    // update hero stats
    socket.on('update-stat', data => {
        const player = uzers.find(user => user._id === data._id)
        if(!player) return log("uzer died id not found. line.148")
        player.stats = data.stats
        io.emit('updated-herostat', data)
    })
    // REVIVCAL
    socket.on("will-revive", data =>{
        const {_id,pos,currentPlace} = data
        const player = uzers.find(user => user._id === _id)
        if(!player) return log("uzer died id not found. line.147")
        if(player){
            player._dead = false
            player._canMove = true
            player._attacking = false
            player._targetId = false
            player.currentPlace = currentPlace
            player._targetId
            player.x = pos.x
            player.z = pos.z
        }        
        io.emit('player-revived', {_id: player._id})
    })
    // KEYS INVOLVED
    socket.on('add-gate', data => {
        const {_id,pos,dirTarg, enemyClass, currentPlace, placeDetail} = data
        const existingPlace = gatez.find(place => place._id === _id)
        if(existingPlace) return log('place already exist')
        gatez.push(data)
        io.emit('respawnGate', gatez)
        // enemy inside the gate
        const enemyToSpawn = enemyByKeyClass.find(enem => enem.name === placeDetail.creepsInfo.name)
        if(enemyToSpawn) console.log("there is a monster to spawn")
        // couple of enemies max maybe 15
        const areaMaxSize = placeDetail.ground.widthHeight.width*.8
        for(var i = 0;i <= 15;i++){            
            const pos =  {
                x: -areaMaxSize + Math.random()*areaMaxSize*2,
                z: -areaMaxSize + Math.random()*areaMaxSize*2,
            }
            tcpEnemies.push({...enemyToSpawn, _id: `${randNumString()}`,
            x: pos.x,
            z:pos.z,
            origPos: pos,
            currentPlace: placeDetail.placeName })
        }
        if(!placeDetail.bossInfo) return
        const bossToSpawn = enemyByKeyClass.find(enem => enem.name === placeDetail.bossInfo.name)
        if(!bossToSpawn) return console.log("boss not found")
        if(bossToSpawn) log('there is a boss to spawn')
        const bossInf = placeDetail.bossInfo
        // one boss
        const bossPos =  {
            x: bossInf.x,
            z: bossInf.z
        }
        tcpEnemies.push({...bossToSpawn, _id: `${randNumString()}`,
            x: bossPos.x,
            z: bossPos.z,
            origPos: bossPos,
            currentPlace: placeDetail.placeName 
        })
    })
    socket.on('put-gate-status-completed', data => {
        const { _id} = data
        const gatePlace = gatez.find(place => place._id === _id)
        if(!gatePlace) return log('place already disposed');
        gatez = gatez.filter(gate => gate._id !== _id)
        
    })
    // WORLD MESSAGE
    socket.on('send-message', data =>{
        worldMessage.push(data)
      
        io.emit("world-message", worldMessage)
    })
    // DISCONNECTIONS
    socket.on('will-die', data => {
        const theUzer = uzers.find(user => user._id === data._id)
        if(!theUzer) return log("uzer died id not found. line.147")
        if(theUzer){
            theUzer._dead = true
            theUzer._canMove = false
            // uzers = uzers.filter(user => user._id !== data._id)
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

