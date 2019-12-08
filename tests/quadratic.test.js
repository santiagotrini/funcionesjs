const quadratic = require('../quadratic');

test('quadratic(1, 0, -4) to return [2, -2]', () => {
  expect(quadratic(1, 0, -4)).toStrictEqual([2, -2]);
});

test('quadratic(1, 0, 0) to return [0, 0]', () => {
  expect(quadratic(1, 0, 0)).toStrictEqual([0, 0]);
});

test('quadratic(1, 0, -9) to return [3, -3]', () => {
  expect(quadratic(1, 0, -9)).toStrictEqual([3, -3]);
});
