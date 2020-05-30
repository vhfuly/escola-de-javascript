import Spaceship from "./spaceship"
import armamentesKind from "./armaments"
import {laserDef as larserD,steelDefenses} from "./defenses"
import basicDefenses from "./defenses"

const spaceship = new Spaceship("USS E#nterprise", "James Tiberes Kirk",armamentesKind.laser, larserD)
const basicSpaceship = new Spaceship("Nave Basica","Astronauta Z",[],basicDefenses)

console.log(spaceship)
console.log(basicSpaceship)
