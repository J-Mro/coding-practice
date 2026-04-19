function addBinary(a,b) {
  let sum = a + b;
  let digits = '';
  let binaryResult = '';
  while (Math.floor(sum) > 0){
    digits += sum % 2
    sum = Math.floor(sum / 2)
  }
  for (let i = digits.length-1; i >=0; i--){
    binaryResult += digits[i];
  }
  return binaryResult ===  ? 0:binaryResult;
}
