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