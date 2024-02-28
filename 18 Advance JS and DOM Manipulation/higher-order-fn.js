// HIgher order functions
// They are functions that take other functions as input

function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

//HOF
function calculate(num1, num2, operator){
    return operator(num1, num2);
}