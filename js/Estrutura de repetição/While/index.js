let warpCount = 0
let chosenOption = ""

let spaceship = prompt("Digite o nome da nave")
chosenOption = prompt("deseja entrar em dobra espacial ? \n1- Sim\n2-Não")

while (chosenOption == "1"){
    warpCount += 1
    chosenOption = prompt("deseja realizar a proxima dobra espacial ? \n 1- Sim\n2-Não")
}
alert(`Nome da nave: ${spaceship}
Quantidades de dobras realizadas: ${warpCount}`)