import { personagem } from "./personagem.ts";

export class Berserk extends personagem{
    constructor(nome:string, forca:number,vida:number){
        super(nome, forca,vida,100,10);
    }

    public atacar(persona: personagem): void {
        let dado = this.geraratk();
        switch(dado){
             case 1:
        console.log(`${this.nome} atacou o personagem: ${persona.nome} com ataque 1`,);
        persona.sofreratk(this.forca + 20);
        break;
         case 2:
        console.log(`${this.nome} atacou o personagem: ${persona.nome} com ataque 2`,);
        persona.sofreratk(this.forca + 30);
        break;
         case 3:
        console.log(`${this.nome} atacou o personagem: ${persona.nome} com ataque 3`,);
        persona.sofreratk(this.forca + 35);
        break;
         case 4:
        console.log(`${this.nome} atacou o personagem: ${persona.nome} com ataque 3`,);
        persona.sofreratk(this.forca + 40);
        break;
        }

    }
    
}