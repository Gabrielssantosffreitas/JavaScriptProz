let intervalo = null
let contador = 0
const iniciar = () =>{ 
    if(intervalo !== null){
        return
    }
    intervalo = setInterval(()=>{
        document.getElementById("tela").innerText = parseInt(contador)
        contador++

    },1000)

}
const parar = () =>{
    if(contador === null){
        return
    }
    clearInterval(intervalo)
    intervalo = null 
    contador = 0
    document.getElementById("tela").innerText = contador
}