//While Loop (decrementing)
function Call_Loop() {
    var Digit = "";
    var N = 10;
    while (N > 0) {
        Digit += "<br>" + N;
        N--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//Length Property
function lengthProperty() {
    var text = "My name is Michaela.";
    document.getElementById("length").innerHTML = text.length;
}