function Call_Loop() {
    var Digit = "";
    var N = 11;
    while (N > 0) {
        Digit -= "<br>" + N;
        N--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}