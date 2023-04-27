const calculator = require('./calculator');

test('add', () => {
  expect(calculator.add(2,5)).toBe(7);
});

test('sub', () => {
    expect(calculator.sub(10,7)).toBe(3);
  });

  test('divide', () => {
    expect(calculator.div(15,5)).toBe(3);
  });
  
  test('multiply', () => {
    expect(calculator.mul(5,3)).toBe(15);
  });
