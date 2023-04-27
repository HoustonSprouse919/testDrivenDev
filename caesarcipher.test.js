const caesarCipher = require('./caesarCipher');

test('caesarCipher', () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz",1)).toBe("bcdefghijklmnopqrstuvwxyza");
});

test('caesarCipher spaces', () => {
    expect(caesarCipher("abcdefghi jklmnopqrstuvwxyz",1)).toBe("bcdefghij klmnopqrstuvwxyza");
  });

  test('caesarCipher punctuation', () => {
    expect(caesarCipher("abcdefghi jklmnopqrstuvwxyz!!!",1)).toBe("bcdefghij klmnopqrstuvwxyza!!!");
  });