function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Please be sure to enter your name correctly.");
        return false;
    }
    let y = document.forms["myForm"]["lname"].value;
    if (y == "") {
        alert("Please be sure to enter your name correctly.");
        return false;
    }
    let z = document.forms["myForm"]["phone"].value;
    if (z == "") {
        alert("Please enter your phone number.");
        return false;
    }
}