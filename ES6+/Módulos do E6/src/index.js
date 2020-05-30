import Planet from "./planet"
import {converter} from "./solar_system"

let planets = [
    new Planet("Mercúrio", 0.39),
    new Planet("Vênus", 0.72),
    new Planet("Terra", 1),
    new Planet("Marte", 1.52),
    new Planet("Júpier", 5.2),
    new Planet("Saturno", 9.53),
    new Planet("Urano", 19.1),
    new Planet("Netuno", 30)
]
console.log("Distancias dos planetas até o sol")
planets.forEach(planet => {
    
    let distanceFromSun = converter(planet.astronomicalUnit).toFixed(2)
    console.log(`${planet.name} - ${planet.astronomicalUnit}AU - ${distanceFromSun}km`)
  })

