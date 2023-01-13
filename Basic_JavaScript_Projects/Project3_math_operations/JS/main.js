function addFunction() { //Create addFunction
    var addition = 7 + 17; //Declare and define addition variable
    document.getElementById("Math").innerHTML = "7 + 17 =" + addition; //Print a string describing the operation in the addition variable, plus the results.
}

function subFunction() { //Create subFunction
    var Subtraction = 17 - 7; //Declare and define Subtraction variable
    document.getElementById("Sub").innerHTML = "17 - 7 =" + Subtraction//Print a string describing the operation in the Subtraction variable, plus the results.
}

function multDivFunction() { //Created multDivFunction
    var multiply = 7 * 17; //Declare and define multiply variable
    var divide = 17 / 7; //Declare and define divide variable
    document.getElementById("MultDiv").innerHTML = "7 times 17 is " + multiply + " and 17 divided by 7 is " + divide; //Print a string describing the operation in multiply variable and the divide variable, plus the results.
}

function MathFunction() { //Created MathFunction
    var lots_Math = (17 + 7) * 17 / 7 - 17; //Declare and define lots_Math variable with multiple operators
    document.getElementById("AllMath").innerHTML = "7 plus 17, multiplied by 17, divided by 7, and then subtracting 17 equals " + lots_Math; //Print a string describing all of the operations in lots_Math plus the result
}

function modRemainder() { //Created modRemainder
    var modulus = 17 % 7; //Declared and defined modulus variable
    document.getElementById("ModMath").innerHTML = "When you divide 17 by 7, you get a remainder of " + modulus; //Print a string describing the modulus operation, plus the results.
}

function negation_Operator(){ //Created negation_Operator function
    var N = 7; //Declare and define variable N
    document.getElementById("Neg").innerHTML = -N; //Negate and Print N
}

var X = 17; //Declare and define variable X
X--; //Decrement X
document.write(X); //Print result

var Y = 7; //Declare and define variable Y
Y++; //Increment Y
document.write(Y); //Print result

window.alert(Math.random() * 17); //Alert with random number between 0 and 17
