function fakeBin(digits) {
  let newDigits = "";
  for (const d of digits) {
    newDigits += +d < 5 ? "0" : "1";
  }
  return newDigits;
}

module.exports = { fakeBin };
