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

function get_Date() {   //Write a function with an if statement that utilizes the new Date().getHours()method
    if(new Date().getHours() < 16) {
        document.getElementById("Greeting").innerHTML = "Shouldn't you be studying?";
    }
}

function compareNum() { //Write an if statement.
    if (Y > 100) {
        document.getElementById("greater").innerHTML = "739 is greater than 100."
    }
}

function Spoiler_Function() {   //Write an else statement
    Agree = document.getElementById("Dragon").value;
    if (Agree == "YES") {
        Spoiler = "You do not have to worry about spoilers.";
    }
    else {
        Spoiler = "Please watch the whole season before visiting this site.";
    }
    document.getElementById("Spoiler_Alert").innerHTML = Spoiler;
}

function Time_function() {              //Write an else if statement
    var Time = new Date().getHours();   //Establishes variable Time by pulling the time from the user's computer
    var Reply;                          //Declares Reply variable that changes depending upon the time.
    if (Time < 12 == Time > 0) {        //If the time is before noon and after midnight, it is morning.
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {  //If the time is noon or later but before 6PM, it is the afternoon.
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";   //Else, if none of the above are true, it is evening.   
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}