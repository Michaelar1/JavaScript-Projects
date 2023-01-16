function fullSentences() {      //Concatenate strings to make full sentences
    var A = "At first I didn't like JavaScript, ";
    var B = "but now I realize it isn't so bad. ";
    var C = "Sure, it's tricky; ";
    var D = "but once you get the hang of it, ";
    var E = "it can be kind of fun!";
    var whole_sentences = A.concat(B, C, D, E);
    document.getElementById("Concatenate").innerHTML = whole_sentences;
}