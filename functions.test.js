const fucntions = require('./functions');

describe('strLength', () => {
  // Arrange
  test('should return the of non-empty string', () => {
    const input = 'Hussein';
    const expectedOutput = input.length;

    // Act
    const result = fucntions.strLength(input);

    // Assert
    expect(result).toBe(expectedOutput);
  });

  test('should throw an error for an empty string', () => {
    // Arranhe
    const input = '';

    // Act & Assert
    expect(() => {
      fucntions.strLength(input);
    }).toThrowError('The string is empty or higher than 10 ');
  });
});

describe('Reverse Str', () => {
  test('Reverse the string ', () => {
    // Arrange
    const str = 'Hussein';
    const expectedOutput = 'niessuH';

    // Act
    const result = fucntions.reverseStr(str);

    // Assert
    expect(result).toBe(expectedOutput);
  });
});

describe('Add the number', () => {
  test('should return sum of numbers', () => {
    // Arrange
    const input1 = 2;
    const input2 = 3;
    const expectedOutput = 5;

    // Act
    const calc = new fucntions.Calculator();
    const add = calc.add(input1, input2);
    const result = add;

    // Assert
    expect(result).toBe(expectedOutput);
  });
});

describe('Subtract numbers', () => {
  test('should return difference of numbers', () => {
    // Arrange
    const input1 = 7;
    const input2 = 3;
    const expectedOutput = 4;

    // Act
    const calc = new fucntions.Calculator();
    const sub = calc.sub(input1, input2);
    const result = sub;

    expect(result).toBe(expectedOutput);
  });
});

describe('Multioly numbers', () => {
  test('should return the multiplacation of numbers', () => {
    // Arrabge
    const input1 = 7;
    const input2 = 3;
    const expectedOutput = 21;

    // Act
    const calc = new fucntions.Calculator();
    const multiply = calc.multiply(input1, input2);
    const result = multiply;

    //  Assert
    expect(result).toBe(expectedOutput);
  });
});

describe('Divide numbers', () => {
  test('should return the multiplacation of numbers', () => {
    // Arrabge
    const input1 = 15;
    const input2 = 3;
    const expectedOutput = 5;

    // Act
    const calc = new fucntions.Calculator();
    const divide = calc.divide(input1, input2);
    const result = divide;

    //  Assert
    expect(result).toBe(expectedOutput);
  });
});

describe('Capitalize the string', () => {
  test('should return capitalized string', () => {
    // Arrange
    const input = 'hussein';
    const expectedOutput = 'HUSSEIN';

    // Act
    const result = fucntions.capitalize(input);

    // Assert
    expect(result).toBe(expectedOutput);
  });
});
