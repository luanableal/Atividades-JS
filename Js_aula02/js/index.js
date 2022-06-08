document.getElementById("btn-compare").addEventListener('click', compare);

function compare(){
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let result = document.getElementById("result");



    if (number1>number2){
       result.textContent = "O primeiro número '" + number1 + "' é maior do que o segundo número '" +number2+ "'.";

    } 
    else if (number1==number2){
        result.textContent = "Os números são iguais!";
    
    }
    else {
        result.textContent = "O segundo número '" + number2 + "' é maior do que o primeiro número '" +number1+ "'.";
    }
}