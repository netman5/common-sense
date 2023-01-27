function hasDuplateValue(arr) {
  let steps = 0;
  existingNumbers = []
  for (let i = 0; i < arr.length; i++) {
    steps++
    if (existingNumbers[arr[i]] === undefined) {
      existingNumbers[arr[i]] = 1
    } else {
      return true
    }
  }
  console.log(steps);
  return false;
}

hasDuplateValue([1, 2, 3, 4, 5, 6])