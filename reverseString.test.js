const reverseString = require('./reverseString');

test('reverse Hello', () => {
  expect(reverseString("hello")).toBe("olleh");
});