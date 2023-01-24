//Create a display to display pressed numbers
//Take numbers pressed and insert them into the appropriate function
//Divide function needs to have a 'Cannot divide by 0'
//Numbers need to display after a function had been evaluated.

const numbers = document.querySelectorAll('.numbers > button');
const operators = document.querySelectorAll('.operand');
const output = document.querySelector('.output');

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;

numbers.forEach((numbers) =>
  numbers.addEventListener('click', () => display(numbers.textContent))
)

operators.forEach((operate) =>
  operate.addEventListener('click', () => setOperation(operate.textContent))
)

function resetScreen(){
    output.textContent = ''
}

function display(number) {
    if(output.textContent == 0){
        resetScreen()};
    output.textContent += number
  }  

function setOperation (operator){
    // if(currentOperation != null)
    firstOperand = output.textContent;
    currentOperation = operator
    }


function add(a,b ) {
    return a + b;
}

function subtract() {
    
}
function divide () {

}
function multiply() {

}

//Equal button which takes the values and applies the given function
function operate (a,b) {

    
}
