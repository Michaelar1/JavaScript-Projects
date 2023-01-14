function numberFunction() {
    document.getElementById("NAN").innerHTML = 0/0;
}

function checkNanFunciton1() {
    document.getElementById("True").innerHTML = isNaN("My name is Michaela");
}

function checkNanFunction2() {
    document.getElementById("False").innerHTML = isNaN("717");
}