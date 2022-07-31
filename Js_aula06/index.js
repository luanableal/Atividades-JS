let bomba;
window.addEventListener('load', contagem);
document.getElementById("bomba").addEventListener('click', desarmar)



function contagem(){
    bomba = setTimeout(explosao, 10000);
}

function explosao(){
    let imagem = document.getElementById("bomba");
    imagem.src = "./assets/img/explodiu.webp"
    let som= new Audio("./assets/som/explosion.mp3").play();
    console.log("boom")
}

function desarmar (){ 
    
    clearTimeout(bomba)
    let imagem = document.getElementById("bomba");
    imagem.src = "./assets/img/bombaApagada.jpg"
}

