//-------------------------Variables-------------------------

let myName = "Areeb"; // Declaring a variable named 'myName' and assigning the value "Areeb"
let ageVariable = 17; // Declaring a variable named 'age' and assigning the value 17
console.log(myName); // Printing my name value
console.log(ageVariable); // Printing my age value

//-------------------------Data Types-------------------------

let person = {
  myName: "Areeb", // Data type string
  age: 17, // Data type number
  isMale: true, // Data type bolean
};

//-------------------------Arrays-------------------------

// "[]" is the sign that its an array
let fruitsArray = ["Banana", "Apple", "Orange", "Grappes"];
console.log(fruitsArray[0]); // For consoling index number 0 in this it's an banana
console.log(fruitsArray[2]); // For consoling index number 0 in this it's an Orange

//-------------------------Arithmetic Operators-------------------------

//Addition (+): Adds two numbers. x + y
// For Example
let a = 10;
let b = 10;
let totalValue = a + b;
console.log(totalValue);

// Subtraction (-): Subtracts one number from another.
// For Example
let subtractionValue = totalValue - a;
console.log(subtractionValue);

// Multiplication (*): Multiplies two numbers.
// For Example
let multiplicationValue = subtractionValue * a;
console.log(multiplicationValue);

// Division (/): Divides one number by another.
// For Example
let divisionValue = multiplicationValue / a;
console.log(divisionValue);

// Modulus (%): Returns the remainder after division.
// For Example
let modulusValue = multiplicationValue / a;
console.log(divisionValue);

//-------------------------Comparison Operators-------------------------

// Equal to (==): Checks if two values are equal. x == y (e.g., 5 == 5 is true, 5 == 3 is false).

// Not equal to (!=): Checks if two values are not equal. x != y (opposite of ==).

// Greater than (>): Checks if one value is greater than another. x > y (e.g., 7 > 3 is true).

// Less than (<): Checks if one value is less than another. x < y (e.g., 2 < 5 is true).

// Greater than or equal to (>=): Checks if one value is greater than or equal to another. x >= y (combines > and ==).

// Less than or equal to (<=): Checks if one value is less than or equal to another. x <= y (combines < and ==).

//-------------------------Logical Operators-------------------------

// AND (&&): Returns true if both operands are true, otherwise false. x > 0 && y < 10 (both conditions must be true).

// OR (||): Returns true if at least one operand is true, otherwise false. x > 0 || y < 10 (either condition can be true).

// NOT (!): Negates the operand. ! (x > 0) (inverts the truth value).

//-------------------------Assignment Operators-------------------------

// Simple Assignment (=): Assigns the value on the right to the variable on the left. x = 10.

// Addition Assignment (+=): Adds the right operand to the variable and assigns the result back to the variable. x += 5 (equivalent to x = x + 5).

// Subtraction Assignment (-=): Subtracts the right operand from the variable and assigns the result back. y -= 2 (equivalent to y = y - 2).

// Multiplication Assignment (*=): Multiplies the right operand with the variable and assigns the result back. z *= 3 (equivalent to z = z * 3).

// Division Assignment (/=): Divides the variable by the right operand and assigns the result back. a /= 4 (equivalent to a = a / 4).

// Modulus Assignment (%=): Assigns the remainder after dividing the variable by the right operand. b %= 7 (equivalent to b = b % 7).

//-------------------------Conditional Statements-------------------------

//-------------------------if-else-------------------------

const age = 17;
let eligible = "You are eligible to vote"
let notEligible = "You are not eligible to vote"
if (age >= 18) {
  console.log(eligible);
} else {
  console.log(notEligible);
}

//-------------------------if-else-------------------------

let grade = "C"
if (grade === "A") {
  console.log("You got A grade!");
} else if (grade === "B") {
  console.log("You got B grade!")
} else if (grade === "C") {
  console.log("You got C grade!");
} else {
  console.log("Try Next Year");
}

//-------------------------Loops-------------------------

//------------------------- For loop-------------------------

for (let i = 1; i < 11; i++) {
  console.log("Loops on runing", i);
}

