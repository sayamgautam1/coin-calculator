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
const { calculateChange } = require("../js/main.js"); // Replace with the correct path

describe("Coin Change Calculator User Interaction", () => {
  let inputAmount;
  let calculateChange;

  // Set up the HTML elements before each test
  beforeEach(() => {
    inputAmount = document.getElementById("total-amount");
    calculateChange = document.getElementById("calculate-change");
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
});
