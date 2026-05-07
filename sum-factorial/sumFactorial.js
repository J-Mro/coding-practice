function sumFactorial(arr){
  let sum = 0
  for (const num of arr){
    let factorial = 1
    for (let i =num; i > 0; i--){
      factorial *= i
    }
    sum += factorial
  }
  return sum
}
