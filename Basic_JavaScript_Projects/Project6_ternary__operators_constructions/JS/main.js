function Ride_Function() { //Using ternary operator to determine whether or not someone is tall enough to ride a ride.
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Dog(Breed, Age, Color) { //Create an object constructor to establish objects
    this.Dog_Breed = Breed;
    this.Dog_Age = Age;
    this.Dog_Color = Color;
}

var Jack = new Dog("Border Collie", 5, "Black and White"); //Utilize object constructor and "new" keyword to create objects of the Dog function.
var Diane = new Dog("Labrador Retriever", 7, "Chocolate");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "Diane has a " + Diane.Dog_Color + " " + Diane.Dog_Breed + " that is " + Diane.Dog_Age + " years old.";
}

//Nested Function
function square_add() { //Create square_add function
    a = document.getElementById("square").value; //Acquire value a from HTML input
    b = document.getElementById("square2").value; //Acquire value b from HTML input
    function square(x) { //Create square funcion
        return x * x;
    }
   document.getElementById("Nested_Function").innerHTML = square(a) + square(b); //Sqare a and b and then add the squares
}