const focar = (input)=> {
    console.log("focado" + input.id)
}
const perderFoco = (input)=> {
    console.log("foco perdido" + input.id)
}

const mudar = (input)=> {
    alert("mudado" + input.value)
}
const pressionar = (event)=> {
    console.log("uma tecla foi precionada" + event)
}
const sairMouse = ()=> {
    document.getElementById("area").innerHTML = "<strong> sair </strong>"
    console.log("mause passou")
}
const passarMouser = ()=> {
    document.getElementById("area").innerHTML = "<strong> entrar </strong>"
    console.log("mause sair")
}