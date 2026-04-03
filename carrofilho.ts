import{veiculo} from "./heranca.ts"

export class carro extends veiculo  {
    public ano: number = 0;

    buzinar(){
        this.velocidade = 15;
    }

 
}