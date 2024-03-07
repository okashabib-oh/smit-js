function addNumber() {
  let firstNumber = prompt("Enter first number: ");
  let secondNumber = prompt("Enter second number: ");

  let answerAdd = Number(firstNumber) + Number(secondNumber);
  alert(`The sum of ${firstNumber} and ${secondNumber} is ${answerAdd}.`);
  console.log(`The sum of ${firstNumber} and ${secondNumber} is ${answerAdd}.`);
}
function subtractNumber() {
  let firstNumber = prompt("Enter first number: ");
  let secondNumber = prompt("Enter second number: ");

  let answerSubtract = Number(firstNumber) - Number(secondNumber);
  alert(
    `The subtraction of ${firstNumber} and ${secondNumber} is ${answerSubtract}.`
  );
  console.log(
    `The sum of ${firstNumber} and ${secondNumber} is ${answerSubtract}.`
  );
}
function multiplyNumber() {
  let firstNumber = prompt("Enter first number: ");
  let secondNumber = prompt("Enter second number: ");

  let answerMultiply = Number(firstNumber) * Number(secondNumber);
  alert(
    `The multiplication of ${firstNumber} and ${secondNumber} is ${answerMultiply}.`
  );
  console.log(
    `The sum of ${firstNumber} and ${secondNumber} is ${answerMultiply}.`
  );
}
function divideNumber() {
  let firstNumber = prompt("Enter first number: ");
  let secondNumber = prompt("Enter second number: ");

  let answerDivide = Number(firstNumber) / Number(secondNumber);
  alert(
    `The division of ${firstNumber} and ${secondNumber} is ${answerDivide}.`
  );
  console.log(
    `The sum of ${firstNumber} and ${secondNumber} is ${answerDivide}.`
  );
}
