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
        default:
            return 'error';
    }
}

function clearDisplay() {
    if (displayNumber.length !== 0) {
        updateDisplayNumber('');
        updateDisplayExpression('');
    }
}

function deleteDisplayNumber() {
    if (displayNumber.length !== 0) {
        updateDisplayNumber(displayNumber.slice(0, -1))
    }
}

function updateDisplayNumber(number) {
    displayNumber = number;
    let display = document.querySelector('.current-operand');
    display.textContent = displayNumber;
}

function updateDisplayExpression(expression) {
    previousExpression = expression;
    let displayExpression = document.querySelector('.previous-operation');
    displayExpression.textContent = previousExpression;
}

function addDigit(digit) {
    let newNumber;
    (displayNumber.length == 1 && displayNumber == '0') ? 
    newNumber = digit : newNumber = displayNumber.concat(digit);
    updateDisplayNumber(newNumber);
}

function initButtons() {
    let clearButton = document.querySelector('.clear-btn');
    clearButton.addEventListener('click', clearDisplay);

    let deleteButton = document.querySelector('.delete-btn');
    deleteButton.addEventListener('click', deleteDisplayNumber);

    const buttonsMap = new Map([
        ['zero-btn', '0'], ['one-btn', '1'], ['two-btn', '2'],
        ['three-btn', '3'], ['four-btn', '4'], ['five-btn', '5'],
        ['six-btn', '6'], ['seven-btn', '7'], ['eight-btn', '8'], 
        ['nine-btn', '9']
    ]);
    
    buttonsMap.forEach((value, key, _) => {
        let currentButton = document.querySelector(`button.${key}`);
        currentButton.addEventListener('click', _ => {
            addDigit(value);
        });
    });
}



let firstOperand = '';
let secondOperand = '';
let operator = null;
let previousExpression = '';
let displayNumber = '';

initButtons();
updateDisplayNumber('0');