function countdown() {      //This creates a countdown timer function.
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;              //I believe this here is creating the visual countdown below the input/button elements in the paragraph element
        var time = setTimeout(tick, 1000);      //Here the program is pausing for 1000 milliseconds (1 second)
        if (seconds == -1) {
            alert("Time's up!");                //Once the timer reaches its conclusion (at -1s) the user sees an alert box letting them know time is up
            clearTimeout(time);                 //This ends the funciton
            timer.innerHTML = "";
        }
    }
    tick();
}
