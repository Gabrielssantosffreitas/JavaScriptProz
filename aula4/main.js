class FormularioEntity {
    #inputNome
    #inputIdade
    #inputEmail
    #inputTell
    #inputSubmit
    #inputReset
    #selcetCurso
    #formFormulario

    constructor(submit,reset,formulario){
       console.log("construtor check")
        this.#inputSubmit = document.getElementById(submit);
        this.#inputReset = document.getElementById(reset)
        this.#formFormulario = document.getElementById(formulario)
    }

    setDados(nome,idade,email,tell,curso){
        console.log("set dados check")
        this.#inputNome = document.getElementById(nome);
        this.#inputIdade = document.getElementById(idade);
        this.#inputEmail = document.getElementById(email);
        this.#inputTell = document.getElementById(tell);
        this.#selcetCurso = document.getElementById(curso);
    }
    getCurso(){
        return this.#selcetCurso.value
    }
    getStringNome(){
        return this.#inputNome.value;
    }
    getNumberIdade(){
        return Number(this.#inputIdade.value);
    }
    getStringEmail(){
        return this.#inputEmail.value;
    }
    getStringTell(){
        return this.#inputTell.value;
    }
    getFormFormulario(){
        return this.#formFormulario
    }
    getInputSubmit(){
        return this.#inputSubmit;
    }
    getInputReset(){
        return this.#inputReset;
    }

}

class ValidacaoFormulario {
    #formulario
    constructor(formulario){
        
        this.#formulario = formulario;
        console.log("construtor validacao check")

    }

    getBooleanIsFormularioValidado(){
        console.log("get validacao  check")
       

        if(this.#formulario.getStringNome().length < 10){
            alert(" o nome precisa de pelo menos 10 letras");
            return false;
        }if(this.#formulario.getStringTell().length < 10 || this.#formulario.getStringTell().length > 11 ){
            alert(" o telefone presisa ter 10 ou 11 digitos");
            return false;
        }if(this.#formulario.getNumberIdade() < 0){
            alert("digite uma idade valida");
            return false;
        }if(this.#formulario.getCurso() == 0){
            alert(" digite seu curso");
            return false;
        }
         
         alert(" Formulario Enviado Com Sucesso");
         return true;
        
        
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    alert("Pagina caregada ...")
   
    const FORMULARIO = new FormularioEntity("submit","reset","cadastro")
    
    FORMULARIO.getFormFormulario().addEventListener("submit",(e)=>{
        
        e.preventDefault()

        FORMULARIO.setDados("nome","idade","email","telefone","curso_disponiveis");

        const VALIDAFORMULARIO = new ValidacaoFormulario(FORMULARIO);

        VALIDAFORMULARIO.getBooleanIsFormularioValidado();

     
    })
})