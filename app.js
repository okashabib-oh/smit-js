function addNumber() {
  let firstNumber = prompt("Enter first number: ");
  let secondNumber = prompt("Enter second number: ");

  let answerAdd = Number(firstNumber) + Number(secondNumber);
  alert(`The sum of ${firstNumber} and ${secondNumber} is ${answerAdd}.`);
  console.log(`The sum of ${firstNumber} and ${secondNumber} is ${answerAdd}.`);
}
