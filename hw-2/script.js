const FIRST_NUMBER = 0,
  SECOND_NUMBER = 1;

let serialNumber, isNumberCorrect, isUserConfirm;

do {
  isNumberCorrect = true;
  isUserConfirm = true;
  serialNumber = prompt("Enter serial number of fibonacci row");

  if (
    isNaN(+serialNumber) ||
    Math.trunc(+serialNumber) !== +serialNumber ||
    serialNumber === ""
  ) {
    alert("Please, enter an integer");
    isNumberCorrect = false;
  }

  if (!serialNumber) {
    isUserConfirm = false;
  }
} while (!isNumberCorrect);

if (isUserConfirm) {
  const specifiedFibonacciNumber = getSpecifiedFibonacciNumber(
    FIRST_NUMBER,
    SECOND_NUMBER,
    +serialNumber
  );

  const formattedSerialNumber = formatNumberToSerialString(serialNumber);

  alert(
    `The ${formattedSerialNumber} number of fibonacci row is ${specifiedFibonacciNumber}`
  );
}
