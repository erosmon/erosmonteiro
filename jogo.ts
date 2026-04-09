import { personagem } from "./personagem.ts";

export class Jogo{

    public iniciar(player1:personagem,player2:personagem){
       let turno = 1;
       while(player1.isvivo() && player2.isvivo){
        console.log("\n ============= turno" + turno + "============= ....................................");
        player1.atacar(player2);

        if(!player2.isvivo()){
          break;
        }
        player2.atacar(player1);
        turno+=1;
       }

       if(player1.isvivo()){
        console.log(`${player1.nome} ganhou a luta.`);
       }else{
        console.log(`${player2.nome} ganhou a luta.`);
       }
    }
}