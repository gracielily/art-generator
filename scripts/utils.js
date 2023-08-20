function generateRandomNumber(start, end) {
  return Math.floor(Math.floor(Math.random() * (end - start + 1)) + start);
}

function fillWithRandomColor(alpha) {
  const r = generateRandomNumber(0, 255);
  const g = generateRandomNumber(0, 255);
  const b = generateRandomNumber(0, 255);
  fill(r, g, b, alpha);
}