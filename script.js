// Constructing the calculator body
let numbers = document.getElementById('numbers');

for (let i = 1; i < 10; i++) {
    let button = document.createElement('button');
    button.textContent = i.toString();
    button.classList.add('number');
    numbers.appendChild(button);
}

for (let el of '0,D') {
    if (el == '0') {
        let button = document.createElement('button');
        button.textContent = el.toString();
        button.classList.add('number');
        numbers.appendChild(button);
    } else if (el == ',') {
        let button = document.createElement('button');
        button.textContent = el;
        button.id = ('comma');
        numbers.appendChild(button);
    } else if (el == 'D') {
        let button = document.createElement('button');
        button.textContent = 'AC';
        button.id = ('delete');
        numbers.appendChild(button);
    }
}

let operators = document.getElementById('operators');

for (let el of '+-/x=') {
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
    } else if (el === 'x') {
        button.textContent = el;
        button.id = 'multiply';
        operators.appendChild(button);
    } else if (el === '=') {
        button.textContent = el;
        button.id = 'equal';
        operators.appendChild(button);
    }
}