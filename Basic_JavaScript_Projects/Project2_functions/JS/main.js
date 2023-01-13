function My_First_Function() { //Create function
    var A = "You can dance if you want to, "; //Define variable A and assign a string value
    A += "You can leave your friends behind..." //Concatenate A with a second string. 
    document.getElementById("Button_Text").innerHTML = A; //Print concatenated string in teh element with the "Button_Text" ID
}