function intersectionBtwTwoArr(firstArr, secondArr) {
  let intersectArr = [];
  let steps = 0

  for (let i = 0; i < firstArr.length; i++) {
    steps++
    if (secondArr.includes(firstArr[i])) {
      intersectArr.push(firstArr[i])
    }
  }

  // Another implementation

  // for (let index = 0; index < firstArr.length; index++) {
  //   for (let j = 0; j < secondArr.length; j++) {
  //     steps++
  //     if (firstArr[index] === secondArr[j]) {
  //       intersectArr.push(firstArr[index])
  //       break; //to stop the comparison once the value is equal & move to the next iteration
  //     }
  //   }

  // }
  console.log(steps);
  return intersectArr
}

console.log(intersectionBtwTwoArr([4, 2, 7, 1, 3, 8, 3, 2], [8, 5, 3, 9, 7, 5, 6, 4]));