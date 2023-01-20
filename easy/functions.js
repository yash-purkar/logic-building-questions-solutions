//1️⃣ Given a and b, your function should return the value of a power b
// Example:
// Input: power(2,3) ––> Output: 8  // 2*2*2 =8

function power(a, b) { //2,3
  let pw = 1; //1
  for (let i = 1; i <= b; i++) { //1<=3 T| 2<=3 T| 3<=3 T|  4<=3 F
    pw = a * pw //pw=2*1=2| pw=2*2=4|  pw=2*4=8
  }
  return `${a} power ${b} is ${pw}` //now 8 is the value of pw.
}
console.log(power(2, 3));

// 2️⃣Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80
// regular hexagon means A hexaon having equal sides and equal interior angles is called regular hexagon.
// Formula is  6 * √3/4 * a square /2
function areaOfHexagon(a) {
  let area = 6 * Math.sqrt(3 / 4) * (a * a) / 2
  return `Area of hexagon is ${area.toFixed(2)}`;
}
console.log(areaOfHexagon(10))


// 3️⃣Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

function noOfWords(sentence) {
  let splitArr = sentence.split(" ");
  console.log(splitArr)
  return splitArr.length;
}

console.log(noOfWords("We are neoGrammers"));








// 4️⃣Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

// 5️⃣Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

// 6️⃣Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
