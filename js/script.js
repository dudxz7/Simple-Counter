const acrescentar = document.querySelector("#acrescentar")
const diminuir = document.querySelector("#diminuir")
const resetar = document.querySelector("#resetar")
const resultado = document.querySelector("#resultado")
let contador = 0

acrescentar.onclick = function(){
    contador++;
    resultado.textContent = contador;
}
diminuir.onclick = function(){
    contador--;
    if(contador < 0){
        contador;
    }
    resultado.textContent = contador;
}
resetar.onclick = function(){
    contador = 0;
    resultado.textContent = contador;
}