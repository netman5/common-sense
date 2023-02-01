function evenIndexArr(arr) {
  let newArr = [];
  let index = 0;
  let steps = 0;

  const isEven = (number) => number % 2 === 0;

  while (index < arr.length) {
    steps++
    isEven(index) ? newArr.push(arr[index]) : null;
    index += 2 //Steps over the index by 2
  }
  console.log('steps', steps);
  return newArr;
}

console.log(evenIndexArr([1, 2, 3, 4, 6, 8]));