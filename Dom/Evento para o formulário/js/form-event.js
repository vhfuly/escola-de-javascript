function save(){

    event.preventDefault()
    let name = document.querySelector("input[name='name']").value
    let programingLang = document.querySelector("select[name='programming-lang']").value
    alert("Nome :"+ name +"\nLinguagem de programação : " + programingLang)


}