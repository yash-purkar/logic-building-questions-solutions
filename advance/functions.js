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

console.log(capitalize("we are neoGrammers"))


//WHAT SUBSTR METHOD DOES
/*let text = "Hello world!";
let result = text.substr(1, 4);
console.log(result);
OUTPUT => ello

The substr() method extracts a part of a string.

The substr() method begins at a specified position, and returns a specified number of characters.

The substr() method does not change the original string.
*/




// 3️⃣Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

// 4️⃣Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen