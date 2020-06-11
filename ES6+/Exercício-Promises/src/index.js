import Spaceship from './spaceship'
import SpaceshipEngine from './spaceshipEngine'

const sophia = new Spaceship("Sophia",10,5,70)
const amsterda = new Spaceship("Amsterdã",14,10,40)
const estrelaAna = new Spaceship("Estrela-Anã",20,4,80)


const sophiaEngine = new SpaceshipEngine (sophia)
const amsterdaEngine = new SpaceshipEngine (amsterda)
const estrelaAnaEngine = new SpaceshipEngine (estrelaAna)


sophiaEngine.turnOn()
amsterdaEngine.turnOn()
estrelaAnaEngine.turnOn()

console.log("Promises")