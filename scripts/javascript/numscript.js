function add(num1, num2){
    let sum = num1 + num2;
    return sum;
}
function subtract(num1, num2){
    let sum = num1 - num2;
    return sum;
}
function multiply(num1, num2){
    let sum = num1 * num2;
    return sum;
}
function divide(num1, num2){
    let sum = num1 / num2;
    return sum;
}
    
let number_1 = 2234;
let number_2 = 5233;

let add_function_result = add(number_1, number_2);
let subtract_function_result = subtract(number_1, number_2);
let multiply_function_result = multiply(number_1, number_2);
let divide_function_result = divide(number_1, number_2);

    
alert(`Addition: ${add_function_result}\n\nSubtraction ${subtract_function_result}\n\nMultiplication ${multiply_function_result}\n\nDivison ${divide_function_result}`);