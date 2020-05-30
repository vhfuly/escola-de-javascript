function showInfo(){
    let name = document.querySelector("input[name='name']").value
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    let likePrograming = document.querySelector("input[name='like-programming']:checked").value
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")

    let optionValue =[]

    developerOptions.forEach(element => {optionValue.push(element.value)})
    let optionsChecked = optionValue.join(", ")

    alert("nome : " + name +"\nCor primaria : " + favoriteColor +"\nGosta de programar : "+ likePrograming +"\nConhecimentos em programação web : "+optionsChecked)
}