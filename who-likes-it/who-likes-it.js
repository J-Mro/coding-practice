function likes(names) {
  let sentence = "";
  if (names.length === 0) sentence += "no one likes this";
  if (names.length === 1) sentence += `${names[0]} likes this`;
  if (names.length === 2) sentence += `${names[0]} and ${names[1]} like this`;
  if (names.length === 3)
    sentence += `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (names.length > 3)
    sentence += `${names[0]}, ${names[1]} and ${names.slice(2).length} others like this`;
  return sentence;
}
