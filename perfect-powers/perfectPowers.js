function isPP(n){
  const solutions = []
  for (let i = 2; i < n; i++){
    let multiplier = i
    let count = 1
    while (multiplier <= n){
      multiplier *= i
      count++
      if (multiplier === n) solutions.push([i, count])
    }
  }
  return solutions.length === 0  ? null : solutions[0];
}
