function rowSumOddNumbers(n) {
  const oddNumsInRow = [];
  let counter = 0;
  let accumulator = 1
  if (n === 1) return 1
  while (counter < n){
    let numPerRow = 0
    while (numPerRow < counter + 1){
      if (counter === n - 1) oddNumsInRow.push(accumulator);
      accumulator += 2
      numPerRow++
    }
    counter ++
  }
  return oddNumsInRow.reduce((accumulator, currentValue)=>accumulator + currentValue, 0)
}
