const timerElement = document.getElementById("timer");
let totalTime = 30;

function beginTimer(){
    let time = totalTime
    const interval = setInterval(function(){
        if(time > 0){
            time--;
            timerElement.textContent =time.toString();
        }
        else{
            alert("El tiempo se ha terminado");
        }
    }, 1000);
}

