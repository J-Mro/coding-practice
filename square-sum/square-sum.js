function squareSum(numbers){
  return numbers.reduce((accumulator, currentValue)=> accumulator + currentValue ** 2, 0)
}
