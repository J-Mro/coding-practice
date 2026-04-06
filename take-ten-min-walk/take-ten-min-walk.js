function isValidWalk(walk) {
  const adjWalk = walk.map((dir) => dir.toLowerCase());
  const timeLimit = 10;
  const initial = { x: 0, y: 0 };
  const final = { x: 0, y: 0 };
  if (walk.length > 10 || walk.length < 10) return false;
  for (const dir of walk) {
    if (dir === "n") final.y += 1;
    if (dir === "s") final.y -= 1;
    if (dir === "e") final.x += 1;
    if (dir === "w") final.x -= 1;
  }
  return final.x === initial.x && final.y === initial.y ? true : false;
}
