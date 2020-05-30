let lightYears = prompt("Qual a distancia em Anos-Luz ? ")

const unit = prompt(`Deseja converter para qual unidade de medida ? 
Digite o número da opção desejada.
1) - Parsec (pc)
2) - Unidade Astronômica (AU)
3) - Quilômetros (Km)`)

let chosenUnity
let convertedDistance

switch (unit){
    case '1':
        convertedDistance = lightYears*0.306601
        chosenUnity = "Parsec"
        break
    case '2':
        convertedDistance= lightYears*63241.1
        chosenUnity= "Unidade Astronômica"
    break
    case '3':
        convertedDistance = lightYears* 9.5 *Math.pow(10, 12)
        chosenUnity= "Quilômetros"
    break
    default: 
    chosenUnity = "Unidade não identificada"
    convertedDistance = "Conversão fora do escopo"
}

alert(`Distancia em Anos-luz: ${lightYears} \n${chosenUnity}: ${convertedDistance}`)