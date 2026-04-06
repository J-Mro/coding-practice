function findOdd(A) {
  let uniqueNums = [];
  for (const num of A) {
    if (!uniqueNums.includes(num)) uniqueNums.push(num);
  }
  for (const num of uniqueNums) {
    let occurances = 0;
    for (const el of A) {
      if (el === num) occurances++;
    }
    if (occurances % 2 !== 0) return num;
  }
}
