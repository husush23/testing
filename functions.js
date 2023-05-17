const fucntions = {
  strLength: str => {
    if (str.length > 0 && 10) {
      return str.length;
    } else {
      throw new Error('The string is empty or higher than 10 characters.');
    }
  },
  reverseStr: str => str.split('').reverse().join(''),
  Calculator: class {
    constructor() {
      this.number = this.number;
    }
    add(n1, n2) {
      return n1 + n2;
    }
    sub(n1, n2) {
      return n1 - n2;
    }
    multiply(n1, n2) {
      return n1 * n2;
    }
    divide(n1, n2) {
      return n1 / n2;
    }
  },
  capitalize: str => str.toUpperCase(),
};
module.exports = fucntions;

// console.log(fucntions.reverseStr('hi'));

const calc = new fucntions.Calculator();
console.log(calc.multiply(2, 2));

console.log(fucntions.capitalize('husein'));
