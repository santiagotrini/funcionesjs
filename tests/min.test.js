const min = require('../min');

test('min([-8, 5, 3]) to be -8', () => {
  expect(min([-8, 5, 3])).toBe(-8);
});

test('min([7842787, 198198298, 300000000]) to be 7842787', () => {
  expect(min([784277, 198198298, 300000000])).toBe(784277);
});

test('min([-1, 0, 1]) to be -1', () => {
  expect(min([-1, 0, 1])).toBe(-1);
});
