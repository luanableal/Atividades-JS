document.getElementById("calc").addEventListener('click', calcular);

function calcular(){
    let peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
    let altura = parseFloat(document.getElementById("altura").value.replace(",", "."));
    let resultado= document.getElementById("calcResult");

    let validPeso= peso*1;
    let validAlt= altura*1;

    if((isNaN(validPeso) || ( isNaN(validAlt)))){
        calcResult.textContent= "Por favor, digite um número!"
    } else{
        resultado = (peso /(altura*altura)).toFixed(2);
       
    }

    if(resultado <=17.9){
        calcResult.textContent= resultado + "- Baixo Peso";
    }else if((resultado>=18) && (resultado<=24.9)){
        calcResult.textContent= resultado + "- Peso Normal";
    }else{
        calcResult.textContent= resultado + "- Sobre Peso";
    }


    
}
