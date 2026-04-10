import { Jogo } from "./jogo.ts";
import { Berserk } from "./persberseker.ts";
import { Cavaleiro } from "./perscavaleiro.ts";

let cavaleiro:Cavaleiro = new Cavaleiro("cavaleiro", 10, 120);
let berserk:Berserk = new Berserk("berserk",15, 100);

let jogo:Jogo = new Jogo();
jogo.iniciar(cavaleiro, berserk);