class spacehipList {
   constructor (name,crew,engeneDoor){
    this.name = name
    this.crew= crew
    this.engage = this.door = engeneDoor

   }

}


function createSpaceship() {
    let name = prompt("Qual o nome da nave ? ") 
    let crew= prompt("Qual o numero de tripulantes  ") 
    let engeneDoor = confirm("Deseja engatar a nave? ")
    let spaceship = new spacehipList(name,crew,engeneDoor)
    return spaceship
}
function printSpaceshipList(spaceships) {
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) => {
        spaceshipList +=    (index + 1) + "- " + spaceship.name + 
                            " (" + spaceship.crew + " tripulantes)\n"
    })
    alert(spaceshipList)
}

let hitchedSpaceships = []

do {
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            let spaceshipToAdd = createSpaceship()
            hitchedSpaceships.push(spaceshipToAdd)
            console.log(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(hitchedSpaceships) 
        break
        
        default:
            alert("Encerrando programa de bordo")
    }
} while(chosenOption != "3")
function showMenu() {
    let option
    while(option != "1" && option != "2" && option != "3" ) {
        option = prompt("O que deseja fazer?\n" +
                        "1- Realizar engate \n" +
                        "2- Imprimir naves\n" +
                        "3- Sair de programa")
    }

    return option
}