function getReceipt() {
    /* This initializes our strin so it can get passed from 
    function to function, growing line by line into a full receipt */
    var text1 = "<h3> You Ordered: </h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    //Crust type does not cost extra, just adds a descriptor to size
    var crustArray = document.getElementsByClassName("crust");
    for (var i = 0; i < crustArray.length; i++) {
        if (crustArray[i].checked) {
            var crustType = crustArray[i].value;
        } else {
            crustType = "Plain Crust ";
        }
    }
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + crustType + " " + selectedSize + "<br>";
        } 
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: "+ text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //these variables will get passed to each functon
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var selectedSauce = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item:("+toppingArray[j].value+")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var sauceArray = document.getElementsByClassName("sauces");
    for (var k = 0; k < sauceArray.length; k++) {
        if (sauceArray[k].checked) {
            selectedSauce.push(sauceArray[k].value);
            console.log("selected sauce(s): (" + sauceArray[k].value + ")");
            text1 = text1 + sauceArray[k].value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    var sauceCount = selectedSauce.length;
    if (sauceCount >= 1 ) {
        sauceTotal = (sauceCount * 0.10);
    } else {
        sauceTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal + sauceTotal);
    console.log("total selected topping items: "+ toppingCount);
    console.log("total selected sauces: " + (sauceCount * 10));
    console.log(toppingCount +" topping - 1 free topping = " + "$" +toppingTotal + ".00");
    console.log("topping text1 " + text1);
    console.log("sauce text1" + text1);
    console.log("Purchase Total: "+"$"+ runningTotal.toFixed(2));
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+ runningTotal.toFixed(2) + "</strong></h3>";
};