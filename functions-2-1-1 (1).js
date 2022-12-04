/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (a, b) => {
  // ADD YOUR CODE HERE
  if(a > b) {
   return  a;
  } else {
    return  b;
  }
};
console.log(maxOfTwoNumbers(10, 7));
//============OR==============

maxOfTwoNumbers = (a, b) => {
let maxOfTwoNumbers = Math.max(a, b);
  return maxOfTwoNumbers;

};
console.log(maxOfTwoNumbers(15, 9));

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (a, b, c) => {
  // ADD YOUR CODE HERE
  if((a > b) && (a > c)){
    return a;
  } else {
    if((b > a) && (b > c)) {
      return b;
    } else {
      return c;
    }
  }
};
console.log(maxOfThree(11, 15, 25));
//=======OR=======

maxOfThree = (a, b, c) => {
let maxOfThree = Math.max(a,b,c);
return maxOfThree;
};
console.log(Math.max(11, 12, 11));


/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (char) => {
  // ADD YOUR CODE HERE
  if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    return "it is a vowel!"
  } else {
    return "it is not a vowel!"
  }

};
console.log(isCharacterAVowel("d"));


/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

sumArray = (arr) => {
  // ADD YOUR CODE HERE
  let sum = 0;
for(let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
};

console.log(sumArray([1, 2, 3, 4]));

multiplyArray = (arr) => {
  // ADD YOUR CODE HERE
  let product = 1;
for(let i = 0; i < arr.length; i++) {
  product *= arr[i];
}
return product;
};
console.log(multiplyArray([1, 2, 3, 4]));

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
function argNum() {
return arguments.length;
};

console.log(argNum(3, 4, 6, 8));

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (str) => {
  // ADD YOUR CODE HERE
return str.split("").reverse("").join("");
};

console.log(reverseString("jag testar"));

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
let words = ['red', 'blue', 'yellow', 'orange', 'purpleblue'];
findLongestWord = (arr) => {
  // ADD YOUR CODE HERE
  let longest = ''
  for(let i = 0; i < arr.length; i++){
    if (longest.length < arr[i].length) {
      longest = arr[i]
    }
  }
return longest.length;
};
console.log(findLongestWord(words)); 

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (arr, i) => {
  // ADD YOUR CODE HERE
  let filtered = []
  for(let j = 0; j < arr.length; j++){
    if (arr[j].length <= i) {
      filtered.push(arr[j])
    }
  }
  return filtered;
};
console.log(filterLongWords(words, 10));
