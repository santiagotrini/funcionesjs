const isPrime = require("../isPrime");

test("isPrime(2) to be true", () => {
  expect(isPrime(2)).toBe(true);
});

test("isPrime(13) to be true", () => {
  expect(isPrime(13)).toBe(true);
});

test("isPrime(21) to be true", () => {
  expect(isPrime(21)).toBe(false);
});

test("isPrime(14) to be false", () => {
  expect(isPrime(14)).toBe(false);
});

test("isPrime(997) to be true", () => {
  expect(isPrime(997)).toBe(true);
});
