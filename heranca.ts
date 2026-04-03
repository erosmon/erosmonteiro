export class veiculo {
    public marca: string;
        protected velocidade: number =0
    constructor(marca:string, velocidade:number) {
        this.marca = marca;
        this.velocidade = velocidade;
    }

    acelerar(velocidade: number){
        this.velocidade += velocidade;
    }
    exibir(){
        console.log("marca" + this.marca + this.velocidade + "km/h");
    }
}