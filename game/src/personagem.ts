export abstract class personagem {
  public nome: string = "personagem";
  protected forca: number = 0;
  protected vida: number = 0;
  protected cura: number = 0;
  private jausoucura: boolean = false;
  protected defesa: number = 0;
  protected imagem: string = "";

  constructor(nome: string, forca: number, vida: number, cura: number,defesa:number,imagem:string) {
    this.nome = nome;
    this.forca = forca;
    this.vida = vida;
    this.cura = cura;
    this.defesa = defesa;
    this.imagem = imagem;
  }
 public log(mensagem:string){
  console.log(mensagem);
  document.getElementById("consolee")!.innerHTML+= '<P>' + mensagem +'</P>';
 }
  isvivo(): boolean {
    return this.vida > 0;
  }

  sofreratk(dano: number): void {
   let danoreal = dano - (dano * (this.defesa / 100))
    this.vida = this.vida - danoreal;
    this.log(`${this.nome} recebeu ${danoreal} de dano .vida atual: ${this.vida}`);

    this.usarcura();
  }
  getvida(){
      return this.vida;
    }
    getimg(){
      return this.imagem;
    }
    getnome(){
      return this.nome;
    }
  usarcura() {
    if (this.vida <= 50 && !this.jausoucura) {
      this.vida = this.vida + this.cura;
      this.jausoucura = true;
      this.log(`${this.nome} usou a cura. vida atual: ${this.vida}`);
    }
  }
  geraratk(): number {
   return Math.floor(Math.random() * 3) + 1;
}

  public abstract atacar(persona: personagem): void;
}
