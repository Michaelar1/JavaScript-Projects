function displayType(food) {        //Generates an alert with the menu item price when the item is clicked.
    var foodType = food.getAttribute("data-food_price");
    alert("Our " +food.innerHTML + " costs " + foodType + ".");
}