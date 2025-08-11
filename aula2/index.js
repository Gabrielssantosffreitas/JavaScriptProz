
// * usando cinceito de poo
// ! testando
class Calculadora{

    static printarResultado(resultado){
        console.log(`O resultado é: ${resultado}`);
    }

    static somar(a, b){
        return a + b;
    }

    getNumber(){
        return parseFloat(prompt("Digite um número:"));
    }
    static main(){
        const calculadora = new Calculadora();
        const num1 = calculadora.getNumber();
        const num2 = calculadora.getNumber();
        const resultado = this.somar(num1, num2);
        this.printarResultado(resultado);
    }
    


}

Calculadora.main();


