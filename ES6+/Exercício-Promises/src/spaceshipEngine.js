export default class {
    constructor(spaceship){
        this.spaceship =spaceship
    }

    turnOn() {
        let currentChargeChecking = this.checkCurrentCharge()
        let shieldChecking = this.shieldTest()
        Promise.all([currentChargeChecking, shieldChecking]).then(results => {
          return this.shieldNormalization(results[1])
        }).then(newShield => {
          this.spaceship.shield = newShield
          console.log(`(${this.spaceship.name}) Partida autorizada: Escudo (${this.spaceship.shield}) - Carga(${this.spaceship.currentCharge}GJ)`)
        }).catch(error => {
          console.log(`(${this.spaceship.name}) Partida não autorizada: ${error}`)
        })
      }

    checkCurrentCharge(){
        return new Promise((resolve, reject) => {
            let currentCharge = this.spaceship.currentPercentCharge()

            if (currentCharge>= 30){
                resolve (currentCharge)
            }else{
                reject (`Carga em apenas ${currentCharge}GJ`)
            }
        })
    }
    shieldTest(){

        return new Promise((resolve, reject) => {
            let doubleShield = this.spaceship.shield * 2

            if (doubleShield >= 100){
                resolve (doubleShield)
            }else{
                reject ("Escudo em sobrecarga")
            }
        })

    }
    shieldNormalization(shield){
        return new Promise((resolve, reject) => {
            let normalizationShield = shield * 0.7

            if (normalizationShield > 120){
                reject ("Escudo em supercarga")
            }else{
                resolve (normalizationShield)
            }
        })
    }
   
}

