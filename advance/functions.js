// 1️⃣Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

// Not solved

/*function getSecretCode(str, n) {
  // console.log(str.split(""))
  // console.log(str.charCodeAt(5))
  let asciiNums = []; let characters = ""
  for (let i = 0; i < str.length; i++) {
    asciiNums.push(str.charCodeAt(i));
    characters += String.fromCharCode(i)
  }
  // console.log(asciiNums);
  console.log(characters)
  // let characters = String.fromCharCode(...asciiNums);
  // console.log(characters)
}
getSecretCode("Yash");*/



// 2️⃣Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

//Capitalize word
function capitalize(sentence) {
  let low = sentence.toLowerCase();
  let cap = sentence.charAt(0).toUpperCase() + low.slice(1, sentence.length)
  console.log(cap);
}
capitalize("yash"); // => Yash
// slice()
/*
slice(indexStart)
slice(indexStart, indexEnd)

indexStart
The index of the first character to include in the returned substring.

indexEnd Optional
The index of the first character to exclude from the returned substring.
*/


// 3️⃣Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

// 4️⃣Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen