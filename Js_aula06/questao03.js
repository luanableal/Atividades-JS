let botao = document.getElementById("btn-multiFuncao");
botao.addEventListener('click', alarme);
let minutoUsuario = document.getElementById("minutos");
let segundoUsuario = document.getElementById("segundos");
let mostrador = document.getElementById("tempo");
let relogio;
let minutos;
let segundos;
let tempoFinal;
let som;

function alarme (){
    if (botao.value =="iniciar"){
        mostrador.style.color = "black";
        minutos = parseInt(minutoUsuario.value);
        segundos = parseInt(segundoUsuario.value);
        console.log(segundos);
        tempoFinal= ((minutos*60)+segundos)*0.20;
        console.log(tempoFinal);
        relogio = setInterval(contagem,1000);
        botao.value ="desarmar";
        botao.innerText="Desarmar"

    } else{
        clearInterval(relogio);
        botao.value ="iniciar";
        botao.innerText="Iniciar"
        som.pause();

    }
}

function contagem (){
    let timeStamp = minutos*60+segundos
    if(timeStamp<=tempoFinal){
        mostrador.style.color = "red";
        
    }

    if(minutos == 0 && segundos == 0){
        mostrador.innerText = `${minutos} : ${segundos}`
        clearInterval(relogio);
        som= new Audio("./assets/som/alarm.mp3");
        som.loop=true;
        som.play();
    } else if (segundos ==0){
        mostrador.innerText = `${minutos} : ${segundos}`
        segundos = 59;
        minutos--;
    } else{
        mostrador.innerText = `${minutos} : ${segundos}`
        segundos--;
    }
}