let deportureDateEnter = prompt("Digite a data de partida (formato DD/MM/YYYY)")

let deportureDate = moment(deportureDateEnter, "DD/MM/YYYY")

let today = moment()
console.log(moment())
console.log(deportureDate)


let dateDiff = today - deportureDate
console.log(dateDiff)

let chosenOption = prompt("Escolha como gostaria de exibir a data de partida ? \n1-segundos\n2-minutos\n3-horas\n4-dias")

if (chosenOption == "1"){
    let secondOfDeparture = Math.round(dateDiff / 1000)
    alert("tempo de voo: " + secondOfDeparture + " Segundos")
} else if (chosenOption == "2"){
    let minuteOfDeparture = Math.round(dateDiff / 1000/60)
    alert("tempo de voo: " + minuteOfDeparture + " Minutos")
}else if (chosenOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000/ 3600)
    alert("tempo de voo: " + hoursOfDeparture + " Horas")
}else if (chosenOption == "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000/ 3600 / 24)
    alert("tempo de voo: " + daysOfDeparture + " Dias")
} else {
    alert("Opção é inválida!!")
}