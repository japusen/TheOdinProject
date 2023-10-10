function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0)
        return undefined;
    return a / b;
}

function operate(operator, firstOperand, secondOperand) {
    switch (operator) {
        case 'add':
            return add(firstOperand, secondOperand);
        case 'subtract':
            return subtract(firstOperand, secondOperand);
        case 'multiply':
            return multiply(firstOperand, secondOperand);
        case 'divide':
            return divide(firstOperand, secondOperand);
    }
}

let firstOperand = '';
let secondOperand = '';
let operator = null;