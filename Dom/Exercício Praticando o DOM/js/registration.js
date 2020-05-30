
class App{
    createHouse() {
        event.preventDefault()
        let type = document.querySelector("input[name='house-type']:checked").value
        let area = document.querySelector("input[name='area']").value
        let isRented = document.querySelector("input[name='isRented']").checked
        
        let houseList = new HouseList(type,area,isRented)
    
        this.addHouseList (houseList)
        this.cleanForm()
    }
    addHouseList(houseList){
        const newListValue = document.createElement("li") 
        
        let propertyInfo = " Tipo: " + houseList.type + " (Área: " + houseList.area + "m²)"
        if(houseList.isRented) {
          let rentedMark = this.createRentedMark()
          newListValue.appendChild(rentedMark)
        }
        newListValue.innerHTML += propertyInfo
        let buttonToRemove = this.createRemoveButton()
        newListValue.appendChild(buttonToRemove)
        document.getElementById("house-list").appendChild(newListValue)
    
    }
    createRentedMark() {
        let rentedMark = document.createElement("span")
        rentedMark.style.color = "white"
        rentedMark.style.backgroundColor = "red"
        rentedMark.innerText = "ALUGADO"
        return rentedMark
      }
    createRemoveButton(){
        let buttonToRemove = document.createElement("button")
        buttonToRemove.setAttribute("onclick", "app.remove()")
        buttonToRemove.innerText = "Remover"
        return buttonToRemove
    }
    cleanForm() {
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='isRented']").checked = false
        document.querySelector("input[name='house-type']").checked=false

      }
    
      remove() {
        let liToRemove = event.target.parentNode
        document.getElementById("house-list").removeChild(liToRemove)
      }  
}
 