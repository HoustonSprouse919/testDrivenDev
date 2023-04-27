const capitalize = require('./capitalize');

test('capitalize Hello', () => {
  expect(capitalize("hello")).toBe("HELLO");
});