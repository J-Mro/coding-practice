function pyramid(n) {
  const nest = []
  for (let i=1; i<=n; i++){
    const nested = []
    let counter = 0
    while (counter < i){
      nested.push(1)
      counter++
    }
    nest.push(nested)
  }
  return nest
}
