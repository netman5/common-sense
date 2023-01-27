function hasDuplateValue(arr) {
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      steps++
      if (i !== j && arr[i] === arr[j]) {
        return true
      }
    }
  }
  console.log(steps);
  return false
}

hasDuplateValue([1, 2, 3, 4, 5, 6])