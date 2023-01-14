function reservedWord() { //Assigned the var to a function the value of a reserved word.
var X = package;
document.getElementById("Reserved").innerHTML = X;
}

//Object constructor function

function Student(first, last, age, grade) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gpa = grade;
}

var Jan = new Student("Jan", "Davidson", 23, 3.8);
var Ida = new Student("Ida", "Sorensdatter", 19, 3.9);
var Matt = new Student("Matthew", "Swartz", 32, 4.0);
var Peter = new Student("Peter", "Mikkelson", 18, 2.8);
function studentInfo() {
    document.getElementById("student").innerHTML = Matt.firstName + " " + Matt.lastName + " is " + Matt.age + " years old and has a " + Matt.gpa + " grade point average."
}