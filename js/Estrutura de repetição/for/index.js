const spaceship = prompt("Qual o nome da nave ?")
const substituteCharacter = prompt("Qual caracter deseja substui ?")
const newCharacter = prompt("Qual o novo caracter ?")

let newSpaceship=""

for(let i=0;i<spaceship.length;i++){
    if (spaceship[i] == substituteCharacter){
        newSpaceship += newCharacter
    } else {
        newSpaceship += spaceship[i]
    }
}

alert(`O novo nome da nave é ${newSpaceship}`)