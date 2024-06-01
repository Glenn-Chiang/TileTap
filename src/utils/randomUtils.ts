export function randomBoolean(): boolean {
  return Math.random() < 0.5;
}

// min is inclusive, max is exclusive
export function randRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function selectRandom<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
