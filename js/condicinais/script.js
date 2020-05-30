const name = prompt("Qual o nome do piloto ?")

let velocity = 0 

let newVelocity = prompt("Qual velocidade gostaria de acelerar ?")

const confirmVelocity = confirm(`Realmente dejesa seguir com velocidade em ${newVelocity} Km/s ?`)

if (confirmVelocity ){
    velocity = newVelocity 
}
    

if (velocity <=0 ) {
    alert("Nave está parada. considere partie e aumentar a velocidade")
} else if (velocity < 40 ) {
    alert("Você está devagar, podemos aumentar mais")
} else if (velocity >=40 && velocity < 80 ) {
    alert("Parece uma boa velocidade para manter ")
} else if (velocity >=80 && velocity < 100) {
    alert("Velocidade alta. Considere diminuir")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert(`Nome do piloto: ${name}
Velocidade atual: ${velocity} km/s`)