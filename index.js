function hasTargetSum(array, target) {
  // Create a Set to store numbers we've checked
  let seenNumbers = new Set();

  // Loop through each number in the array
  for (let num of array) {
    // Calculate the complement number that would add up to the target sum
    const complement = target - num;

    // If the complement exists in our Set, we've found a pair that sums up to the target
    if (seenNumbers.has(complement)) {
      return true;
    }

    // If not, add this number to the Set and continue
    seenNumbers.add(num);
  }

  // If we finish the loop without finding a pair, return false
  return false;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
