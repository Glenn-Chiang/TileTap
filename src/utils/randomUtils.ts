export function randomBoolean(): boolean {
  return Math.random() < 0.5;
}

// min is inclusive, max is exclusive
export function randRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

