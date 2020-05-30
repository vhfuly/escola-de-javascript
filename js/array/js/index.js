const hitchedSpaceships = [
    ["Fenix", 8 , true],
    ["Golias", 10 , true],
    ["Helmet", 5 , false],
    ["Elemental", 3 , true],
    ["Darwin", 15 , false]
]



let with9Crew = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})


let hitchPlatform = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false 
})

let highlightedSpaceship = hitchedSpaceships.map (spaceship => {
    return spaceship[0].toUpperCase()
})

alert(`Nave com mais de 9 trpulantes : ${with9Crew.join(", ")}
Primeira neve não engatada : ${hitchPlatform}
Todas as naves : ${highlightedSpaceship.join(", ")}`)

console.log(with9Crew)
console.log(hitchPlatform + 1 )
console.log(highlightedSpaceship)