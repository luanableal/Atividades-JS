document.getElementById("btn-text").addEventListener('click', stringficar);

function stringficar(){
    let number = document.getElementById("number").value;
    let resultado;

    switch (number){
        case '0':
            resultado = "Você digitou: Zero"
        break;
        case '1':
            resultado = "Você digitou: Um"
        break;
        case '2':
            resultado = "Você digitou: Dois"
        break;
        case '3':
            resultado = "Você digitou: Três"
        break;
        case '4':
            resultado = "Você digitou: Quatro"
        break;
        case '5':
            resultado = "Você digitou: Cinco"
        break;
        case '6':
            resultado = "Você digitou: Seis"
        break;
        case '7':
            resultado = "Você digitou: Sete"
        break;
        case '8':
            resultado = "Você digitou: Oito"
        break;
        case '9':
            resultado = "Você digitou: Nove"
        break;
        case '10':
            resultado = "Você digitou: Dez"
        break;
        default:
            resultado = "Digite um número inteiro entre 0 e 10!";

        
    }


    calcResult.textContent= resultado



}