function fullSentences() {      //Concatenate strings to make full sentences
    var A = "At first I didn't like JavaScript, ";
    var B = "but now I realize it isn't so bad. ";
    var C = "Sure, it's tricky; ";
    var D = "but once you get the hang of it, ";
    var E = "it can be kind of fun!";
    var whole_sentences = A.concat(B, C, D, E);
    document.getElementById("Concatenate").innerHTML = whole_sentences;
}

function sliceMethod() {        //Extract a "slice" of the list string and return as its own string.
    var list = "Pizza, cake, pie, cheese, apple, orange";
    var section = list.slice(7,11);
    document.getElementById("Slice").innerHTML = section;
}

/* 
Funnily enough, I used the toUpperCase() method in the Scope, Time, and Function project to make sure that the input in line 40 of the HTML would be accepted in the JS code without user error.
However, I can play with it here, too, for extra practice!
*/

function Upper() {              //Transform all text in a string to upper case
    var A = "That rug really tied the room together.";
    document.getElementById("DudeAbides").innerHTML = A.toUpperCase();
}

function find() {               //Search the string to find the position of the first occurance of that value.
    var S = "I keep a bag of oranges in my kitchen at all times!";
    var position = S.search("oranges");
    document.getElementById("Oranges").innerHTML = position;
}

function stringMethod() {       //Return a number (717) as a string.
    var Y = 717;
    document.getElementById("NumToString").innerHTML = Y.toString();
}

function precisionFormat() {
    var X = 3.14159265358979323846264338327950288419716939937510;
    document.getElementById("Pie").innerHTML = X.toPrecision(25);
}    