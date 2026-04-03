import { funcionario } from "./funcioanario.ts";

export class gerente extends funcionario{
    public cargo: string = "gerente"

    constructor(cargo:string, nome:string, salario:number){
        super(nome,salario);//vai no funcionario rodar o construtor do funcionario e aceitando as var
        this.cargo = cargo;
    }
    //implementaçao da classe abstrata de funcionario 
    ferias(dias:number):string{
        if(dias > 40){
            return("erro, dias invalidos!")
        }
        return"total de ferias" + dias;
    }

    mandaralguem(){
        console.log("vai trabalhar vagabundo!");
    }
    //override sobreescreve o metodo falar do pai/funcionario
    override falar(){
        console.log("eu ganho mais que voce");
    }
}