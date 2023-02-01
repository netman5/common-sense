function insertionSort(arr) {

  for (let index = 1; index < arr.length; index++) {
    let tempValue = arr[index]
    let pos = index

    while (pos > 0 && arr[pos - 1] > tempValue) {
      arr[pos] = arr[pos - 1]
      pos = pos - 1

      arr[pos] = tempValue
    }
  }

  return arr;
}

console.log(insertionSort([4, 2, 7, 1, 3]));