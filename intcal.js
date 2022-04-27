// set the default number as 0
// when function called, take the argument value and 
// multiply with the 10 value (to the input lenght)
// update the input on the screen

let inputCurrent = 0;
let operatorCounter = 0;
let lastOperand = 0;
let output = 0;
let lastOperator;
let equalCheck = false;

// display
function displayInput (data) {
    document.getElementById("inputDisplay").textContent = data;
}

function displayOutput(data) {
    document.getElementById("outputDisplay").textContent = data;
}

// input
function inputNumber(num) {

    // add decimal point check

    if (inputCurrent == 0){
        if (num == 0) {
            return;
        }

        inputCurrent = num;
        displayInput(inputCurrent);
        return;
    }
    
    inputCurrent = (inputCurrent * 10) + num;
    displayInput(inputCurrent);
    // every time a number is pressed, update the input variable and display it on screen
}

function store(operator) {
    operatorCounter++;

    function inputreset(oper){
        inputCurrent = 0;
        lastOperator = oper;
    }

    if (operatorCounter < 3) {
        if (operatorCounter < 2) {
            lastOperand = inputCurrent;
            inputreset(operator);
            return;
        }
        if (equalCheck == true) {
            inputreset(operator);
            equalCheck = false;
            return;
        }
        lastOperandChecker();
        displayOutput(output)
        inputreset(operator);
        return;
    }
    outputChecker();
    displayOutput(output);
    inputreset(operator);
}

// operator checkers
function lastOperandChecker() {
    if (lastOperator == "+")
        add(lastOperand, inputCurrent);
    else if (lastOperator == "-")
        subtract(lastOperand, inputCurrent);
    else if (lastOperator == "*")
        multiply(lastOperand, inputCurrent);
    else if (lastOperator == "/")
        divide(lastOperand, inputCurrent);
}

function outputChecker() {
    if (lastOperator == "+")
        add(output, inputCurrent);
    else if (lastOperator == "-")
        subtract(output, inputCurrent);
    else if (lastOperator == "*")
        multiply(output, inputCurrent);
    else if (lastOperator == "/")
        divide(output, inputCurrent);
}

//operations
function add(previous, current) {
    output = previous + current;
}

function subtract(previous, current) {
    output = previous - current;
}

function multiply(previous, current) {
    output = previous * current;
}

function divide(previous, current) {
    output = previous / current;
}

function clearAll () {
    // reset all counters, all inputs and variables
    operatorCounter = 0;
}

function del() {
    inputCurrent = parseInt(inputCurrent / 10);
    displayInput(inputCurrent);
}

function equalTo() {

    if (operatorCounter < 3) {
        lastOperandChecker();
        displayOutput(output);
        lastOperand = output;
        inputCurrent = 0;
        equalCheck = true;
        return;
    }

    outputChecker();
    displayOutput(output);
    inputCurrent = 0;
}