const sum = require('../sum');

test('sum(1) to return 1', () => {
  expect(sum(1)).toStrictEqual(1);
});

test('sum(2) to return 1.5', () => {
  expect(sum(2)).toStrictEqual(1.5);
});

test('sum(100) to return 2', () => {
  expect(sum(100)).toStrictEqual(2);
});
