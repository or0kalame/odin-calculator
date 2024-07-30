// Constructing the calculator body
let numbers = document.getElementById('numbers');

// Adding the numbers buttons
for (let i = 1; i < 10; i++) {
    let button = document.createElement('button');
    button.textContent = i.toString();
    button.classList.add('number');
    numbers.appendChild(button);
}

// Adding "0", "." and "AC" buttons
for (let el of '0.D') {
    if (el == '0') {
        let button = document.createElement('button');
        button.textContent = el.toString();
        button.classList.add('number');
        numbers.appendChild(button);
    } else if (el == '.') {
        let button = document.createElement('button');
        button.textContent = el;
        button.id = 'dot';
        numbers.appendChild(button);
    } else if (el == 'D') {
        let button = document.createElement('button');
        button.textContent = 'AC';
        button.id = ('delete');
        numbers.appendChild(button);
    }
}

// Adding the operators buttons
let operators = document.getElementById('operators');
for (let el of '+-/*=') {
    let button = document.createElement('button');
    if (el === '+') {
        button.textContent = el;
        button.id = 'add';
        operators.appendChild(button);
    } else if (el === '-') {
        button.textContent = el;
        button.id = 'substruct';
        operators.appendChild(button);
    } else if (el === '/') {
        button.textContent = el;
        button.id = 'divide';
        operators.appendChild(button);
    } else if (el === '*') {
        button.textContent = el;
        button.id = 'multiply';
        operators.appendChild(button);
    } else if (el === '=') {
        button.textContent = el;
        button.id = 'equal';
        operators.appendChild(button);
    }
}

// Logic for the input number
let firstNumber;
let secondNumber;
let operator;

let operatorPressed = false;

let numberOnScreen = document.getElementById('numberOnScreen');
let digits = document.getElementsByClassName('number');

let addCommand = document.getElementById('add');
let subCommand = document.getElementById('substruct');
let multiplyCommand = document.getElementById('multiply');
let divideCommand = document.getElementById('divide');
let equalCommand = document.getElementById('equal');
let deleteCommand = document.getElementById('delete');

// Event Listeners
for (let digit of digits) {
    digit.addEventListener('click', () => {
        if (numberOnScreen.textContent === 'Error') return;

        if (numberOnScreen.textContent === '0' && !operatorPressed) {
            numberOnScreen.textContent = digit.textContent;
        } else if (!operatorPressed) {
            numberOnScreen.textContent += digit.textContent;
        } else if (operatorPressed) {
            numberOnScreen.textContent = digit.textContent;
            operatorPressed = false;
        }
    })
}

let dot = document.getElementById('dot');
dot.addEventListener('click', () => {
    numberOnScreen.textContent += '.';
})

addCommand.addEventListener('click', () => {
    firstNumber = parseFloat(numberOnScreen.textContent);
    operator = '+';
    operatorPressed = true;
    brightUpElement(addCommand);
    resetElements(subCommand, multiplyCommand, divideCommand);
})

subCommand.addEventListener('click', () => {
    firstNumber = parseFloat(numberOnScreen.textContent);
    operator = '-';
    operatorPressed = true;
    brightUpElement(subCommand);
    resetElements(addCommand, multiplyCommand, divideCommand);
})

multiplyCommand.addEventListener('click', () => {
    firstNumber = parseFloat(numberOnScreen.textContent);
    operator = '*';
    operatorPressed = true;
    brightUpElement(multiplyCommand);
    resetElements(addCommand, subCommand, divideCommand);
})

divideCommand.addEventListener('click', () => {
    firstNumber = parseFloat(numberOnScreen.textContent);
    operator = '/';
    operatorPressed = true;
    brightUpElement(divideCommand);
    resetElements(addCommand, multiplyCommand, subCommand);
})

equalCommand.addEventListener('click', () => {
    if (numberOnScreen.textContent === 'Error') return;

    secondNumber = parseFloat(numberOnScreen.textContent);
    switch (operator) {
        case '+':
            numberOnScreen.textContent = firstNumber + secondNumber;
            resetElements(addCommand); 
            break;
        case '-':
            numberOnScreen.textContent = firstNumber - secondNumber;
            resetElements(subCommand); 
            break;
        case '*':
            numberOnScreen.textContent = firstNumber * secondNumber;
            resetElements(multiplyCommand); 
            break;
        case '/':
            if (secondNumber === 0) {
                numberOnScreen.textContent = 'Error';
                resetElements(divideCommand); 
                break;
            } else {
                numberOnScreen.textContent = firstNumber / secondNumber;
                resetElements(divideCommand); 
                break;
            }
    }
})

deleteCommand.addEventListener('click', () => {
    numberOnScreen.textContent = '0';
    firstNumber = 0;
    secondNumber = 0;
})

// Functions
function brightUpElement(element) {
    element.style.color = '#db6001'; 
    element.style.backgroundColor = 'white'; 
}

function resetElements(...elements) {
    for (let element of elements) {
        element.style.color = null; 
        element.style.backgroundColor = null; 
    }
}