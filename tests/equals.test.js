const equals = require('../equals');

test('equals(3, 3, 3) to be true', () => {
  expect(equals(3, 3, 3)).toBe(true);
});

test('equals(-3, 3, 3) to be false', () => {
  expect(equals(-3, 3, 3)).toBe(false);
});

test('equals(0, 0, 0) to be true', () => {
  expect(equals(0, 0, 0)).toBe(true);
});
