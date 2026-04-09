 export abstract class personagem{
    public nome:string = "personagem";
    protected forca:number = 0;
    protected vida:number = 0;
    
    constructor(nome:string,forca:number,vida:number){
        this.nome = nome;
        this.forca = forca;
        this.vida = vida;
    }

    isvivo():boolean {
       return this.vida > 0;
    }

    sofreratk(dano:number):void{
        this.vida = this.vida - dano;
        console.log(`${this.nome}recebeu ${dano} de dano .vida atual: ${this.vida}`);
    }
     geraratk():number{
        let maximoatk = 3;
        
        return Math.floor(Math.random() * maximoatk);
     }
     public abstract atacar(persona:personagem ):void

    
}