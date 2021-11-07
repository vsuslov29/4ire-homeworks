const FIRST_NUMBER = 0;
const SECOND_NUMBER = 2;
let serialNumber;
let isNumberCorrect;

do {
  isNumberCorrect = true;
  serialNumber = +prompt("Enter serial number of fibonacci row");

  if (isNaN(serialNumber) || Math.trunc(serialNumber) !== serialNumber || !serialNumber) {
    alert("Please, enter an integer");
    isNumberCorrect = false;
  }
} while (!isNumberCorrect);

const specifiedFibonacciNumber = getSpecifiedFibonacciNumber(
  FIRST_NUMBER,
  SECOND_NUMBER,
  serialNumber
);

const formattedSerialNumber = formatNumberToSerial(serialNumber);

alert(
  `The ${formattedSerialNumber} number of fibonacci row is ${specifiedFibonacciNumber}`
);
