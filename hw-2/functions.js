const getSpecifiedFibonacciNumber = (
  firstNumber,
  secondNumber,
  serialNumber
) => {
  if (serialNumber === 0) return firstNumber;
  if (serialNumber === 1) return secondNumber;

  const specifiedFibonacciNumber =
    serialNumber > 0
      ? getByPositiveNumber(firstNumber, secondNumber, serialNumber)
      : getByNegativeNumber(firstNumber, secondNumber, serialNumber);

  return specifiedFibonacciNumber;
};

const getByPositiveNumber = (firstNumber, secondNumber, serialNumber) => {
  let nextNumber;

  for (let i = 2; i <= serialNumber; i++) {
    nextNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = nextNumber;
  }

  return nextNumber;
};

const getByNegativeNumber = (firstNumber, secondNumber, serialNumber) => {
  let prevNumber;

  for (let i = -1; i >= serialNumber; i--) {
    prevNumber = secondNumber - firstNumber;
    secondNumber = firstNumber;
    firstNumber = prevNumber;
  }

  return prevNumber;
};

const formatNumberToSerial = (number) => {
  let i = number % 10;
  let j = number % 100;

  if (i === 1 && j !== 11) return number + "st";
  if (i === 2 && j !== 12) return number + "nd";
  if (i === 3 && j !== 13) return number + "rd";

  return number + "th";
};
