document.getElementById("calc").addEventListener('click', calcular);

function calcular(){

    let operando1 = document.getElementById("element1").value;
    let operando2 = document.getElementById("element2").value;
    let operSelec = document.querySelector('#operations').value;
    let result = document.getElementById("result");
    
    
    
   if(operSelec=="sum"){
       result = parseFloat(operando1) + parseFloat(operando2);
    }else if(operSelec=="min"){
        result = parseFloat(operando1) - parseFloat(operando2);
    }else if(operSelec=="mult"){
        result = parseFloat(operando1) * parseFloat(operando2);
    }else if(operSelec=="div"){
        result = parseFloat(operando1) / parseFloat(operando2);
    }else{
        result = "Por favor, selecione uma operação!";
    }
    console.log (operSelec);
    console.log (result);
    calcResult.textContent = result;
};

