document.getElementById("btn-compare2").addEventListener('click', compare2);

function compare2(){
    let text1 = document.getElementById("text1").value.trim();
    let text2 = document.getElementById("text2").value.trim();
    let result2 = document.getElementById("result2");



    if (text1.length>text2.length){
       result2.textContent = "A primeira palavra com '" + text1.length + "' letras é maior do que a segunda que tem '" +text2.length+ "' letras.";

    } 
    else if (text1.length==text2.length){
        result2.textContent = "Ambas as palavras tem o mesmo tamanho!";
    
    }
    else {
        result2.textContent = "A segunda palavra com '" + text2.length + "' letras é maior do que a primeira que tem '" +text1.length+ "' letras.";
    }
}