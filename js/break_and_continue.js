// Break and Continue
//
// Create a file named break_and_continue.js in the js directory.
//     Prompt the user for an odd number between 1 and 50. Use a loop
//     and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers
// between 1 and 50, except for the number the user entered.

var input = prompt("Please enter an odd number between 1 and 50:");

while (input < 1 || input > 50 || input%2===0) {
    input = prompt("Your first entry was invalid, please enter an odd number between 1 and 50: ");
}