function grow(x){
  return x.reduce(
    (accumulator, currentValue)=>{
      return accumulator * currentValue;
    },
    1);
}
