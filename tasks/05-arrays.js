// Flattening an Array. Given an array of subarrays, return one flat array.
// Notes
//  don't use flat method.
// Examples
//  flatten([[1, 2], [3, 4]]) ➞ []
//   Expected: [1, 2, 3, 4]
//
// flatten([["a", "b"], ["c", "d"]]) ➞ []
//   Expected: ["a", "b", "c", "d"]
//
// flatten([[true, false], [false, false]]) ➞ []
//   Expected: [true, false, false, false]
function flatten(arr) {
  return arr[0].concat(arr[1]);
}

// Given an array of women and an array of men, either:
//  Return "sizes don't match" if the two arrays have different sizes.
//  If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.
// Examples
//  zipIt(["Elise", "Mary"], ["John", "Rick"])
//    ➞ [["Elise", "John"], ["Mary", "Rick"]]
//
//  zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])
//    ➞ "sizes don't match"
//
//  zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
//    ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]
function zipIt(womenArr, menArr) {
  if(womenArr.length !== menArr.length) return "sizes don't match";
  const arr = [];
  for(let i=0; i<womenArr.length ; i++){
    arr.push([womenArr[i], menArr[i]]);
  }
  return arr;
}

// Create a function that takes an array of items, removes all duplicate items and returns a new
//  array in the same sequential order as the old array (minus duplicates).
// Examples
//  removeDups([1, 0, 1, 0]) ➞ [1, 0]
//  removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
//  removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]
function removeDups(arr) {
  return [...new Set(arr)];
}

// Given an array containing an array containing an array containing... an array containing nothing.
// Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.
// Examples
//  measureDepth([]) ➞ 1
//  measureDepth([[]]) ➞ 2
//  measureDepth([[[]]]) ➞ 3
//  measureDepth([[[[[[[[[[[]]]]]]]]]]]) ➞ 11
// Notes
//  For a bonus challenge, try to find a solution without recursion.
function measureDepth(arr) {
  let i = 0;
  while(arr.length){
    i++;
    arr = arr.reduce( (level, el) => {
      if(Array.isArray(el)) level.push(...el);
      return level;
    }, []);
  }
  return i+1;
}

// Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
// Examples
//  sumTwoSmallestNums([19, 5, 42, 2, 77]) ➞ 7
//  sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) ➞ 3453455
//  sumTwoSmallestNums([2, 9, 6, -1]) ➞ 8
//  sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ➞ 563
//  sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) ➞ 4519
// Notes
//  Don't count negative numbers.
//  Floats and empty arrays will not be used in any of the test cases.
function sumTwoSmallestNums(arr) {
  // eslint-disable-next-line max-len
  return arr.sort( (a, b) => a-b).slice( 0, 2).reduce((acum, elem) =>  acum +=elem);
}

// Create a function that takes a number and returns an array with the digits of the number in reverse order.
// Examples
//  reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]
//  reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]
//  reverseArr(12345) ➞ [5, 4, 3, 2, 1]
function reverseArr(number) {
  return `${number}`.split('').reverse().map(elem => +elem);
}

// Create a function that takes an array and returns the sum of all items in the array.
// Examples
//  sumArray([1, 2, 3]) ➞ 6
//    1 + 2 + 3 = 6
//
//  sumArray([1, [2, [1]], 3]) ➞ 7
//    1 + 2 + 1 + 3 = 7
// Notes
//  The item in an array can be another array.
function sumArray(arr) {
  return arr.flat(Infinity).reduce((acum, elem) => acum +=elem, 0);
}

// Create a function that returns only strings with unique characters.
// Examples
//  filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) ➞ ["abc"]
//    "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.
//  filterUnique(["88", "999", "989", "9988", "9898"]) ➞ []
//  filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) ➞ ["ABCDE", "BED", "BAC"]
function filterUnique(arr) {
  return arr.reduce((acum, elem, index) =>{
    if(elem.length === new Set([...elem]).size) acum.push(elem); 
    return acum;
  }, []);
}

// Write a function that takes three arguments (x, y, z)
// and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.
// Examples
//  matrix(3, 2, 3) ➞ [[3, 3], [3, 3], [3, 3]]
//  matrix(2, 1, "edabit") ➞ [["edabit"], ["edabit"]]
//  matrix(3, 2, 0) ➞ [[0, 0], [0, 0], [0, 0]]
// Notes
//  The first two arguments will always be integers.
//  The third argument is either a string or an integer.
function matrix(x, y, z) {
  const arr = [];
  for(let i =0 ; i<x ; i++){
    arr.push([]);
  }
  arr.map (elem =>{
    for(let i =0 ; i< y ; i++){
      elem.push(z);
    }
  });
  return arr;
}

// Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.
// Examples
//  miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]) ➞ [5, 9]
//   5 has neighbours 4 and 2, both are less than 5.
//  miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]) ➞ [2, 3, 5]
//  miniPeaks([1, 2, 3, 4, 5, 6]) ➞ []
function miniPeaks(arr) {
  const sumArr = [];
  arr.reduce((acum, elem, index) =>{
    if(elem > arr[index+1] && elem > arr[index-1]) sumArr.push(elem);
  }, []);
  return sumArr;
}

module.exports = {
  flatten,
  zipIt,
  removeDups,
  measureDepth,
  sumTwoSmallestNums,
  reverseArr,
  sumArray,
  filterUnique,
  matrix,
  miniPeaks
};
