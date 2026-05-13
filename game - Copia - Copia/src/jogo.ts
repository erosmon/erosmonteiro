import { Berserk } from "./persberseker";
import { Cavaleiro } from "./perscavaleiro";
import { personagem } from "./personagem";

export class Jogo {
  public async iniciar(player1: personagem, player2: personagem) {
    let turno = 1;

    this.atualizainterf(player1, player2);

    while (player1.isvivo() && player2.isvivo()) {
      player1.log("\n ============= turno" + turno + "============= ...............",);
      player1.atacar(player2);
      this.atualizainterf(player1, player2);
      await this.esperatempo();

      if (!player2.isvivo()) {
        break;
      }

      player2.atacar(player1);
      this.atualizainterf(player1, player2);
      await this.esperatempo();
      turno += 1;
    }

    if (player1.isvivo()) {
      console.log(`${player1.nome} ganhou a luta.`);
    } else {
      console.log(`${player2.nome} ganhou a luta.`);
    }
  }

  buscacomphtml(id: string) {
    return document.getElementById(id);
  }

  public atualizainterf(player1: personagem, player2: personagem) {
    (document.getElementById("imgplayer1") as HTMLImageElement).src =
      player1.getimg();

    (document.getElementById("imgplayer2") as HTMLImageElement).src =
      player2.getimg();

    this.buscacomphtml("player1vida")!.textContent = "hp: " + player1.getvida();
    this.buscacomphtml("player2vida")!.textContent = "hp: " + player2.getvida();
  }

  public esperatempo() {
    return new Promise((x) => setTimeout(x, 800));
  }
}

function construirjogo() {
  let cavaleiro: Cavaleiro = new Cavaleiro("cavaleiro", 10, 120);
  let berserk: Berserk = new Berserk("berserk", 15, 100);

  let jogo: Jogo = new Jogo();
  jogo.iniciar(cavaleiro, berserk);
}

document.getElementById("botaojogar")?.addEventListener("click", construirjogo);
