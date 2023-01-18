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

/* Slideshow JavaScript*/
let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls
 function currentSlide(n) {
    showSlides(slideIndex = n);
 }

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < dots.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

}