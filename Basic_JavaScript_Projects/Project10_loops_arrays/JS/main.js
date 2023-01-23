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

//For Loop
var Instruments = ["Guitar", "Drums", "Flute", "Bagpipes", "Piano", "Violin", "Bass", "Trumpet", "French Horn", "Viola", "Oboe", "Clarinet", "Ukulele", "Castinettes", "Basoon", "Trombone", "Saxophone"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


//Array/document.getElementById
function array_Function() {
    var toDo = [];
    toDo[0] = "Study JavaScript";
    toDo[1] = "Fold Laundry";
    toDo[2] = "Study Danish";
    toDo[3] = "Call my Mom";
    toDo[4] = "Bake a cake";
    document.getElementById("Array").innerHTML = "Today I have to: " + toDo[0] + ".";
}