const { numberToLCD } = require('../src/index');

describe('GIVEN the numberToLCD function', () => {
  describe('WHEN an input that is not a number is passed', () => {
    test('THEN is should thrown an error', () => {
      expect(() => {
        numberToLCD();
      }).toThrow();
    });
  });

  describe('WHEN the input is a single digit', () => {
    test('THEN an input of 0 should return the LCD equivalent of that digit', () => {
      const expectedOutput = [' _ ', '| |', '|_|'].join('\n');
      expect(numberToLCD(0)).toEqual(expectedOutput);
    });

    test('THEN an input of 1 should return the LCD equivalent of that digit', () => {
      const expectedOutput = ['   ', '  |', '  |'].join('\n');
      expect(numberToLCD(1)).toEqual(expectedOutput);
    });

    test('THEN an input of 2 should return the LCD equivalent of that digit', () => {
      const expectedOutput = [' _ ', ' _|', '|_ '].join('\n');
      expect(numberToLCD(2)).toEqual(expectedOutput);
    });

    test('THEN an input of 3 should return the LCD equivalent of that digit', () => {
      const expectedOutput = [' _ ', ' _|', ' _|'].join('\n');
      expect(numberToLCD(3)).toEqual(expectedOutput);
    });

    test('THEN an input of 4 should return the LCD equivalent of that digit', () => {
      const expectedOutput = ['   ', '|_|', '  |'].join('\n');
      expect(numberToLCD(4)).toEqual(expectedOutput);
    });

    test('THEN an input of 5 should return the LCD equivalent of that digit', () => {
      const expectedOutput = [' _ ', '|_ ', ' _|'].join('\n');
      expect(numberToLCD(5)).toEqual(expectedOutput);
    });

    test('THEN an input of 6 should return the LCD equivalent of that digit', () => {
      const expectedOutput = [' _ ', '|_ ', '|_|'].join('\n');
      expect(numberToLCD(6)).toEqual(expectedOutput);
    });

    test('THEN an input of 7 should return the LCD equivalent of that digit', () => {
      const expectedOutput = [' _ ', '  |', '  |'].join('\n');
      expect(numberToLCD(7)).toEqual(expectedOutput);
    });

    test('THEN an input of 8 should return the LCD equivalent of that digit', () => {
      const expectedOutput = [' _ ', '|_|', '|_|'].join('\n');
      expect(numberToLCD(8)).toEqual(expectedOutput);
    });

    test('THEN an input of 9 should return the LCD equivalent of that digit', () => {
      const expectedOutput = [' _ ', '|_|', ' _|'].join('\n');
      expect(numberToLCD(9)).toEqual(expectedOutput);
    });
  });

  describe('WHEN the input is double digits', () => {
    test('THEN an input of 85 should return the LCD equivalent of both digits', () => {
      // prettier-ignore
      const expectedOutput = [' _  _ ',
                              '|_||_ ',
                              '|_| _|'].join('\n');
      expect(numberToLCD(85)).toEqual(expectedOutput);
    });

    test('THEN an input of 37 should return the LCD equivalent of both digits', () => {
      // prettier-ignore
      const expectedOutput = [' _  _ ',
                              ' _|  |',
                              ' _|  |'].join('\n');
      expect(numberToLCD(37)).toEqual(expectedOutput);
    });
  });

  describe('WHEN the input is triple digits', () => {
    test('THEN an input of 379 should return the LCD equivalent of all three digits', () => {
      // prettier-ignore
      const expectedOutput = [' _  _  _ ',
                              ' _|  ||_|',
                              ' _|  | _|'].join('\n');
      expect(numberToLCD(379)).toEqual(expectedOutput);
    });
  });

  describe('WHEN the input is number of any length', () => {
    test('THEN an input of 9362935648 should return its 3 line LCD equivalent', () => {
      // prettier-ignore
      const expectedOutput = [' _  _  _  _  _  _  _  _     _ ',
                              '|_| _||_  _||_| _||_ |_ |_||_|',
                              ' _| _||_||_  _| _| _||_|  ||_|'].join('\n');
      expect(numberToLCD(9362935648)).toEqual(expectedOutput);
    });
  });
});
