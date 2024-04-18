function randNumString(){
    return Math.random().toString().split(".")[1]
}
function randNum(_min, _max){
    const maxNum = _min+_max
    const num = _min + Math.random()*maxNum
    return Math.floor(num-1.1)
}

module.exports = {randNumString,randNum}