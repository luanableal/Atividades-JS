
window.addEventListener('load', contagem);
document.getElementById("bomba").addEventListener('click', desarmar)
let bomba;
let contador=60;
let relogio;


function contagem(){
    bomba = setInterval(explosao, 60000);
    relogio = setInterval(regressivo, 1000);

    
}

function regressivo(){
    if(contador>0){
        contador--
        let numero = document.getElementById("cronometro");
        numero.innerHTML=contador;
        let som= new Audio("./assets/som/tic.mp3").play();
        
    }
  
}

function explosao(){
    let imagem = document.getElementById("bomba");
    imagem.src = "./assets/img/explodiu.webp"
    let som= new Audio("./assets/som/explosion.mp3").play();
    console.log("boom")
}

function desarmar (){ 
    
    clearInterval(bomba)
    clearInterval(relogio)
    let imagem = document.getElementById("bomba");
    imagem.src = "./assets/img/bombaApagada.jpg"
}