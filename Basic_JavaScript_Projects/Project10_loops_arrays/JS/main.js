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
function lengthProperty() {     //This function returns the length of the text string.
    var text = "My name is Michaela.";
    document.getElementById("length").innerHTML = text.length;
}

//For Loop
var Instruments = ["Guitar", "Drums", "Flute", "Bagpipes", "Piano", "Violin", "Bass", "Trumpet", "French Horn", "Viola", "Oboe", "Clarinet", "Ukulele", "Castinettes", "Basoon", "Trombone", "Saxophone"];      //This function will print a list of musical instruments.
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


//Array/document.getElementById
function array_Function() {     //This function uses an array of To Do list items and returns one of the list items.
    var toDo = [];
    toDo[0] = "Study JavaScript";
    toDo[1] = "Fold Laundry";
    toDo[2] = "Study Danish";
    toDo[3] = "Call my Mom";
    toDo[4] = "Bake a cake";
    document.getElementById("Array").innerHTML = "Today I have to: " + toDo[0] + ".";
}

//const function
function constant_function() {      //This sets a constant, "bicycle" and adds properties and values. 
    const bicycle = {brand:"Liv", model:"Avail AR 3", color:"Terra Roza", price: "$1450"};
    bicycle.color = "Ocean Wave";
    bicycle.size = "Small";
    bicycle.availability = "Available";
    document.getElementById("Constant").innerHTML = "This bicycle is a " + bicycle.brand + " " + bicycle.model + "." 
}

//let keyword function
function variableFunction() {       //This demonstrates the block scope of the let keyword
    var Z = 75 + 11;                //Here, I assign an expression to Z
    document.getElementById("Z1").innerHTML = Z;
    {
        let Z = 853;                //Here, I assign a number to Z that is not of the same value assigned earlier.
        document.getElementById("Z2").innerHTML = Z;
    }
    document.getElementById("Z3").innerHTML = Z;
}

//Return Statement
function oilerFunction() {      //This function returns Euler's number; I discovered that apparently, "Euler" is a reserved word and thus had to change it to "oiler" to get the function to work.
    return Math.E;
}
document.getElementById("oiler").innerHTML = oilerFunction();  


//Creating an object
let painting = {                         //This object describes a painting that will display with HTML
    title: "Fra et romersk osteria",    //These are all properties
    artist: "Carl Bloch",
    medium: "Oil on Canvas",
    year: "1886",
    description: function() {           //This is the method.
        return "This painting is called " + this.title + ". It was painted by " + this.artist + " in " + this.year + " using " + this.medium + "."
    }
};
document.getElementById("paintingObject").innerHTML = painting.description();

//Break Statement function
function countToFive() {        //I used the count_To_Ten() function from the While Loops lesson, but I added the break to show that it can stop the function from counting all the way to ten.
    let digit = "";
    let X = 1;
    while (X < 11) {
        if (X === 6) {break;}   //Right here, I'm telling the function that once it reaches 6, it should stop.
        digit += "<br>" + X;
        X++;
    }
    document.getElementById("jumpOut").innerHTML = digit;
}

//Continue Statement Function
function countToTen() {         //For whatever reason, this refused to work in a while loop, so I wrote basically the same function using a for loop and it worked fine.        
    let digit = "";
    for (i = 1; i <11; i++) {
        if(i === 5){continue;} //Right here, I'm telling the function to skip over 5, so it would print 4 then 6.
       digit += "<br>" + i;
    }
    document.getElementById("jumpOver").innerHTML = digit;
}