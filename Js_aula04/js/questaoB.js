document.getElementById("calc").addEventListener('click', calcular);

function calcular(){
    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);
    let resultado= document.getElementById("calcResult");

    let validMin= min*1;
    let validMax= max*1;

    if((isNaN(validMin) || ( isNaN(validMax)))){
        calcResult.textContent= "Por favor, digite um número inteiro!";
    }else if(min>max){
        calcResult.textContent= "Valor mínimo maior que valor máximo!"
    }else{
        resultado = getRandomInt(min, max);
        calcResult.textContent= "O nº sorteado foi " + resultado + "."
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

}
