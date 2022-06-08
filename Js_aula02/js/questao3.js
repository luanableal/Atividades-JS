document.getElementById("btn-check").addEventListener('click', verificar);

function verificar(){

    let today= new Date()
    let birthDay = document.getElementById("day").value;
    let birthMonth = document.getElementById("month").value;
    let birthYear = document.getElementById("year").value;
    let birthDate = new Date(birthYear, birthMonth-1 , birthDay);
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let ageSeg = today.getTime() - birthDate.getTime();
    let ageDays = ageSeg / (1000 * 60 * 60 * 24);
    
    if (gender=="fem"){
        deadline = parseInt((80.1* 365.25)-ageDays);
    }else{
        deadline = parseInt((73.1 * 365.25)-ageDays);
    }

    if(deadline <0){
        dead_line.textContent = "Aproveite pois você já passou da expectativa média de vida nacional!"
    } else {
        dead_line.textContent = "Apreveite pois faltam " +deadline+ " dias para a sua morte."
    }
    
}