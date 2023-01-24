//Create a display to display pressed numbers
//Take numbers pressed and insert them into the appropriate function
//Divide function needs to have a 'Cannot divide by 0'
//Numbers need to display after a function had been evaluated.

const numbers = document.querySelectorAll('.numbers > button');
const clear = document.querySelector('.clear');
const operators = document.querySelectorAll('.operand');
const equal = document.querySelector('.equal');
const output = document.querySelector('.output');
const secondOutput = document.querySelector('.secondOutput')

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let sum = null;

numbers.forEach((numbers) =>
  numbers.addEventListener('click', () => display(numbers.textContent))
);

operators.forEach((operate) =>
  operate.addEventListener('click', () => setOperation(operate.textContent))
);

equal.addEventListener('click', () => calculate(currentOperation)
);

clear.addEventListener('click', () => reset()
);

function reset(){
  firstOperand = '';
  secondOperand = '';
  currentOperation = null;
  secondOutput.textContent = '';
  output.textContent = '';
}

function display(number) {
    if(output.textContent == 0) output.textContent = '';
    output.textContent += number
  } 

function updateDisplay (){
  secondOutput.textContent = `${firstOperand} ${currentOperation} ${b} = `
  output.textContent = sum;
}

function setOperation (operator){
    if (currentOperation != null){
      calculate(currentOperation)
    } else {
    firstOperand = output.textContent;
    currentOperation = operator
    secondOutput.textContent = `${firstOperand} ${currentOperation}`
    output.textContent = '';
    }
    }

function add(a,b ) {
  sum = a+b;
  updateDisplay()
  return sum;
}

function subtract(a,b) {
  sum = a-b;
  updateDisplay();
  return sum; 
}

function divide (a,b) {
  sum = a/b;
  updateDisplay();
  return sum;
}

function multiply(a,b) {
  sum = a*b;
  updateDisplay();
  return sum;
}

function evaluate(){
    a = sum;
    output.textContent = '';
    return a;
}

//Equal button which takes the values and applies the given function
function calculate (currentOperation) {
  if(sum != null) evaluate();
  a = parseInt(firstOperand,10)
  b = parseInt(output.textContent, 10)
  
  switch(currentOperation){
    case '+':
      add(a,b)
      break;
    case '-':
      subtract(a,b)
      break; 
    case '*':
      multiply(a,b)
      break;
    case '/':
      divide(a,b)
      break;
    default:
      return;
  }
}
