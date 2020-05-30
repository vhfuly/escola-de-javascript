alert("Diferença de idade")

const nameOlder = prompt("Qual o nome da pessoa mais velha ?")
const ageOlder = prompt("Qual o idade da pessoa mais velha ?")


const nameYounger = prompt("Qual o nome da pessoa mais nova ?")
const ageYounger  = prompt("Qual o idade da pessoa mais nova ?")

const ageDifference = ageOlder - ageYounger

alert(`${nameOlder} tem ${ageOlder} anos.
Já ${nameYounger} tem ${ageYounger} anos.
A diferença de idade é de ${ageDifference} anos`)