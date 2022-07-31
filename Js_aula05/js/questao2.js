document.getElementById("btn-date").addEventListener('click', dateDetail);

function dateDetail(){
    let userDate = document.getElementById("user-date").value;
    let weekDayAnswer = document.getElementById("userWeekDay");
    let dayAnswer = document.getElementById("userDay");
    let monthAnswer = document.getElementById("userMonth");
    let yearAnswer = document.getElementById("userYear");
    let week_text= "";

    date= new Date(userDate);
    let weekDay = date.getUTCDay();
    let day = date.getUTCDate();
    let month = (date.getUTCMonth()+1);
    let year = date.getUTCFullYear();
    let timestamp = date.getTime();

        switch (weekDay){
            case 0:
                week_text = "Domingo."
            break;
            case 1:
                week_text = "Segunda-Feira."
            break;
            case 2:
                week_text = "Terça-Feira."
            break;
            case 3:
                week_text = "Quarta-Feira."
            break;
            case 4:
                week_text = "Quinta-Feira."
            break;
            case 5:
                week_text = "Sexta-Feira."
            break;
            case 6:
                week_text = "Sábado."
            break;
        }

        switch (month){
            case 1:
                month_text = "Janeiro"
            break;
            case 2:
                month_text = "Fevereiro"
            break;
            case 3:
                month_text = "Março"
            break;
            case 4:
                month_text = "Abril"
            break;
            case 5:
                month_text = "Maio"
            break;
            case 6:
                month_text = "Junho"
            break;
            case 7:
                month_text = "Julho"
            break;
            case 8:
                month_text = "Agosto"
            break;
            case 9:
                month_text = "Setembro"
            break;
            case 10:
                month_text = "Outubro"
            break;
            case 11:
                month_text = "Novembro"
            break;
            case 12:
                month_text = "Dezembro"
            break;
            
        }

        weekDayAnswer.innerText= "O dia da semana é " + week_text;
        dayAnswer.innerText = "Dia: " + day;
        monthAnswer.innerText = "Mês: " + month + " (" + month_text + ")";
        yearAnswer.innerText = "Ano: " +year;
        userTimeS.innerText = "Timestamp: " + timestamp;
    
    console.log(weekDay);
    console.log(day);
    console.log(month);
    console.log(year);
    console.log(week_text);

}



