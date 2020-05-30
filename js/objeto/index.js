
let spaceship = {
    velocity: 0,
}

spaceship.name = prompt("Qual o nome da nave ?")
spaceship.type = prompt("Qual o tipo da nave ?")
spaceship.velocityMax = prompt ("Qual a velocidade maxima ?")

console.log(spaceship)

function speedUp (velocityMax, velocity , acceleration){


    let newVelocity = velocity + parseInt(acceleration)
    if (newVelocity > velocityMax){
        alert("Velocidade acima do permetido!")
        
    }else{
        spaceship.velocity = newVelocity
        
    }
    
}

function stop (velocityMax, velocity , acceleration){

 alert(`Nome: ${spaceship.name}
 Tipo: ${spaceship.type} 
 Velocidade: ${spaceship.velocity} Km/s`)
  
    
}




function showMenu() {
    let chosenOption 
    
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
        switch(chosenOption) {
            case "1":
                spaceshipAcceleration =  prompt("Qual a velocidade que deseja ?")
                speedUp(spaceship.velocityMax, spaceship.velocity, spaceshipAcceleration )
                break
    
            case "2":
                stop()
            break
            default:
                alert("Opação inválida")
        }
    } while(chosenOption != "2")
}
showMenu()