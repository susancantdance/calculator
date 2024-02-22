let a = 0;
let b = 0;
let op = '';

const digitButtons = document.querySelectorAll('.digits button');
let displayScreen = document.querySelector('.display');

console.log(displayScreen.textContent);


digitButtons.forEach(butt => butt.addEventListener('click', () => display(butt.name)));

function display(buttonName){
    displayScreen.textContent = buttonName;
 
}

function operate(a,b,op){
    switch(op){
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break; 
        case '*':
            return multiply(a,b);  
            break;
        case '/':
           return divide(a,b);
            break;
    }
}

//console.log(operate(3,2,'-'));

function add(a,b){
    return a + b; 
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}