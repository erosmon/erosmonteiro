import { professorconst, pessoas,alunos } from  "./constructor.ts";
import {contador} from "./static.ts";

let prof:professorconst = new professorconst("renan", 15,"matematica");
prof.falar()

let pes:pessoas = new pessoas("eros", "monteiro", 17);
pes.falar()

let eros2:alunos = new alunos("eros", "monteiro", 9);
eros2.falar();
eros2.alterarnota(5);
eros2.falar();

let statictest: contador = new contador ("static");
