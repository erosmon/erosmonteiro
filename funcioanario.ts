export abstract class funcionario {
    public nome: string = " "
    protected salario: number = 0;
  
    constructor(nome: string, salario:number) {
    this.nome = nome;
    this.salario = salario;
  }
  abstract ferias(dias:number):string

    falar(){
       console.log("nome: "+ this.nome);
       console.log("salario: "+ this.salario);
    }
    getsalario(){
        return this.salario;
    }
    setsalaio(salarioparametro:number){
        this.salario = salarioparametro;

    }
 
}