window.addEventListener("DOMContentLoaded",()=> { 
   // * funçoes 
    const stringPegarNome = () => {
        return window.document.getElementById("nome").value
    }
    const voidMostrarNaTela = (stringNome) => {
        let stringHTML = ""
        for( let stringNome of  arrayStringLista){
            stringHTML += `<li>${stringNome}</li>`
        }
        window.document.getElementById("tela").innerHTML = stringHTML
    }
    // *lista
    let arrayStringLista = new Array()
    // * eventos 
    window.document.getElementById("form").addEventListener("submit", e => {
        e.preventDefault()

        const STRING_NOME = stringPegarNome()

        if(arrayStringLista.indexOf(STRING_NOME) !== -1){ 
            alert(" esse nome Já existe")
            return
        }
        else{
            arrayStringLista.push(STRING_NOME)
            voidMostrarNaTela(STRING_NOME)
        }
    
    })
    window.document.getElementById("remover").addEventListener("click",()=>{
          const STRING_NOME = stringPegarNome()
          const INT_INDEX = arrayStringLista.indexOf(STRING_NOME)
           if(INT_INDEX !== -1) {
                arrayStringLista.splice(INT_INDEX,1)
                voidMostrarNaTela(STRING_NOME)
           }else{
            alert("esse nome nao existe")
            return
            }
    })
})

