
window.document.addEventListener("DOMContentLoaded",()=>{ 

const arrayLISTA = new Array
const elementHtmlBtnBTN_ADD = document.getElementById("adicionar_nome")
const elementHtmlBtnBTN_RM = document.getElementById("remover_nome")
const elementHtmlUlTELA = document.getElementById("lista")


elementHtmlBtnBTN_ADD.addEventListener("click",()=>{
    const elementHtmlInputNOME = document.getElementById("nome")
    if(elementHtmlInputNOME.value != ""){
        arrayLISTA.push(elementHtmlInputNOME.value)
        let stringHtml =""
        for(let stringNome of arrayLISTA){
            stringHtml += "<li>"+ stringNome +"</li>"
        }
        elementHtmlUlTELA.innerHTML = stringHtml
    }else{
        alert("esse valor e invalido ")
    }
})
elementHtmlBtnBTN_RM.addEventListener("click",()=>{
    const elementHtmlInputNOME = document.getElementById("nome")
    if(elementHtmlInputNOME.value != "" && arrayLISTA.indexOf(elementHtmlInputNOME.value) != -1){
        arrayLISTA.splice(arrayLISTA.indexOf(elementHtmlInputNOME.value),1)
        let stringHtml = ""
        for(let stringNome of arrayLISTA){
            stringHtml += "<li>"+ stringNome +"</li>"
        }
        elementHtmlUlTELA.innerHTML = stringHtml
    }else{
        alert("esse valor e invalido Ou o nome que vc digitou nao existe na lista")
    }
})










})