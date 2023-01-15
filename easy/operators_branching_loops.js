// 1️⃣ Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
/*let num1 = 5;
let num2 = 13;
let num3 = 7;
let num4 = 21;
let num5 = 48;

function addNmbers(...numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum = sum + number;
  })
  return sum;
}
console.log(addNmbers(num1, num2, num3, num4, num5));*/

// 2️⃣ Write a program to take a number input from user and determine whether the number is odd or even.
/*const oddOrEven = (num) => {
  if (num % 2 === 0) {
    return "Number is even";
  }
  return "Number is odd"
}

console.log(oddOrEven(10));*/

//3️⃣ Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

/*const minMax = (num1, num2) => {
  if (num1 > num2) return `${num1} is greater than ${num2}`
  else if (num1 === num2) return `${num1} and ${num2} are equals`
  else return `${num2} is greater than ${num1}`;
}
console.log(minMax(15, 5));*/

// 4️⃣ Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
/*const max = (num1, num2, num3) => {

  if (num1 > num2 && num1 > num3) {
    return num1 + " is Maximum number";
  }
  else if (num2 > num1 && num2 > num3) {
    return num2 + " is Maximum number";
  }
  else {
    return num3 + " is Maximum number";
  }
}
console.log(max(8,23,17));*/


// 5️⃣ Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

/*const min = (num1, num2, num3) => {
  if (num1 < num2 && num1 < num3) {
    return num1 + " is minimum"
  }
  else if (num2 < num1 && num2 < num3) {
    return num2 + " is minumum"
  }
  else {
    return num3 + " is minimum"
  }
}

console.log(min(3, 29, 1));*/

// 6️⃣ Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const daysCounter = (month) => {
  let lMonth = month.toLowerCase();
  if (lMonth === "january" || lMonth === "march" || lMonth === "may" || lMonth === "july" || lMonth === "august" || lMonth === "octomber" || lMonth === "december") {
    return month + " has 31 Days";
  }
  else if (month === "february") {
    return month + " has 28 Days";
  }
  else {
    return month + " has 30 Days";
  }
}

let check = daysCounter("march");
console.log(check);



// Intermediate
// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

// Write a program to take a number input from user and print multiplication table 12 times for that number.

// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

// Write a Program to take a number input from user and find if the number is Prime or not.

// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.