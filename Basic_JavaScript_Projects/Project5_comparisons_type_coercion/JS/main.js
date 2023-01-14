document.write(typeof "Music"); //Use typeof to display "string"

document.write(typeof 739); //Use typeof to display "number"

document.write("6" + 7); //Combine a string and a number in an expression

function infinity() {
document.getElementById("infinity").innerHTML = 4E350; //Have the browser display Infinity
}

function negInfinity() {
document.getElementById("NegativeInfinity").innerHTML = -4E350; //Have the browser display -Infinity
}

document.write(17 > 7); //Use Boolean to display "true"

document.write (7 > 17); //Use Boolean to displa "false"

console.log(7 + 8); //Have Developer Tools console display a number using an expression

document.write(7 == 17); //Use == to display "false"

document.write(15 == 15); //Use == to display "true"

X = 7;
Y = 7;
document.write(X === Y); //Use === to display true using the same data type and value

A = "String";
B = 5;
document.write(A === B); //Use === to display false using both different data types and values

W = "nine";
Z = 9;
document.write(W === Z); //Use === to display false using different data types but the same value

D = "Jack";
E = "King";
document.write(D === E); //Use === to display false using the same data type but different values

document.write(8 < 9 && 7 < 8); //Use && to display true

document.write(9 < 8 && 7==4); //Use && to display false

document.write(5 > 4 || 4 > 5); //Use || to display true

document.write(4 > 5 || 2 > 3); //Use || to display false

document.write(!(5 > 6)); //Use ! to display true

document.write(!(6 > 5)); //Use ! to display false