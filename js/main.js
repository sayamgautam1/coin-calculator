function calculateChange() {
  //   console.log("i am clicked");
  // Define the available coins and their values in cents
  let coins = [200, 100, 50, 20, 10, 5, 2, 1];

  // Get the input amount from the user
  let inputAmount = document.getElementById("total-amount").value;

  // split the input value from the decimal point
  let [dollars, cents] = inputAmount.split(".");

  // convert the recieved value into floats

  let dollarsFloat = parseFloat(dollars);
  let centsFloat = cents ? parseFloat(cents) : 0; // Default to 0 if cents is not entered

  //   console.log(dollarsFloat);
  //   console.log(centsFloat);

  // Calculate the total amount in cents
  let totalCents = dollarsFloat * 100 + centsFloat;
}

// add event listener to listent to claculate change button inside the dom
var buttonElement = document.getElementById("calculate-change");
buttonElement.addEventListener("click", calculateChange);
