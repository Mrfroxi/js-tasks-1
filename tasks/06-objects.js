// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
//
// Examples
//  toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
//  toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
//  toArray({}) ➞ []
// Notes
//  Return an empty array if the object is empty.
function toArray(obj) {
  return Object.entries(obj);
}

// Create the function that takes an array with objects and returns the sum of people's budgets.
//
// Examples
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700
// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600
function getBudgets(arr) {
  let sum = 0;
  arr.forEach( (elem, index) =>{
    sum +=  elem.budget;
  });
  return sum;
}

// Create a function to check whether the given parameter is an Object or not.
//
// Examples
//  isObject(function add(x,y) {return x + y}) ➞ true
//  isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')) ➞ true
//  isObject(null) ➞ false
//  isObject("") ➞ false

// Notes
//  Inputs may be null, primitive wrapper types, dates.
function isObject(value) {
   return typeof value === 'object' && value !== null
}

// Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.
//
//   const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
//   "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
//   "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
//   "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}
//
// Return your result as per the following rules:
//   score <= 60:   "NOT TOO GOOD"
//   61 <= score <= 300:  "PRETTY GOOD"
//   301 <= score <= 599:  "VERY GOOD"
//   score >= 600:  "THE BEST"

// Examples
//  nameScore("MUBASHIR") ➞ "THE BEST"
//  nameScore("YOU") ➞ "VERY GOOD"
//  nameScore("MATT") ➞ "THE BEST"
//  nameScore("PUBG") ➞ "NOT TOO GOOD"
// const scores = {'A': 100, 'B': 14, 'C': 9, 'D': 28, 'E': 145, 'F': 12, 'G': 3,
//   'H': 10, 'I': 200, 'J': 100, 'K': 114, 'L': 100, 'M': 25,
//   'N': 450, 'O': 80, 'P': 2, 'Q': 12, 'R': 400, 'S': 113, 'T': 405,
//   'U': 11, 'V': 10, 'W': 10, 'X': 3, 'Y': 210, 'Z': 23};

function nameScore(name) {
  const scores = {'A': 100, 'B': 14, 'C': 9, 'D': 28, 'E': 145, 'F': 12, 'G': 3,
    'H': 10, 'I': 200, 'J': 100, 'K': 114, 'L': 100, 'M': 25,
    'N': 450, 'O': 80, 'P': 2, 'Q': 12, 'R': 400, 'S': 113,
    'T': 405, 'U': 11, 'V': 10, 'W': 10, 'X': 3, 'Y': 210, 'Z': 23};
    let num =  name.split('').reduce((acum ,elem ) =>{
      return  acum + scores[elem]
    },0)
    if(num <= 60) return "NOT TOO GOOD"
    if(num >= 60 && num <= 300) return "PRETTY GOOD"
    if(301 <= num  && num<= 599)  return "VERY GOOD"
    if(num >= 600 ) return "THE BEST"
}


// Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.
//
// Examples
// afterNYears({
//   "Joel" : 32,
//   "Fred" : 44,
//   "Reginald" : 65,
//   "Susan" : 33,
//   "Julian" : 13
// }, 1) ➞ {
//   "Joel" : 33,
//     "Fred" : 45,
//     "Reginald" : 66,
//     "Susan" : 34,
//     "Julian" : 14
// }
//
// afterNYears({
//   "Baby" : 2,
//   "Child" : 8,
//   "Teenager" : 15,
//   "Adult" : 25,
//   "Elderly" : 71
// }, 19) ➞ {
//   "Baby" : 21,
//     "Child" : 27,
//     "Teenager" : 34,
//     "Adult" : 44,
//     "Elderly" : 90
// }
//
// afterNYears({
//   "Genie" : 1000,
//   "Joe" : 40
// }, 5) ➞ {
//   "Genie" : 1005,
//     "Joe" : 45
// }

// Notes
//  Assume that everyone is immortal (it would be a bit grim if I told you to remove names once they reached 75).
//  n should be a positive number because last time I checked, people don't tend to age backwards. Therefore, use the absolute value of n.
function afterNYears(names, n) {
  n = Math.abs(n)
  for (const value in names) {
    names[value] =  names[value]+n;
  }
  return names;
}
//
// Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.
function isEqual(objOne, objTwo) {
  let objOneValue = Object.values(objOne)
  let objTwoValue =Object.values(objTwo)
  return  objOneValue.reduce(( acum, elem,index) =>{
    if(elem === objTwoValue[index]) acum++
    if(acum === objOneValue.length) return true 
    return false
  },0)
}

// Write a function that inverts the keys and values of an object.
//
// Examples
//  invert({ "z": "q", "w": "f" })
//  ➞ { "q": "z", "f": "w" }
//
//  invert({ "a": 1, "b": 2, "c": 3 })
//  ➞ { 1: "a", 2: "b", 3: "c" }
//
//  invert({ "zebra": "koala", "horse": "camel" })
//  ➞ { "koala": "zebra", "camel": "horse" }
function invert(o) {
  return Object.entries(o).reduce((ret, entry) => {   
    const [ key, value ] = entry;
    ret[ value ] = key;
    return ret;
  }, {});
}

// You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.
// Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".
//
// Examples
// mostExpensive ({
//   "Diamond Earrings": 980,
//   "Gold Watch": 250,
//   "Pearl Necklace": 4650
// }) ➞  "The most expensive one is the Pearl Necklace"
//
// mostExpensive({
//   "Silver Bracelet": 280,
//   "Gemstone Earrings": 180,
//   "Diamond Ring": 3500
// }) ➞ "The most expensive one is the Diamond Ring"

// Notes
//  There will always be at least one item in the object.
//  There will always be only one highest priced item (i.e. there will not be two items with the joint highest value).
function mostExpensive(obj) {
  let valueArr = Object.values(obj)
  let MostExpensive = Math.max.apply(Math ,valueArr );
   let objKeyExpensive = Object.keys(obj).find(key => obj[key] === MostExpensive);
  return `The most expensive one is the ${objKeyExpensive}`
}

// Write a function that transforms an array of characters into an array of objects, where:
// The keys are the characters themselves.
// The values are the ASCII codes of those characters.

// Examples
//  toObj(["a", "b", "c"]) ➞ [{a: 97}, {b: 98}, {c: 99}]
//  toObj(["z"]) ➞ [{z: 122}]
//  toObj([]) ➞ []
function toObj(arr) {
  return arr.reduce((acum, elem, index)=>{
    const obj ={};
    acum.push(obj)
    obj[elem] = elem.charCodeAt(0);  
    return  acum;
  }, []);
}

// In this challenge, you have to find the distance between two points placed on a Cartesian plane. Knowing the coordinates of both the points, you have to apply the Pythagorean theorem to find the distance between them.
// Two points on a Cartesian plane
// Given two object literals a and b being the two points coordinates (x and y), implement a function that returns the distance between the points, rounded to the nearest thousandth.
//
// Examples
//  getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325
//  getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414
//  getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095

// Notes
//  Take a look at the Resources tab if you need a refresher on the geometry related to this challenge.
//  The "distance" is the shortest distance between the two points, or the straight line generated from a to b.
function getDistance(a, b) {
  return Math.sqrt( ( a.x - b.x)**2 + (+a.y - +b.y)**2);
}

module.exports = {
  toArray,
  getBudgets,
  isObject,
  nameScore,
  afterNYears,
  isEqual,
  invert,
  mostExpensive,
  toObj,
  getDistance
};
