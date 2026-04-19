function solution(str){
// one-line method:
//   return str.split().reverse().join()
// from first principles, and only iterating one time:
  let reversedStr = 
  for (let i=str.length - 1; i >= 0; i--){
    reversedStr += str[i]
  }
  return reversedStr
}
