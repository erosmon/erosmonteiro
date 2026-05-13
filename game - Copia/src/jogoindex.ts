import { Jogo } from "./jogo";
import { Berserk } from "./persberseker";
import { Cavaleiro } from "./perscavaleiro";

let cavaleiro:Cavaleiro = new Cavaleiro("cavaleiro", 10, 120);
let berserk:Berserk = new Berserk("berserk",15, 100);

let jogo:Jogo = new Jogo();
jogo.iniciar(cavaleiro, berserk);