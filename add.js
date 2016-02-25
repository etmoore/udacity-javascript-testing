function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Params must be a number.');
  }

  return x + y;
}
