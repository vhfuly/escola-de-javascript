let komodoShip = {
    name: "Komodo",
    velocity: 80,
    aceletration: 0
}


const velocityAfter2Seconds = (velocity,aceletration) => {
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            if (aceletration> 0){
                velocity += aceletration *2
                console.log(`Nova Velocidade : ${velocity}`)
                resolve(velocity)
            } else {
                console.log("Aceleração invalida")
                reject("Não possui aceleração")
            }
        },2000)
    })
}

velocityAfter2Seconds(komodoShip.velocity, komodoShip.aceletration).then(velocity=>{
    komodoShip.velocity = velocity
    console.log("depois de acelerar\n", komodoShip)
}).catch(message=>{
    console.log(`komodo : ${message}`)
})

console.log("Execução de Promise")
console.log(komodoShip)

