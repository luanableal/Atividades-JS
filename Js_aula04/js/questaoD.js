document.getElementById("calc").addEventListener('click', calcular);

function calcular(){

let resultado = document.getElementById("calcResult");

const numero = Math.random()*(101);
console.log(numero.toFixed(1));
if(numero.toFixed(1)<8.6 && numero.toFixed(1)>= 0){
    calcResult.textContent= "Idosa/Mulher(" + numero.toFixed(1) + ")";
}else if(numero.toFixed(1)>=8.6 && numero.toFixed(1)<16.7){
    calcResult.textContent= "Idoso/Homem(" + numero.toFixed(1) + ")";
}else if(numero.toFixed(1)>=16.7 && numero.toFixed(1)<56.9){
    calcResult.textContent= "Jovem/Homem(" + numero.toFixed(1) + ")";
}else{
    calcResult.textContent= "Jovem/Mulher (" + numero.toFixed(1) + ")";
}

}





//<8.6 = mulher/Idosa
//16.7 = Homem/Idoso
//56.9 = Homem/Jovem
// Mulher restante