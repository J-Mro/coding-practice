function findBall(scales) {
  const balls = [0, 1, 2, 3, 4, 5, 6, 7]
  let leftPan = balls.slice(0, 4);
  let rightPan = balls.slice(4);
  let w = scales.getWeight(leftPan, rightPan);
  
  if (w === -1){
    leftPan = balls.slice(0, 2)
    rightPan = balls.slice(2, 4)
    w = scales.getWeight(leftPan, rightPan)
    if(w === -1){
      leftPan = [0]
      rightPan = [1]
      w = scales.getWeight(leftPan, rightPan)
      if (w === -1){
        return leftPan[0]
      } else{
        return rightPan[0]
      }
    }
    if(w === 1){
      leftPan = [2]
      rightPan = [3]
      w = scales.getWeight(leftPan, rightPan)
      if (w === -1){
        console.log()
        return leftPan[0]
      } else {
        return rightPan[0]
      }
    }
  }
  
  if (w === 1){
    leftPan = balls.slice(4, 6)
    rightPan = balls.slice(6)
    w = scales.getWeight(leftPan, rightPan)
    if (w === -1){
      leftPan = [4]
      rightPan = [5]
      w = scales.getWeight(leftPan, rightPan)
      if (w === -1){
        return leftPan[0]
      } else {
        return rightPan[0]
      }
    }
    if (w === 1){
      leftPan = [6]
      rightPan = [7]
      w = scales.getWeight(leftPan, rightPan)
      if (w === -1){
        return leftPan[0]
      } else {
        return rightPan[0]
      }
    }
  }
}
