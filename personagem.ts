export abstract class personagem {
  public nome: string = "personagem";
  protected forca: number = 0;
  protected vida: number = 0;
  protected cura: number = 0;
  private jausoucura: boolean = false;
  protected defesa: number = 0;

  constructor(nome: string, forca: number, vida: number, cura: number,defesa:number) {
    this.nome = nome;
    this.forca = forca;
    this.vida = vida;
    this.cura = cura;
    this.defesa = defesa;
  }

  isvivo(): boolean {
    return this.vida > 0;
  }

  sofreratk(dano: number): void {
   let danoreal = dano - (dano * (this.defesa / 100))
    this.vida = this.vida - danoreal;
    console.log(
      `${this.nome} recebeu ${danoreal} de dano .vida atual: ${this.vida}`,
    );

    this.usarcura();
  }
  usarcura() {
    if (this.vida <= 50 && !this.jausoucura) {
      this.vida = this.vida + this.cura;
      this.jausoucura = true;
      console.log(`${this.nome} usou a cura. vida atual: ${this.vida}`);
    }
  }
  geraratk(): number {
    let maximoatk = 3;

    return Math.floor(Math.random() * maximoatk); //randomizer
  }

  public abstract atacar(persona: personagem): void;
}
