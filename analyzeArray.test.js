const analyzeArray = require('./analyzeArray');
let array = [1,8,3,4,2,6];

test('analyzeArray average', () => {
  expect(analyzeArray(array).average).toBe(4);
});

test('analyzeArray min', () => {
    expect(analyzeArray(array).min).toBe(1);
  });

  test('analyzeArray max', () => {
    expect(analyzeArray(array).max).toBe(8);
  });
  
  test('analyzeArray length', () => {
    expect(analyzeArray(array).length).toBe(6);
  });