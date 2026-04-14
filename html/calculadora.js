function adicionar(valor){
    let resultado = document.getElementById("calcjava");
    resultado.value += valor;

}
function calcular(){
    let resultado = document.getElementById("calcjava");
   resultado.value = eval(resultado.value); //transforma em comando
}
function limpar(){
    let resultado = document.getElementById("calcjava");
   resultado.value = "";
}