let timeoutID = setTimeout(()=>{
    console.log("Executando após 2 segundos")

},2000)

clearTimeout(timeoutID)

let seconds = 0
let intervalID = setInterval(()=>{
    seconds += 2
    console.log(`Executando após ${seconds} segundos`)
    if(seconds >= 10){
        clearInterval(intervalID)
    }
},2000)

