// an npm package to take inputs via console
const readlineSync = require('readline-sync');


// 1️⃣Write a program to input 2 numbers and display the sum of the numbers to the console.
const sum = () => {
  let num1 = Number(readlineSync.question("Enter first number : "));
  let num2 = Number(readlineSync.question("Enter second number : "));
  console.log(`Sum : ${num1 + num2}`);
}
sum();


// 2️⃣ /*Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest
// Input: P=100, R=6%, T=2
// Output: 12 

let calculateSI = () => {
  let P = readlineSync.question("Enter principal amount : ");
  let T = readlineSync.question("Enter Time(in years) : ");
  let R = readlineSync.question("Enter rate or intrest(percent) : ");
  let SI = (P * T * R) / 100;
  console.log(`SI = ${SI}`)
}
calculateSI();


// 3️⃣  Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.
// Formula : 0.5 * m * v * v
const calculateKineticEnergy = () => {
  let M = readlineSync.question("Enter mass : ");
  let V = readlineSync.question("Enter volume : ");
  let kEnergy = 0.5 * M * V * V;
  console.log(`Energy is : ${kEnergy}`)
}
calculateKineticEnergy();