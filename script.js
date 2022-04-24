let number = "";
let output = 0;
let counter = 0;
let lastNumber = 0;
let lastOpeator;

// input (operator) last output
function inputNumber (num) {

    // decimal checker
    if (num == String.fromCharCode(46)) {
        for (i = 0; i < number.length - 1; i++)
        {
            if (number[i] == String.fromCharCode(46)){
                return;
            }
        }
    }
    // extra 0 at first number checker
    else if (num[0] == 0)
        number = 0;
    // first input
    else if (num[0] > 0 && number == 0)
        number = String(num);

    if (number == 0) {
        number = String(num);
    } else {
        number += String(num);
    }

    document.getElementById("inputDisplay").textContent = `${number}`;
    // onclick button, recieve the number or the decimal and display it to the paragraph
}

function store (operator) {
    console.log(counter);
    if (counter == 0) {
        displayHandler();
        counter++;
    }
    else if (counter > 0) {
        calculation(operator);
    }
    number = 0;
    lastOpeator = operator;
    // stores the current operator called
}

function displayHandler () {
    document.getElementById("inputDisplay").textContent = 0;
    document.getElementById("outputDisplay").textContent = number;
}

function calculation (operatorCalled) {
    lastNumber = number;
    
    if (counter == 1) {
        if (operatorCalled == "+")
        output = add(parseInt(lastNumber), parseInt(number));
        else if (operatorCalled == "-")
        output = subtract(parseInt(lastNumber), parseInt(number));
        else if (operatorCalled == "*")
        output = multiply(parseInt(lastNumber), parseInt(number));
        else if (operatorCalled == "/")
        output = divide(parseInt(lastNumber), parseInt(number));

        document.getElementById("inputDisplay").textContent = 0;
        document.getElementById("outputDisplay").textContent = output;
        number = 0;
        console.log("output check 1")
        console.log(operatorCalled)
        console.log(output)
        counter++;
        return;
    }
    else if (counter > 1) {
        if (operatorCalled == "+")
        output = add(parseInt(output), parseInt(number));
        else if (operatorCalled == "-")
        output = subtract(parseInt(output), parseInt(number));
        else if (operatorCalled == "*")
        output = multiply(parseInt(output), parseInt(number));
        else if (operatorCalled == "/")
        output = divide(parseInt(output), parseInt(number));

        document.getElementById("inputDisplay").textContent = 0;
        document.getElementById("outputDisplay").textContent = output;
        console.log("output check greater than 1")
        console.log(operatorCalled)
        console.log(output)


        number = 0;
        counter++;
        return;
    }
    console.log("calc")
}

function equalTo () {
    if (counter == 0) {
        document.getElementById("outputDisplay").textContent = lastNumber;
        document.getElementById("inputDisplay").textContent = "0";
        counter = 0;
        return;
    }
    if (counter > 0) {
        calculation(lastOpeator);
        document.getElementById("inputDisplay").textContent = "0";
        counter = 0;
        return;
    }
}

function add(oldNum, newNum) {
    return oldNum + newNum;
}

function subtract(oldNum, newNum) {
    return oldNum - newNum;
}

function multiply(oldNum, newNum) {
    return oldNum * newNum;
}

function divide(oldNum, newNum) {
    return oldNum / newNum;
}

// append string to inputDisplay
// once add button is pressed, wait for the 2nd input, after which whenever an operator or = is pressed, update the output
function del () {
    if (document.getElementById("inputDisplay").textContent.length == 1) {
        document.getElementById("inputDisplay").textContent = 0;
        return;
    }
    else if (document.getElementById("inputDisplay").textContent.length > 1) {
        let delNumber = number.substring(0, number.length - 1);
        number = delNumber;
        document.getElementById("inputDisplay").textContent = `${number}`;
    }
}

function resetAll () {
    document.getElementById("inputDisplay").textContent = "0";
    number = "";
    counter = 0;
}

function clearAll () {
    resetAll();
    document.getElementById("outputDisplay").textContent = " ";
}



/* if (counter == 0) {
        document.getElementById("inputDisplay").textContent = 0;
        document.getElementById("outputDisplay").textContent = number;
        counter++;
        number = 0;
        return;
    }
    else  */