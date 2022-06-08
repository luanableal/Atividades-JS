document.getElementById("calc").addEventListener('click', calcular);

function calcular(){
    let numero = parseFloat(document.getElementById("numero").value.replace(',','.'));
    let resultMenor= document.getElementById("calcResult");
    let resultMaior= document.getElementById("calcResult2");

    resultMenor = Math.floor(numero);
    resultMaior = Math.ceil(numero);

    calcResult.textContent= "O menor inteiro é " + resultMenor + "."
    calcResult2.textContent= "O maior inteiro é " + resultMaior + "."
}