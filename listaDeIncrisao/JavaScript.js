window.addEventListener("DOMContentLoaded",()=> { 
   // * funçoes 

   // quando essa funcao for chamada no codigo 
    const stringPegarNome = () => {// fassa
        // retorne o campo value do elemento html que tem o identificador "nome"
        return window.document.getElementById("nome").value
    }
     // quando essa funcao for chamada no codigo 
    const voidMostrarNaTela = () => {// fassa
        //crie um acumulador de um texto
        let stringHTML = ""
        //pege um valor da lista  
        for( let stringNome of  arrayStringLista){//fassa
            // acumule o texto 
            stringHTML += `<li>${stringNome}</li>`
        }
        //pege o elemento html no que tem o identificador "tela" e no seu html escrava o texto acumulado
        window.document.getElementById("tela").innerHTML = stringHTML
    }
    // *lista
    //cria uma lista vasia
    let arrayStringLista = new Array() 
    // * eventos 
    // pege o elemento html nal qual tem o identificador "form" e escute um evento de enviar 
    window.document.getElementById("form").addEventListener("submit", e => {// fassa
        // tire o comportamento de autualisar o lista 
        e.preventDefault()
        // crie um valor que nuca munda que receber o retorno da funcao pegar nome 
        const STRING_NOME = stringPegarNome()
        // se existir um nome na lista 
        if(arrayStringLista.indexOf(STRING_NOME) !== -1){// fassa
            // apareser um alerta que o nome ja existe 
            alert(" esse nome Já existe")
            // sair fa funcao e retorne nada
            return
        }
        else{// se nao existir
            // adicione na lista 
            arrayStringLista.push(STRING_NOME)
        }
    
    })
     // pege o elemento html nal qual tem o identificador "remover" e escute um evento de click
    window.document.getElementById("remover").addEventListener("click",()=>{
          const STRING_NOME = stringPegarNome()
          const INT_INDEX = arrayStringLista.indexOf(STRING_NOME)
           if(INT_INDEX !== -1) {
                arrayStringLista.splice(INT_INDEX,1)
    
           }else{
            alert("esse nome nao existe")
            return
            }
    })
    window.document.getElementById("autualiar").addEventListener("click",()=>{
        voidMostrarNaTela()
    })
})

