// Intermediate

// 1️⃣ Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

/*let numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
  if (i % 3 === 0 && i % 5 === 0) {
    numbers[i - 1] = "FizzBuzz"
  }
  else if (i % 3 === 0) {
    numbers[i - 1] = "Fizz";
  }
  else if (i % 5 === 0) {
    numbers[i - 1] = "Buzz";
  }
}

// solution2
let numbers=[];
for(let i=1; i<=100; i++) {
  
  if(i%3 ==0 && i%5 ==0) {
      numbers.push("FizzBuzz")
  }
  else if(i%3 ==0 ){
      numbers.push("Fizz")
  }
  else if(i%5==0) {
      numbers.push("Buzz")
  }
  else{
      numbers.push(i);
  }
}

console.log(numbers);

console.log(numbers);*/
// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....


// 2️⃣ Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *
/*for (let i = 0; i < 5; i++) { // rows
  for (let j = 0; j <= i; j++) { //columns
    document.write("*");
  }
  document.write("<br/>");
}*/


// 3️⃣ Write a program to take a number input from user and print multiplication table 12 times for that number.

/*const multiplication = (n) => {
  for (let i = 1; i <= 12; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(n * j);
    }
    console.log("\n");
  }
}
multiplication(5);*/





// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

// Write a Program to take a number input from user and find if the number is Prime or not.

// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.


// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

let numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}

