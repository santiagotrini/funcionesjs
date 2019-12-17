const triangle = require("../triangle");

test("triangle(2, 10) to return 10", () => {
  expect(triangle(2, 10)).toBe(10);
});

test("triangle(4, 5) to return 10", () => {
  expect(triangle(4, 5)).toBe(10);
});

test("triangle(3, 4) to return 6", () => {
  expect(triangle(3, 4)).toBe(6);
});
