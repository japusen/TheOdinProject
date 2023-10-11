function add(a, b) {
	return Number(a) + Number(b);
}

function subtract(a, b) {
	return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    if (b === '0')
        return 'Error! Divide by zero';
    return Number(a) / Number(b);
}

function operate(operator, firstOperand, secondOperand) {
    switch (operator) {
        case '+':
            return add(firstOperand, secondOperand).toString();
        case '-':
            return subtract(firstOperand, secondOperand).toString();
        case '×':
            return multiply(firstOperand, secondOperand).toString();
        case '÷':
            return divide(firstOperand, secondOperand).toString();
        default:
            return 'error';
    }
}

function clearDisplay() {
    updateDisplayNumber('');
    updateDisplayExpression('');
    firstOperand = '';
    operator = '';
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

    const operators = new Map([
        ['divide-btn', '÷'], ['multiply-btn', '×'],
        ['add-btn', '+'], ['subtract-btn', '-'], 
    ]);

    operators.forEach((value, key, _) => {
        let operatorButton = document.querySelector(`.${key}`);
        operatorButton.addEventListener('click', _ => {
            if (displayNumber !== '') {
                firstOperand = (firstOperand === '') ? 
                displayNumber : operate(operator, firstOperand, displayNumber);
                operator = value;
                updateDisplayExpression(`${firstOperand} ${operator}`)
                updateDisplayNumber('');
            }
        });
    });
}



let firstOperand = '';
let operator = '';
let previousExpression = '';
let displayNumber = '';

initButtons();
updateDisplayNumber('0');