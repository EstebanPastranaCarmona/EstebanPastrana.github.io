const timerElement = document.getElementById("timer");

let selectdPreguntaSuma;
let selectdPreguntaCorrecta;
let selectdPreguntaCielo;

let date = new Date();
let isfinish = false

function beginTimer(){
    let time = 30

    if(!isfinish){
            setInterval(function(){
            if(time > 0){
                time--;
                timerElement.textContent =time.toString();
            }
            else{
                finish()
            }
        }, 1000);
    }
}

function checkQuestions(nameQuestion){
    selectdQuestion = document.querySelector(`input[name="${nameQuestion}"]:checked`);
    return selectdQuestion ? selectdQuestion.value : "No se respondio"
}

function finish(){
    isfinish = true

    alert(` Fecha: ${date.toLocaleDateString('es-Es')}
            La respuesta de la pregunta 1: ${checkQuestions("preguntaSuma")}
            La respuesta de la pregunta 2: ${checkQuestions("preguntaCielo")}
            La respuesta de la pregunta 3: ${checkQuestions("preguntaCorrecta")}
        `
    );
    location.reload();
}


