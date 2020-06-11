
const spaceship = {
    name: "Rontaro",
    currentBateryCharge: 50,
    consumptionPerKms: 0.00008
  }
  
  const updateBateryCharge = function(chargeConsumed) {
    return new Promise((resolve, reject) => {
      spaceship.currentBateryCharge -= chargeConsumed
      if(spaceship.currentBateryCharge > 0) {
        resolve(spaceship.currentBateryCharge)
      } else {
        reject("Bateria esgotada! Nave será desativada em alguns segundos.")
      }
    })
  }
  
  const calculateBateryConsumption = function(velocity, seconds) {
    return new Promise((resolve, reject) => {
      if(spaceship.consumptionPerKms <= 0 || velocity <= 0) {
        reject("Nave está parada!")
      } else {
        let chargeConsumed = spaceship.consumptionPerKms * velocity * seconds
        resolve(chargeConsumed)
      }
    })
}

calculateBateryConsumption(90, 300).then(changerConsumed=>{
    return updateBateryCharge(changerConsumed)
}).then(newChange=>{
    console.log(`Carga atual : ${newChange}`)
}).catch(error=>{
    console.log(error)
})
