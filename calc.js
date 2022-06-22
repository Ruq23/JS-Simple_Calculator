const num1 = parseInt(prompt('Enter your first number:', "0"), 10)
const operator = prompt('Enter an operator: +,-,*,/')
const num2 = parseInt(prompt('Enter your second number:', "0"), 10)


if (isNaN(num1)){
    console.log('That is not a number, input a number')
    alert('That is not a number, input a number')
} else {
    console.log (num1)
}
if (operator === '+' || operator === '-' || operator === '/' || operator === '*'){
    console.log(operator)
} else {
    console.log('Invalid operator, try again')
    alert('Invalid operator, try again')
}
if (isNaN(num2)){
    console.log('That is not a number, input a number')
    alert('That is not a number, input a number')
} else {
    console.log (num2)
}


if (operator === '+') {
    console.log(num1 + num2)
    alert(num1 + num2)
} else if (operator === '-') {
    console.log(num1 - num2)
    alert(num1 - num2)
} else if (operator === '*') {
    console.log(num1 * num2)
    alert(num1 * num2)
} else if (operator === '/') {
    console.log( num1 / num2)
    alert( num1 / num2)
}


// Using Functions
// function divide(num1, num2) {
//     return num1 / num2
// }

// function multiply(num1, num2) {
//     return num1 * num2
// }

// function add(num1, num2) {
//     return num1 + num2
// }

// function subtract(num1, num2) {
//     return num1 - num2
// }