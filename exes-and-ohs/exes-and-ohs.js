function XO(str) {
  const xRegex = /x/gi;
  const oRegex = /o/gi;
  let xNumShow = 0;
  let oNumShow = 0;
  if (str.match(xRegex)) xNumShow = str.match(xRegex).length;
  if (str.match(oRegex)) oNumShow = str.match(oRegex).length;
  return xNumShow === oNumShow ? true : false;
}
