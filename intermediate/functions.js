// 1️⃣Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

/*function lengthOfArr(arr) {
  let ln = arr.length;
  console.log(ln);
}
lengthOfArr([1, 5, 3, 7, 8]);*/


// 2️⃣Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

/*function findIndex(arr, elem) {
  let index = arr.indexOf(elem);
  console.log(index);
}
findIndex([1, 6, 3, 5, 8, 9], 3);*/
// indexOf returns -1 if element is not present in an array.

// 3️⃣ Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

// console.log(replaceElems([1, 5, 3, 5, 6, 8], 5, 10))
// [1,10,3,10,6,8]
/*function replaceElems(arr, num1, num2) {

  let newArr = arr.map(function (elem) {
    if (elem === num1) { //1===5 F | 5===5 T | 3==5F | 5===5T |6===5F | 8===5F
      return num2 // [1,10] [1,10,3,10]
    }
    else {
      return elem  //[1] [1,10,3] [1,10,3,10,6], [1,10,3,10,6,8];
    }
  })
  return newArr;
  //The map() method will check the condition e.g elem===num1 i.e 5===5 True , then it will return the num2 i.e 10.  Map method returns the new array, It calls the callback function on every element of an array.


  // With For Loop
  /*for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num1) {
        arr[i] = num2;
      }
    }
    return arr;

}
console.log(replaceElems([1, 5, 3, 5, 6, 8], 5, 10))*/



// 4️⃣Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

// Solution1
/*function mergeArray(arr1, arr2) {
  let mergedArr = arr1.concat(arr2);
  return mergedArr;
}*/

// Solution2
/*function mergeArray(arr1, arr2) {
  return [...arr1, ...arr2]
}*/

// console.log(mergeArray([1, 3, 5], [2, 4, 6]));


// 5️⃣Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c

// Solution 1
function findChar(str, ind) {
  return str.charAt(ind)
}

// Solution2
function findChar(str, ind) {
  if (str[ind]) {
    return str[ind]
  }
  else return "Unvalid ID"
}
console.log(findChar("neoGcamp", 6));



// 6️⃣Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021