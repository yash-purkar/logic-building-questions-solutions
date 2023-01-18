// Intermediate

// 1️⃣ Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// solution 1
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
// solution1
/*for (let i = 0; i < 5; i++) { // rows
  for (let j = 0; j <= i; j++) { //columns
    document.write("*");
  }
  document.write("<br/>");
}*/

/*
solution 2
let str =""; //""
for(let i=0; i<5;i++) {//row 0<5  1<5
    for(let j=0; j<=i ; j++){ //0<=0 * 1<=1 t*
        str+="*"
    }
    str+="\n";
}

console.log(str);
*/

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





// 4️⃣ Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

function fibonacciSeries(num) { //upto index 10 of result array
  let a = 0; let b = 1; let result = [];
  let c;
  result.push(a, b); //result[0,1]
  while (result.length < num) { //2<10 Tr | 3<10 Tr
    c = a + b; // c=0+1=1 | c=1+1=2
    result.push(c); //result[0,1,1] | result[0,1,1,2]

    a = b; // a = 1 | a = 1
    b = c; // b= 1 | b =2     and so on
  }
  return result;
}
console.log(fibonacciSeries(10));



// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120
// factorial means => 5 × 4 × 3 × 2 × 1 = 120.
// n = 5*4*3*2*1

function factorial(n) { //5
  let fact = 1;
  for (let i = n; i >= 1; i--) {//5>=1 T|4>=1 T|3>=1 T|2>=1 T|1>=1 T| 0>=1 F ->return
    fact = fact * i;//fact=1*5=5|fact=5*4=20|fact=20*3=60|fact=60*2=120|fact=120*1=120
  }
  return `Factorial of ${n} is ${fact}`;
}
console.log(factorial(5));
/*I took 1 in fact bcz If I take 0 here then 1*0=0, 2*0=0 we don't want that so we took 1.
//     //another reason for 1st time we want to multiply the "n" by 1 so n will be still n. suppose n is 5 then 1st it will 1*5=5 so then I can multiply next number 5*4 ......*/


// Write a Program to take a number input from user and find if the number is Prime or not.

// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.


