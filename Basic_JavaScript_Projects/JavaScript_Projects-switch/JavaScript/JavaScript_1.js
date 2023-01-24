function menuFunction() {       //Used switch statement to set up a return value when the user makes their selection.
    var orderOutput;
    var Foods = document.getElementById("Food_Input").value;
    var OrderString = " is an excellent choice! Your order will be ready in 20 minutes."
    switch(Foods) {
        case "smorrebrod":
            orderOutput = "The Sm&#248;rrebr&#248;d Sampler" + OrderString;
        break;
        case "frikadeller":
            orderOutput = "Frikadeller" + OrderString;
        break;
        case "chili":
            orderOutput = "Vegetarian Chili with Cornbread" + OrderString;
        break;
        case "mac":
            orderOutput = "Greens Mac and Cheese" + OrderString;
        break;
        case "burger":
            orderOutput = "The Black Bean Burger" + OrderString;
        break;
        default:            //Technically, with the <select> menu, this default statement is unnecessary, but I added it regardless for the practice.
            orderOutput = "Please enter the number of the item on the menu - not the item itself.";            
    }
    document.getElementById("output").innerHTML = orderOutput;
}
function drinkMenu() {      //This uses the document.getElementsByClassName() method to change "Latte" to "Espresso."
    const list = document.getElementsByClassName("beverages")[0];
    list.getElementsByClassName("drink")[2].innerHTML = "Espresso";
}