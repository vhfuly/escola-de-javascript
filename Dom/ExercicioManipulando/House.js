function addHouseData () {

    const newDiv = document.createElement("div")

    const newHouse = document.getElementById("house-number")
    const newNeighborhood = document.getElementById("neighborhood")
    const newCity = document.getElementById("city")
    const newHouseArea = document.getElementById("house-area")
    
    
    const newListValue = document.createElement("li") 
    newListValue.innerText = "Número da residência:" + newHouse.value + 
    "   \nBairro: " + newNeighborhood.value +"   \nCidade: " + newCity.value + "   \nÁrea da casa: " + newHouseArea.value 
    

    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "renoveHouseData(this)")

    newListValue.appendChild(removeButton)
    document.getElementById("house-list").appendChild(newListValue)
    
}

function renoveHouseData(button){
    let liToRemove = button.parentNode
    document.getElementById("house-list").removeChild(liToRemove)
}    
