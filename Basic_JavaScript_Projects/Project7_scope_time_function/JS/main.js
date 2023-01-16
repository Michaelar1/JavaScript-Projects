var Y = 739            //Write a function with a global variable
function addition() {
    document.getElementById("add_global").innerHTML = (Y + 90 +"<br>");
}
function addition2() {
    document.getElementById("add_global2").innerHTML = (Y + 937);
}


function subtraction() { //Write a function with a local variable
    var Z = 50;
    document.getElementById("sub_local").innerHTML = (100-Z);
}

function noWork() {     //Intentionally write a function with an error in it and use console.log
    console.log(Y / Z);
}
noWork();               //Console reads "Uncaught ReferenceError: Z is not defined at noWork (main.js:16:21) at main.js:18:1"