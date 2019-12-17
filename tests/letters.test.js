const letters = require("../letters");

test("letters('aaaab', 'b') to return 1", () => {
  expect(letters("aaaab", "b")).toBe(1);
});

test("letters('aaaab', 'z') to return 0", () => {
  expect(letters("aaaab", "z")).toBe(0);
});

test("letters('aaaab', 'a') to return 4", () => {
  expect(letters("aaaab", "a")).toBe(4);
});

test("letters('aaaccab', 'c') to return 2", () => {
  expect(letters("aaaccab", "c")).toBe(2);
});
