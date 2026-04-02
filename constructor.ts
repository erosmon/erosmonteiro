export class professorconst {
  nome: string = "";
  idade: number = 0;
  materia: string = "";

  constructor(nome: string, idade: number, materia: string) {
    this.nome = nome;
    this.idade = idade;
    this.materia = materia;
  }

  falar() {
    console.log("prof:  ");
    console.log("\nmeu nome e: " + this.nome);
    console.log("minha idade e: " + this.idade);
    console.log("e minha materia e: " + this.materia);
  }
}
export class pessoas {
  nomep: string = "";
  sobrenome: string = "";
  idade: number = 0;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nomep = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
  falar() {
    console.log("pessoas:\n ");
    console.log("meu nome e: " + this.nomep);
    console.log("meu sobrenome e: " + this.sobrenome);
    console.log("minha idade e :" + this.idade);
  }
}
export class alunos {
  readonly nomep: string = "";
  sobrenome: string = "";
  private nota: number = 0;

  constructor(nome: string, sobrenome: string, nota: number) {
    this.nomep = nome;
    this.sobrenome = sobrenome;
    this.nota = nota;
  }
  falar() {
    console.log("aluno: ");
    console.log("\nmeu nome e: " + this.nomep);
    console.log("meu sobrenome e: " + this.sobrenome);
    console.log("minha nota e :" + this.nota);
  }
  alterarnota(nota:number) {
    if (nota > 10) {
      console.log("ERRO!");
    }
    if (nota < 0) {
      console.log("ERRO!");
    }

    this.nota = nota;
  }
}
