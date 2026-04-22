function getCount(str) {
  const vowelCheck = /[aeiou]/gi
  const matches = str.match(vowelCheck)
  return matches === null ? 0 : matches.length
}
