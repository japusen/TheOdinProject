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
        case 'add':
            return add(firstOperand, secondOperand).toString();
        case 'subtract':
            return subtract(firstOperand, secondOperand).toString();
        case 'multiply':
            return multiply(firstOperand, secondOperand).toString();
        case 'divide':
            return divide(firstOperand, secondOperand).toString();
        default:
            return 'error';
    }
}

function clearDisplay() {
    if (displayNumber.length !== 0) {
        updateDisplayNumber('');
        updateDisplayExpression('');
        firstOperand = '';
        secondOperand = '';
    }
}

function deleteDisplayNumber() {
    if (firstOperand !== '' & secondOperand !== '')
        return;
    
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
    if (firstOperand !== '' & secondOperand !== '')
        return;

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
let operator = '';
let previousExpression = '';
let displayNumber = '';

initButtons();
updateDisplayNumber('0');

let addButton = document.querySelector('.add-btn');
addButton.addEventListener('click', _ => {
    operator = '+';
    if (displayNumber !== '') {
        if (firstOperand === '') {
            firstOperand = displayNumber;
            updateDisplayExpression(`${firstOperand} ${operator}`)
            updateDisplayNumber('');
        } else if (secondOperand === '') {
            secondOperand = displayNumber;
            updateDisplayExpression(`${previousExpression} ${secondOperand}`)
            let answer = operate('add', firstOperand, secondOperand);
            updateDisplayNumber(answer);
        } else {
            firstOperand = displayNumber;
            secondOperand = '';
            updateDisplayExpression(`${firstOperand} ${operator}`)
            updateDisplayNumber('');
        }
    }
});