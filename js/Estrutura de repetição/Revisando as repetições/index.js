const spaceship = prompt("Qual o nome da nave ?")

let newSpaceship=""


for(let i= spaceship.length-1; i>=0 ; i--){
    
    if (spaceship[i] == "e"){
        break
    } else {
        newSpaceship += spaceship[i]
        console.log(newSpaceship)
    }
}

alert(`O nome original da nave : ${spaceship}
O nome após ocutação: ${newSpaceship}`)