function selectionSort(array) {
  steps = 0;
  swaps = 0;
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      steps++;
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swaps++;
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  console.log(steps);
  console.log(swaps);
  return array;
}

const array = [4, 2, 7, 1, 3];
console.log(selectionSort(array));