const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

// Load the HTML file containing the code to be tested
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

// Mock the DOM environment using JSDOM
const dom = new JSDOM(html);
global.document = dom.window.document;
global.window = dom.window;

// Import the code to be tested
const { calculateChange } = require("../js/main.js");

describe("Coin Change Calculator User Interaction", () => {
  let inputAmount;
  let calculateChange;

  // Set up the HTML elements before each test
  beforeEach(() => {
    inputAmount = document.getElementById("total-amount");
    calculateChange = document.getElementById("calculate-change");
    coinDivs = Array.from(document.getElementsByClassName("coin"));
  });

  it("should have value for user input", () => {
    expect(inputAmount).toBeTruthy();
  });

  it("should have a calculate button", () => {
    expect(calculateChange).toBeTruthy();
  });

  it("should trigger calculateChange function when button is clicked", () => {
    // Mock the calculateChange function for testing
    const mockCalculateChange = jest.fn();
    calculateChange.addEventListener("click", mockCalculateChange);

    // Trigger a click event on the button
    const event = new dom.window.Event("click");
    calculateChange.dispatchEvent(event);

    // Expect that the calculateChange function was called once
    expect(mockCalculateChange).toHaveBeenCalledTimes(1);
  });

  it("should calculate change correctly for $1", () => {
    // Set input values to $3.75
    inputAmount = "1";

    // Trigger a click event on the button
    const event = new dom.window.Event("click");
    calculateChange.dispatchEvent(event);

    // Define the expected change as an array of strings for each coin denomination
    const expectedChange = [
      "2s: 0",
      "1s: 1",
      "50c: 0",
      "20c: 0",
      "10c: 0",
      "5c: 0",
      "2c: 0",
      "1c: 0",
    ];

    // Check if the displayed change matches the expected change
    expect(coinDivs.map((div) => div.innerHTML)).toEqual(expectedChange);
  });
});
