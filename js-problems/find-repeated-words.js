// find repeated words in a sentence and its intensity.
const str = `The rain kept falling, and the rain didn't stop until the sun appeared and the rain was gone`;
const strArr = str.toLowerCase().split(' ');
const map = {};

for (const ele of strArr) {
  map[ele] = (map[ele] || 0) + 1;
}

for (const key in map) {
  if (map[key] > 1) {
    console.log(`${key} = ${map[key] - 1}`);
  }
}