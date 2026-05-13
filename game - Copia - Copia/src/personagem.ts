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
    gerarcritico(): boolean {
    return (Math.random() * (0.10 - 0.1) + 0.1)> 0.2;
  }

  sofreratkcriticoo(dano: number, atacante: string): void {
    const critico = this.gerarcritico();
    const danoFinal = critico ? dano * 2 : dano;
    const danoreal = danoFinal - (danoFinal * (this.defesa / 100));
    this.vida = Math.max(0, this.vida - danoreal);

    if (critico) {
      this.log(` 💥 CRÍTICO! ${atacante} causou ${danoreal.toFixed(1)} de dano em ${this.nome}! Vida atual: ${this.vida.toFixed(1)}`);
    } else {
      this.log(`${this.nome} recebeu ${danoreal.toFixed(1)} de dano. Vida atual: ${this.vida.toFixed(1)}`);
    }
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
     this.usarcura();
  }
  geraratk(): number {
   return Math.floor(Math.random() * 3) + 1;
}

  public abstract atacar(persona: personagem): void;
}
