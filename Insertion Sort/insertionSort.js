function insertionSort(arr) {

  for (let index = 1; index < arr.length; index++) {
    let tempValue = arr[index]
    let currentIndex = index

    while (currentIndex > 0 && arr[currentIndex - 1] > tempValue) {
      arr[currentIndex] = arr[currentIndex - 1]
      currentIndex = currentIndex - 1

      arr[currentIndex] = tempValue
      console.log(arr[currentIndex]);
    }
  }

  return arr;
}

console.log(insertionSort([4, 2, 7, 1, 3]));