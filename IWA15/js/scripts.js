// Create an object with nested arrays containing some data.
const data = {
  lists: [
    ['first', [15, 11, 13, 7, 5]],
    ['second', [2, 6, 8, 4, 14, 12, 10]],
    ['third', [9, 3, 1]],
  ]
}

// Only edit below
// Extract each of the three arrays into separate variables for easier access
const first = data.lists[0][1]
const second = data.lists[1][1]
const third = data.lists[2][1]

// Create an empty array to store the result of the algorithm
const result = []

// Define a function that extracts and returns the largest number from the end of one of the three arrays
const extractBiggest = () => {
  // Find the last element of each array, or -Infinity if the array is empty
  const lastOfFirst = first[first.length - 1] || -Infinity
  const lastOfSecond = second[second.length - 1] || -Infinity
  const lastOfThird = third[third.length - 1] || -Infinity

  // Compare the three last elements and return the largest one
  if (lastOfFirst >= lastOfSecond && lastOfFirst >= lastOfThird) {
    return first.pop()
  }

  if (lastOfSecond >= lastOfFirst && lastOfSecond >= lastOfThird) {
    return second.pop()
  }

  return third.pop()
}

// Only edit above
// Call the 'extractBiggest' function 15 times and store the results in the 'result' array
for (let i = 0; i < 15; i++) {
  result.push(extractBiggest())
}

console.log(result)
