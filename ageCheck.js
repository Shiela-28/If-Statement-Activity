// Prompt the user to enter their age.
let age = prompt("Enter your age:"); //The prompt function is used to get input from the user.

// Check the age and display the appropriate message.
if (age < 13) { //If the age is less than 13, the user is considered a child.
  console.log("You are a child."); 
} else if (age >= 13 && age <= 19) { //If the age is between 13 and 19 (inclusive), the user is considered a teenager.
  console.log("You are a teenager."); 
} else { //If the age is greater than 19, the user is considered an adult.
  console.log("You are an adult."); 
}