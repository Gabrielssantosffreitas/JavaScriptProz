class AmazenamentoLocal{
    static voidInsert(objDados){
        window.localStorage.setItem("dados",JSON.stringify(objDados))
        alert("dados enviados")
    }
    static objDadosSelect(){
        return JSON.parse(window.localStorage.getItem("dados"))
    }

}

class Dados{
    #StringNome
    #StringEmail
    #StringSenha
    #StringCurso
    constructor(nome,email,senha,curso){
        this.#StringNome = nome;
        this.#StringEmail = email;
        this.#StringSenha =  senha;
        this.#StringCurso = curso;
    }


    objGetDados(){
        return{
            nome:this.#StringNome,
            email:this.#StringEmail,
            senha:this.#StringSenha,
            curso:this.#StringCurso,
        }
    }

    stringGetNome(){
        return this.#StringNome
    }
    stringGetSenha(){
        return this.#StringSenha
    }
    stringGetEmail(){
        return this.#StringEmail
    }
    stringGetCurso(){
        return this.#StringCurso
    }
    voidSetNome(nome){
        this.#StringNome = nome
    }
    voidSetNome(email){
        this.#StringEmail = email
    }

    voidSetNome(senha){
        this.#StringSenha = senha
    }

    voidSetNome(curso){
        this.#StringCurso = curso
    }



}

class FormularioEntity {
    #inputNome
    #inputIdade
    #inputEmail
    #inputTell
    #inputSubmit
    #inputReset
    #selcetCurso
    #formFormulario

    constructor(submit, reset, formulario) {
        this.#inputSubmit = document.getElementById(submit);
        this.#inputReset = document.getElementById(reset)
        this.#formFormulario = document.getElementById(formulario)
    }

    setDados(nome, idade, email, tell, curso) {
        this.#inputNome = document.getElementById(nome);
        this.#inputIdade = document.getElementById(idade);
        this.#inputEmail = document.getElementById(email);
        this.#inputTell = document.getElementById(tell);
        this.#selcetCurso = document.getElementById(curso);
    }
    setDadosLogin(nome,email,tell,) {
        this.#inputNome = document.getElementById(nome);
        this.#inputEmail = document.getElementById(email);
        this.#inputTell = document.getElementById(tell);
    }
    getCurso() {
        return this.#selcetCurso.value
    }
    getStringNome() {
        return this.#inputNome.value;
    }
    getNumberIdade() {
        return Number(this.#inputIdade.value);
    }
    getStringEmail() {
        return this.#inputEmail.value;
    }
    getStringTell() {
        return this.#inputTell.value;
    }

    getFormFormulario() {
        return this.#formFormulario
    }
    getInputSubmit() {
        return this.#inputSubmit;
    }
    getInputReset() {
        return this.#inputReset;
    }

}

class ValidacaoFormulario {
    #formulario
    constructor(formulario) {
        this.#formulario = formulario;
    }
    getBooleanIsFormularioValidado() {
        if (this.#formulario.getStringNome().length < 10) {
            alert(" o nome precisa de pelo menos 10 letras");
            return false;
        } if (this.#formulario.getStringTell().length < 10 || this.#formulario.getStringTell().length > 11) {
            alert(" o telefone presisa ter 10 ou 11 digitos");
            return false;
        } if (this.#formulario.getNumberIdade() < 0) {
            alert("digite uma idade valida");
            return false;
        } if (this.#formulario.getCurso() === 0) {
            alert(" digite seu curso");
            return false;
        }
        return true;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const FORMULARIO = new FormularioEntity("submit", "reset", "cadastro")

    if(window.document.title =="Cadastro"){
        FORMULARIO.getFormFormulario().addEventListener("submit", (e) => {
            e.preventDefault()

            FORMULARIO.setDados("nome", "idade", "email", "telefone", "curso_disponiveis");
            const VALIDAFORMULARIO = new ValidacaoFormulario(FORMULARIO);

            const IS_VALIDO  = VALIDAFORMULARIO.getBooleanIsFormularioValidado();
            const DADOS =  new Dados(FORMULARIO.getStringNome(),FORMULARIO.getStringEmail(),FORMULARIO.getStringTell(),FORMULARIO.getCurso())
            if(IS_VALIDO){
                AmazenamentoLocal.voidInsert(DADOS.objGetDados())
            }

        })
    }else{
        const ARMAZENAMENTO_DADOS = AmazenamentoLocal.objDadosSelect()
       

        FORMULARIO.getFormFormulario().addEventListener("submit",(e)=>{
            e.preventDefault()
             FORMULARIO.setDadosLogin("nome","email","telefone")
             console.log( FORMULARIO.getStringTell +"->"+ ARMAZENAMENTO_DADOS.senha )
             console.log( FORMULARIO.getStringEmail +"->"+ ARMAZENAMENTO_DADOS.email )
            if(ARMAZENAMENTO_DADOS.senha == FORMULARIO.getStringTell() && ARMAZENAMENTO_DADOS.email == FORMULARIO.getStringEmail()){
                        alert("Voce Foi Logado")
            }else{
                alert("senha ou email errados")
            }
        })
       
    }
})