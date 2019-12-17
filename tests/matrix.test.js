const matrix = require("../matrix");

const a = [[1, 2], [3, 4]];
const b = [[5, 6], [7, 8]];
const c = [[6, 8], [10, 12]];
const d = [[7, 10], [13, 16]];

const e = [[1, 2, 3], [1, 2, 3], [0, 0, 1]];
const f = [[0, 0, 4], [1, 3, 5], [1, 1, 3]];
const g = [[1, 2, 7], [2, 5, 8], [1, 1, 4]];

test("matrix(a, b) to be c", () => {
  expect(matrix(a, b)).toStrictEqual(c);
});

test("matrix(a, c) to be d", () => {
  expect(matrix(a, c)).toStrictEqual(d);
});

test("matrix(e, f) to be g", () => {
  expect(matrix(e, f)).toStrictEqual(g);
});
