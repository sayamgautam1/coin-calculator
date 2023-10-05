function calculateChange() {
  //   console.log("i am clicked");
  // Define the available coins and their values in cents
  let coins = [200, 100, 50, 20, 10, 5, 2, 1];

  // Get the input amount from the user
  let inputAmount = document.getElementById("total-amount").value;

  // split the input value from the decimal point
  let [dollars, cents] = inputAmount.split(".");

  // convert the recieved value into floats , check if the value is null or 0

  let dollarsFloat = dollars ? parseFloat(dollars) : 0;
  let centsFloat = cents ? parseFloat(cents) : 0;

  //   console.log(dollarsFloat);
  //   console.log(centsFloat);

  // Calculate the total amount in cents
  let totalCents = dollarsFloat * 100 + centsFloat;

  // Initialize an object to store the count of each coin
  const totalCoins = {};

  // Iterate through the available coins
  for (const coinValue of coins) {
    // Calculate the number of coins of this value that can be used
    const count = Math.floor(totalCents / coinValue);

    // Store the count, even if it's zero
    if (coinValue >= 100) {
      totalCoins[coinValue / 100 + "s"] = count;
    } else {
      totalCoins[coinValue + "c"] = count;
    }

    // Update the total amount
    totalCents -= count * coinValue;
  }

  console.log(totalCoins, "result");
  // Display counts in their respective div elements
  for (var key in totalCoins) {
    var div = document.getElementById(key + "-output");
    if (div) {
      div.innerHTML = totalCoins[key];
    }
  }
}

// add event listener to listent to calculate change button inside the dom
var buttonElement = document.getElementById("calculate-change");
buttonElement.addEventListener("click", calculateChange);
