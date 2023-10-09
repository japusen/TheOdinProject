const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(values) {
	return values.reduce((total, value) => add(total, value), 0);
};

const multiply = function(values) {
  return values.reduce((total, value) => total * value, 1);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(n) {
	let product = 1;
  for (let i = n; i >= 1; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
