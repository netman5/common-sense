// This solution works if the array contains a string or a number.

function hasDuplicateValue(array) {
  let hashTable = {};
  let steps = 0;

  for (let i = 0; i < array.length; i++) {
    if (hashTable[array[i]] !== undefined) {
      return true;
    } else {
      steps++
      hashTable[array[i]] = i;

    }
  }
  return false;
}

hasDuplicateValue([1, 2, 'orange', 3, 4, 5, 3, 6])