//Form validation
function validateForm() {
    let x = document.forms["contactForm"]["fname"].value;       //validate first name  
    if (x == "") {
        alert("Name must be filled out.");                      
        return false;
    }
    let y = document.forms["contactForm"]["lname"].value;       //validate last name
    if (y == "") {
        alert("Name must be filled out.");
        return false;
    }
    let z = document.forms["contactForm"]["email"].value;       //validate email
    if (z == "") {
        alert("Please make sure your e-mail is filled out correctly.");
        return false;
    }
    let a = document.forms["contactForm"]["message"].value;     //validate message
    if (a == "") {
        alert("Please leave a message.");
        return false;
    }
}