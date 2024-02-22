let a = '';
let b = '';
let op = '';
let answer = '';

const digitButtons = document.querySelectorAll('.digits button');
const operandButtons = document.querySelectorAll('.operands button');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
let displayScreen = document.querySelector('.display');

digitButtons.forEach(butt => butt.addEventListener('click', () => display(butt.name)));
operandButtons.forEach(oper => oper.addEventListener('click', () => storeOperand(oper.name)));
equals.addEventListener('click',() => equalsClicked());
clear.addEventListener('click', () => clearClicked());

function clearClicked(){
    a = '';
    b = '';
    op = '';
    answer = '';
    displayScreen.textContent = '0';
}

//clicked = sign
function equalsClicked(){
    console.log(`equals:`);
    console.log(`op ${op}`);
    console.log(`a ${a}`);
    console.log(`b ${b}`);
    
    if (a !== '' && b !== ''){
        a = operate(+a, +b, op);
        displayScreen.textContent = a;
        b = '';
        answer = a;
        
    }
    console.log(`answer ${answer}`);
}

// 1 + 2 = + 4 (7) works
// 1 + 2 = 5 + 4 (9) doesnt work

//clicked an operand that isn't = 
function storeOperand(operName){
    console.log(`store operand:`);
    console.log(`op ${op}`);
    console.log(`a ${a}`);
    console.log(`b ${b}`);
    console.log(`answer ${answer}`);
   if(a !== '' && b !== ''){ //other operands - here a=3, b=3, op is +
        a = operate(+a, +b, op);
        displayScreen.textContent = a;
        op = operName;
        b = '';
    }else if (a!== '' && b == ''){
        console.log(`update op:${op} to operName:${operName}`);
        op = operName;
        answer = '';
    }
}

function display(buttonName){
    console.log(`display function:`);
    console.log(`op ${op}`);
    console.log(`a ${a}`);
    console.log(`b ${b}`);
    console.log(`answer ${answer}`);

    if (answer !== ''){
        //this means that equal sign pushed and we now are entering a number
        op = '';
        a = '';
        answer = '';
    }
    if (op == '' && b == '') {
        a += buttonName;
        displayScreen.textContent = a;
        
    } else if (op !== '' && a !==''){
        b += buttonName;
        displayScreen.textContent = b;
    } 


}



function operate(a,b,op){
    console.log(`operating on ${a} ${op} ${b}`);
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
    if(b !== 0) return a / b;
    else return "you can't do that";
}