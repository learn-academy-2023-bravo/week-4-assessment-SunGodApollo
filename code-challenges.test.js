// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffleArray", () => {
  it("takes in an array, removes first item, and shuffles the remaining content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    
  })
})

// FAIL  ./code-challenges.test.js
// shuffleArray
//   ✕ takes in an array, removes first item, and shuffles the remaining content (1 ms)

// ● shuffleArray › takes in an array, removes first item, and shuffles the remaining content

//   ReferenceError: shuffleArray is not defined


// b) Create the function that makes the test pass.
/* PSEUDOCODE
  input: an array
  process: 
    create a function to shuffle the array named shuffleArray
    create a variable slicedArray that will contain the array sliced at the 1st index.
    create a variable that generates a random number
    use a for loop to iterate through the array in reverse
    use random number variable and swap it with current index in iteration
    put randomized index back into array
    return randomized array
  output: randomized sliced array
*/

const shuffleArray = (array) => {
  const slicedArray = array.slice(1)
for(let index = slicedArray.length -1; index > 0; index--) {
  const randomIndex = Math.floor(Math.random() * (index + 1)) 
  const temp = slicedArray[index]
  slicedArray[index] = slicedArray[randomIndex]
  slicedArray[randomIndex] = temp
}
return slicedArray
}

// PASS  ./code-challenges.test.js
// shuffleArray
//   ✓ takes in an array, removes first item, and shuffles the remaining content (3 ms)




// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("voteTally", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    expect(voteTally(votes1)).toEqual((11))
    expect(voteTally(votes2)).toEqual((-31))
  })
})

// FAIL  ./code-challenges.test.js
// shuffleArray
//   ✓ takes in an array, removes first item, and shuffles the remaining content (2 ms)
// voteTally
//   ✕ takes in an object that contains up votes and down votes and returns the end tally (1 ms)

// ● voteTally › takes in an object that contains up votes and down votes and returns the end tally

//   ReferenceError: voteTally is not defined



// b) Create the function that makes the test pass.
// PSEUDOCODE
/*
 create a function called voteTally
 input: object
 process:
  - create variable called endTally that stores the sum of the tallies
  - iterate over the object's keys with a for..in loop. 
    - if the object's key = "upVotes", add to endTally
    - if the object's key = "downVotes", subtract from endTally
  output: final tally returned in endTally variable, which has keys of object summed.
*/
const voteTally = (object) => {
  let endTally = 0
  for(let key in object) {
    if(key === "upVotes") {
      endTally += object[key]
    } else if(key === "downVotes") {
      endTally -= object[key]
    }
  }
  return endTally
}

// PASS  ./code-challenges.test.js
// shuffleArray
//   ✓ takes in an array, removes first item, and shuffles the remaining content (3 ms)
// voteTally
//   ✓ takes in an object that contains up votes and down votes and returns the end tally (1 ms)





// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("noDuplicates", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(noDuplicates(dataArray1, dataArray2)).toEqual((["array", "object", "number", "string", "Boolean", "null", "undefined"]))
  })
})

// FAIL  ./code-challenges.test.js
// shuffleArray
//   ✓ takes in an array, removes first item, and shuffles the remaining content (3 ms)
// voteTally
//   ✓ takes in an object that contains up votes and down votes and returns the end tally (1 ms)
// noDuplicates
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)

// ● noDuplicates › takes in two arrays as arguments and returns one array with no duplicate values

//   ReferenceError: noDuplicates is not defined



// b) Create the function that makes the test pass.
// PSEUDOCODE
/*
  create a function called noDuplicates
  input: two arrays
  proces: 
    - combine the two arrays using the concat method, set to new variable concatArr
    - loop over concatArr using .filter method to filter any like strings
  output: single array with duplicates removed
*/

const noDuplicates = (array1, array2) => {
  const concatArr = array1.concat(array2)
  return concatArr.filter((string, index) => {
    return concatArr.indexOf(string) === index
  })
}

// PASS  ./code-challenges.test.js
// shuffleArray
//   ✓ takes in an array, removes first item, and shuffles the remaining content (3 ms)
// voteTally
//   ✓ takes in an object that contains up votes and down votes and returns the end tally (1 ms)
// noDuplicates
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)