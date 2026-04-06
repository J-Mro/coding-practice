function digPow(n, p) {
  const stringNum = n.toString();
  let sum = 0;
  for (const digit of stringNum) {
    sum += Number(digit) ** p;
    p++;
  }
  return sum % n === 0 ? sum / n : -1;
}
