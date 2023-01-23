//1️⃣ Given a and b, your function should return the value of a power b
// Example:
// Input: power(2,3) ––> Output: 8  // 2*2*2 =8

/*function power(a, b) { //2,3
  let pw = 1; //1
  for (let i = 1; i <= b; i++) { //1<=3 T| 2<=3 T| 3<=3 T|  4<=3 F
    pw = a * pw //pw=2*1=2| pw=2*2=4|  pw=2*4=8
  }
  return `${a} power ${b} is ${pw}` //now 8 is the value of pw.
}
console.log(power(2, 3));*/

// 2️⃣Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80
// regular hexagon means A hexaon having equal sides and equal interior angles is called regular hexagon.
// Formula is  6 * √3/4 * a square /2
/*function areaOfHexagon(a) {
  let area = 6 * Math.sqrt(3 / 4) * (a * a) / 2
  return `Area of hexagon is ${area.toFixed(2)}`;
}
console.log(areaOfHexagon(10));*/


// 3️⃣Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

/*function noOfWords(sentence) {
  let splitArr = sentence.split(" ");
  console.log(splitArr)
  return splitArr.length;
}

console.log(noOfWords("We are neoGrammers"));*/



// 4️⃣Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript);

/*function findMin(...numbers) {
  // console.log(numbers) //[5,4,1,3,2];
  let min = numbers[0];//5Default
  for (let i = 1; i < numbers.length; i++) {//1<5T|2<5T|3<5T|4<5T|5<5F -> return min
    if (numbers[i] < min) { //4<5T|1<4T|3<1F|2<1F
      min = numbers[i]; //min = 4, min=1, min=1, min,1
    }
  }
  return min; //1
}
console.log(findMin(5, 4, 1, 3, 2))*/



// 5️⃣Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

/*function findMax(...numbers) {
  // console.log(numbers); [1,2,22,33,9]
  let max = numbers[0]; //1Default

  for (let i = 1; i < numbers.length; i++) {//1<5T|2<5T|3<5T|4<5T|5<5F -> return
    if (numbers[i] > max) {//2>1T|22>2T|33>22T|9>33F
      max = numbers[i];//max=2|max=22|max=33|max=33
    }
  }
  return max; //33
}

console.log(findMax(1, 2, 22, 33, 9));*/


// 6️⃣Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

// scalene triangle means = All three sides are in different lengths, and all three angles are different measures , however the sum of all the interior angles is always equal to 180 degree.

// isosceles triangle means = Two sides of equal length, and sum of all angles is 180D

// equilateral triangle means = All sides are equal in length
// solution 1
function typeOfTriangle1(a, b, c) {
  let sum = a + b + c;
  if (sum === 180) {
    if (a == b && a == c && b == a && b == c) {
      return "Equilateral Triangle";
    }
    else if (a == b || a == c || b == a || b == c) {
      return 'Isosceles Triangle'
    }
    else {
      return "Scalene Triangle";
    }
  }
  else {
    return "It's not forms a Triangle"
  }
}


// solution2
const typeOfTriangle = (a, b, c) => {
  sumOfAngles = a + b + c;
  if (sumOfAngles === 180) {
    if (a === b && b === c) {
      return "This is an equilateral triangle :D"
    } else if (a === 90 || b === 90 || c === 90) {
      return "This is an right-angled triangle :O"
    } else if (a === b || b === c || c === a) {
      return "This is an isosceles triangle XD"
    }
  } else {
    return "Not a Triangle :p"
  }
}

console.log(typeOfTriangle1(120, 40, 20))
console.log(typeOfTriangle(60, 60, 60))