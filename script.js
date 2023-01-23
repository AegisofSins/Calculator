//Create a display to display pressed numbers
//Take numbers pressed and insert them into the appropriate function
//Divide function needs to have a 'Cannot divide by 0'
//Numbers need to display after a function had been evaluated.


let display = 0;
let total = 0;

//Num is the number that is being pressed. This function takes that number and adds it to the number that is currently being displayed. This can be zero or the last value that was calculated. 
function add() {   
    return display += display;
}

//Takes the display value and substracts it with the number that was pressed. 
function subtract(num) {
    return display -= num;
}