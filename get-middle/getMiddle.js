function getMiddle(s) {
  const stringLength = s.length
  return stringLength % 2 === 0 ? s.slice(stringLength / 2 - 1, (stringLength / 2)+1) : s[(stringLength-1 )/ 2];
}
