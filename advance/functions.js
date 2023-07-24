// 1️⃣Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

const generateSecreteCode = (str) => {
  let generatedCode = "";
  // console.log(str.charCodeAt(0))
  for (let i = 0; i < str.length; i++) {
    const asciiVal = str.charCodeAt(i);
    const updatedChar = String.fromCharCode(asciiVal + 2)
    generatedCode = generatedCode + updatedChar;
  }
  return generatedCode
}

console.log(generateSecreteCode("neogcamp"))



// 2️⃣Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers


// Capitalize first letter of each letter in a sentence
function capitalize(sentence) {
  let words = sentence.split(" ");
  // we take is to split the sentence into an array of words. 
  //So we can manipulate each word individually.
  // the variable words is assigned an array with each word from the sentence. The array is as follows ["we", "are", "neoGrammers"]
  console.log(words);

  //🛑
  // Now we will loop over the array of words and capitalize the first letter of each word.
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1)
  }
  // In the above code, every word is taken separately. Then it capitalizes the first letter, and in the end, it concatenates the capitalized first letter with the rest of the string.
  // E.G If we take "neogCamp" as an example,
  // it looks like this neogCamp = N + eogCamp
  console.log(words)

  // 🛑
  //  Now we'll join all the words to form a sentence.
  // In JavaScript, we have a method called join, which we can use to return an array as a string. 
  let capitalizeString = words.join(" ");
  return capitalizeString;

  //In the above code snippet, we can see the join method in action. We call it on the words array, and we specify the separator, which in our case is a space.

  // Therefore, [ 'We', 'Are', 'NeoGrammers' ] becomes "We Are NeoGrammers"
}

// console.log(capitalize("we are neoGrammers"))


//WHAT SUBSTR METHOD DOES
/*let text = "Hello world!";
let result = text.substr(1, 4);
console.log(result);
OUTPUT => ello

The substr() method extracts a part of a string.

The substr() method begins at a specified position, and returns a specified number of characters.

The substr() method does not change the original string.
*/

const getCapitalized = (sentence) => {
  const allWords = sentence.split(" ");

  for (let i = 0; i < allWords.length; i++) {
    let capitalizeWord = allWords[i][0].toUpperCase() + allWords[i].slice(1, allWords[i].length);

    allWords[i] = capitalizeWord
  }
  return allWords.join(" ")
}

console.log(getCapitalized("we are neoGrammers"))


// 3️⃣Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

function ascendingArr(arr) {
  return arr.sort((a, b) => a - b);
}
// console.log(ascendingArr([100, 83, 32, 9, 45, 61]));


// 4️⃣Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen   
function reverseCharactersOfWord(str) {
  return console.log(str.split("").reverse().join("").split(" ").reverse().join(" "))
}
reverseCharactersOfWord("we are neoGrammers")

/*
    1. str.split("")
    => [
  'w', 'e', ' ', 'a', 'r',
  'e', ' ', 'n', 'e', 'o',
  'G', 'r', 'a', 'm', 'm',
  'e', 'r', 's'
]

2. str.split("").reverse()
=> [
  's', 'r', 'e', 'm', 'm',
  'a', 'r', 'G', 'o', 'e',
  'n', ' ', 'e', 'r', 'a',
  ' ', 'e', 'w'
]

3. str.split("").reverse().join("")
=> sremmarGoen era ew


4. str.split("").reverse().join("").split(" ")
=> [ 'sremmarGoen', 'era', 'ew' ]


5. str.split("").reverse().join("").split(" ").reverse()
=> [ 'ew', 'era', 'sremmarGoen' ]

6. str.split("").reverse().join("").split(" ").reverse().join(" ")
=> ew era sremmarGoen



*/

/*function reverseSentence(str) {
    return console.log(str.split("").reverse().join("").split("").join("").split(" ").reverse().join(" "))
}
reverseSentence("I am yash") */

function reverseStr(string) {
  return console.log(string.split("").reverse().join("").split(" ").reverse().join(" "))
}
reverseStr("yash purkar")

const reverseCharactersOfWord = (sentence) => {
  const arrOfWords = sentence.split(" ");
  let newSentence = "";

  for (let i = 0; i < arrOfWords.length; i++) {
    const reverseSingleWord = arrOfWords[i].split("").reverse("").join("");
    newSentence += reverseSingleWord + " ";
  }

  return newSentence;
}

console.log(reverseCharactersOfWord('we are neoGrammers'))