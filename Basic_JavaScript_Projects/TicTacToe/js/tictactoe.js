//This variable keeps track of whose turn it is.
let activePlayer = "X";
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or an o in a square.
function placeXorO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    if(!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks whose turn it is
        if (activePlayer === "X") {
            //If the active player is equal to "X", the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';

        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to an array
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === "X") {
            activePlayer = "O";
        } else {
            activePlayer = "X";
        }
        //This function plays placement sound
        audio("./media/place.mp3");
        //This condition checks to see if it is the computer's turn.
        if (activePlayer === "O") {
            //This function disables clicking for computer's turn
            disableClick();
            //This funciton waits 1 second before the computer places an image and enables click
            setTimeout(function() { computersTurn(); }, 1000);
        }
        //Returning true is needed for our computersTurn() function to work
        return true;
    }
    //This function results in a random square being selected by the computer
    function computersTurn() {
        //This boolean is needed for the while loop
        let success = false;
        //this variable stores a random number 0-8
        let pickASquare;
        //This condition allows the while loop to keep trying if a square is selected already.
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, the square hasn't been selected yet
            if (placeXorO(pickASquare)){
                placeXorO(pickASquare);
                //This changes our booleand and ends the loop
                success = true;
            };
        }
    }
}
//This function pases the selectedSquares array to search for win conditions
//drawLine() function is called to draw a line on the screen if the condition is met
function checkWinConditions() {
    //X win condtions
    if (arrayIncludes ('0X', '1X', '2X')) {drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520)}
    //O win conditions
    else if (arrayIncludes ('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100)}
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508)}
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558)}
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558)}
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558)}
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90)}
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520)}
    //This condition checks for a tie. If none of the above conditions are ment and 9 squares are selected, the code executes
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound
        audio('.media/tie.mp3');
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function () {resetGame(); }, 500);
    }
    //This function checks if an array includes 3 strings. It is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        /*If the three variables we pass are all included in our array, then
        true is returned and our else if condition executes the drawLine() function.*/
        if (a === true && b === true && c === true) { return true; }
    }
}