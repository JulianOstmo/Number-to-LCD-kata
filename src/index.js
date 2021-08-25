const ZERO = [' _ ', '| |', '|_|'];
const ONE = ['   ', '  |', '  |'];
const TWO = [' _ ', ' _|', '|_ '];
const THREE = [' _ ', ' _|', ' _|'];
const FOUR = ['   ', '|_|', '  |'];
const FIVE = [' _ ', '|_ ', ' _|'];
const SIX = [' _ ', '|_ ', '|_|'];
const SEVEN = [' _ ', '  |', '  |'];
const EIGHT = [' _ ', '|_|', '|_|'];
const NINE = [' _ ', '|_|', ' _|'];

const LCD_NUMBER = {
  0: ZERO,
  1: ONE,
  2: TWO,
  3: THREE,
  4: FOUR,
  5: FIVE,
  6: SIX,
  7: SEVEN,
  8: EIGHT,
  9: NINE,
};

const numberToLCD = (input) => {
  if (typeof input !== 'number') {
    throw new Error('Input must be a number');
  }

  if (input < 10) {
    return LCD_NUMBER[input].join('\n');
  }

  const digits = input.toString().split('');
  const output = digits.reduce(
    ([LCD_TOP, LCD_MID, LCD_BOTTOM], digit) => {
      const [DIGIT_TOP, DIGIT_MID, DIGIT_BOTTOM] = LCD_NUMBER[digit];
      return [
        LCD_TOP + DIGIT_TOP,
        LCD_MID + DIGIT_MID,
        LCD_BOTTOM + DIGIT_BOTTOM,
      ];
    },
    ['', '', ''],
  );

  return output.join('\n');

  // const [FIRST_DIGIT_TOP, FIRST_DIGIT_MID, FIRST_DIGIT_BOTTOM] = LCD_NUMBER[
  //   firstDigit
  // ];
  // const [SECOND_DIGIT_TOP, SECOND_DIGIT_MID, SECOND_DIGIT_BOTTOM] = LCD_NUMBER[
  //   secondDigit
  // ];

  // return [
  //   FIRST_DIGIT_TOP + SECOND_DIGIT_TOP,
  //   FIRST_DIGIT_MID + SECOND_DIGIT_MID,
  //   FIRST_DIGIT_BOTTOM + SECOND_DIGIT_BOTTOM,
  // ].join('\n');
};

module.exports = {
  numberToLCD,
};
