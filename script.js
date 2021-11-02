let initialCurrencyName;
let amountToConvert;
let convertedCurrencyName;
let isConvertingAgain;
let isInvalidInitialCurrencyName;
let isInvalidAmount;
let isInvalidConvertedCurrencyName;
let convertedAmount;

do {
  do {
    isInvalidInitialCurrencyName = false;
    initialCurrencyName = prompt(
      "Enter currency name (only hryvna, ruble, dollar, euro and yuan are available)"
    );
    if (
      initialCurrencyName !== "hryvna" &&
      initialCurrencyName !== "ruble" &&
      initialCurrencyName !== "dollar" &&
      initialCurrencyName !== "euro" &&
      initialCurrencyName !== "yuan"
    ) {
      alert(
        "You entered invalid currency. Please, select currency from the list."
      );
      isInvalidInitialCurrencyName = true;
    }
  } while (isInvalidInitialCurrencyName);

  do {
    isInvalidAmount = false;
    amountToConvert = +prompt("Enter an amount to convert");
    if (amountToConvert <= 0 || !amountToConvert) {
      alert(
        "You entered invalid amount. Please, enter any number greater than zero."
      );
      isInvalidAmount = true;
    }
  } while (isInvalidAmount);

  do {
    isInvalidConvertedCurrencyName = false;
    convertedCurrencyName = prompt(
      "Enter currency name to convert (only hryvna, ruble, dollar, euro and yuan are available)"
    );

    if (
      convertedCurrencyName !== "hryvna" &&
      convertedCurrencyName !== "ruble" &&
      convertedCurrencyName !== "dollar" &&
      convertedCurrencyName !== "euro" &&
      convertedCurrencyName !== "yuan"
    ) {
      alert(
        "You entered invalid currency. Please, select currency from the list."
      );
      isInvalidConvertedCurrencyName = true;
    }

    if (initialCurrencyName === convertedCurrencyName) {
      alert(
        "Oooops...you try to convert to the same currency, please, select the other one."
      );
      isInvalidConvertedCurrencyName = true;
    }
  } while (isInvalidConvertedCurrencyName);

  switch (initialCurrencyName) {
    case "hryvna":
      switch (convertedCurrencyName) {
        case "dollar":
          convertedAmount = amountToConvert * 0.04;
          break;
        case "ruble":
          convertedAmount = amountToConvert * 2.63;
          break;
        case "euro":
          convertedAmount = amountToConvert * 0.03;
          break;
        case "yuan":
          convertedAmount = amountToConvert * 0.24;
          break;
        default:
          alert("Some error...");
      }
      break;
    case "ruble":
      switch (convertedCurrencyName) {
        case "dollar":
          convertedAmount = amountToConvert * 0.01;
          break;
        case "hryvna":
          convertedAmount = amountToConvert * 0.38;
          break;
        case "euro":
          convertedAmount = amountToConvert * 0.01;
          break;
        case "yuan":
          convertedAmount = amountToConvert * 0.09;
          break;
        default:
          alert("Some error...");
      }
      break;
    case "dollar":
      switch (convertedCurrencyName) {
        case "hryvna":
          convertedAmount = amountToConvert * 26.46;
          break;
        case "ruble":
          convertedAmount = amountToConvert * 69.88;
          break;
        case "euro":
          convertedAmount = amountToConvert * 0.85;
          break;
        case "yuan":
          convertedAmount = amountToConvert * 6.4;
          break;
        default:
          alert("Some error...");
      }
      break;
    case "euro":
      switch (convertedCurrencyName) {
        case "dollar":
          convertedAmount = amountToConvert * 1.14;
          break;
        case "ruble":
          convertedAmount = amountToConvert * 80.69;
          break;
        case "hryvna":
          convertedAmount = amountToConvert * 30.26;
          break;
        case "yuan":
          convertedAmount = amountToConvert * 7.41;
          break;
        default:
          alert("Some error...");
      }
      break;
    case "yuan":
      switch (convertedCurrencyName) {
        case "dollar":
          convertedAmount = amountToConvert * 0.16;
          break;
        case "ruble":
          convertedAmount = amountToConvert * 11.11;
          break;
        case "euro":
          convertedAmount = amountToConvert * 0.14;
          break;
        case "hryvna":
          convertedAmount = amountToConvert * 4.11;
          break;
        default:
          alert("Some error...");
      }
      break;
    default:
      alert("Some error...");
  }

  alert(
    `${amountToConvert.toFixed(
      2
    )} ${initialCurrencyName}s = ${convertedAmount.toFixed(
      2
    )} ${convertedCurrencyName}s`
  );

  isConvertingAgain = confirm("Do you want to convert again?");
} while (isConvertingAgain);
