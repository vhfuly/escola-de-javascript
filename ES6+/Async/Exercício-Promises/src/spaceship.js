class Spaceship{
    constructor(name,maxCharge,currentCharge,shield ){
        this.name = name,
        this.maxCharge= maxCharge,
        this.currentCharge = currentCharge, 
        this.shield = shield 

    } 
    currentPercentCharge(){
        return this.currentCharge*100 / this.maxCharge
    }
}

export default Spaceship