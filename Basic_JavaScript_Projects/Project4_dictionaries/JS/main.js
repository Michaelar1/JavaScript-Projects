function myDictionary() { //Create a dictionary
    var Phone = {       //Add KVPs
        Manufacturer: "Samsung",
        Model: "A150",
        Color: "Black",
        OS: "Android",
        Provider: "T-Mobile"
    };
    delete Phone.OS; //Delete Key: OS
    document.getElementById("Dictionary").innerHTML = Phone.OS; //Print the value under key "OS" (as it is deleted, it returns "undefined.")
}