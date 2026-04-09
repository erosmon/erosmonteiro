import { personagem } from "./personagem.ts";

export class Berserk extends personagem{
    constructor(nome:string, forca:number,vida:number){
        super(nome, forca,vida);
    }

    public atacar(persona: personagem): void {
        console.log(`${this.nome} atacou o personagem: ${persona.nome}`);
        persona.sofreratk(this.forca);
    }
    
}