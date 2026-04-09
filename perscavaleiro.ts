import { personagem } from "./personagem.ts";

export class Cavaleiro extends personagem{
    constructor(nome:string, forca:number,vida:number){
        super(nome, forca,vida);
    }

    public atacar(persona: personagem): void {
        let dado = this.geraratk
        if(dado == 1){
            this.forca = 100;

        }
        console.log(`${this.nome} atacou o personagem: ${persona.nome}`);
        persona.sofreratk(this.forca);
    }
    
}