// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");
const lastName = getInput(1);
const firstName = getInput(0);
const wholeName = firstName + " " + lastName;
const capFirstName = firstName.toUpperCase();
const capLastName = lastName.toUpperCase();
const lowFirstName = firstName.toLowerCase();
const lowLastName = lastName.toLowerCase();

// 1. Say hi to the user in whatever style I want.
console.log("Hi " + firstName + " " + lastName + "!");

// 2. Give them their name capitalized preferably with built in string sentence telling them what I am doing.
console.log("This is your name if you type with caps lock on: " + wholeName.toUpperCase() + ".");

// 3. Print out their initials and tell them what I am doing again.
console.log("These are your initials: " + capFirstName[0] + "." +capLastName[0] + ".")

// 4. Give them their code immersives email address.
console.log("This is your Code Immersives email: " + lowFirstName + "." + lowLastName + "@codeimmersives.com");