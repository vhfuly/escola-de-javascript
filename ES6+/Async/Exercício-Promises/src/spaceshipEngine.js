export default class {

    constructor(spaceship){
        this.spaceship =spaceship
    }

    async turnOn() {
      try {
        let currentChargeChecking = this.checkCurrentCharge()
        let shieldChecking = this.shieldTest()
        let results = await Promise.all([currentChargeChecking, shieldChecking])
        this.spaceship.shield = await this.shieldNormalization(results[1])
        console.log(`(${this.spaceship.name}) Partida autorizada: Escudo (${this.spaceship.shield}) - Carga(${this.spaceship.currentCharge}GJ)`)
      } catch(error) {
        console.log(`(${this.spaceship.name}) Partida não autorizada: ${error}`)
      }
      }

        async checkCurrentCharge(){
            let currentCharge = this.spaceship.currentPercentCharge()
            if (currentCharge < 30){
                return Promise.reject (`Carga em apenas ${currentCharge}GJ`)
            }
            return currentCharge 
        }
        async shieldTest(){

            let doubleShield = this.spaceship.shield * 2

            if (doubleShield <  100){
               return  Promise.reject("Escudo em sobrecarga")
            }
            return doubleShield
        }
        async shieldNormalization(shield){

            let normalizationShield = shield * 0.7

            if (normalizationShield > 120){
                return Promise.reject ("Escudo em supercarga")
            }
                return normalizationShield
        }
          
   
}

