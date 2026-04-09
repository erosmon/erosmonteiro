import { Jogo } from "./jogo.ts";
import { Berserk } from "./persberseker.ts";
import { Cavaleiro } from "./perscavaleiro.ts";

let cavaleiro:Cavaleiro = new Cavaleiro("cavaleiro", 150, 500);
let berserk:Berserk = new Berserk("berserk",250, 350);

let jogo:Jogo = new Jogo();
jogo.iniciar(cavaleiro, berserk);