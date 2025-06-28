const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

// TEST para la función multiplicar  TAREA 1
test('multiply 4 * 5 to equal 20', () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});

// TEST para la función multiplicar  TAREA 1
test('multiply -2 * 7 to equal -14', () => {
  expect(calculator.multiply(-2, 7)).toBe(-14);
});

// TEST para la función dividir  TAREA 1
test('divide 20 / 4 to equal 5', () => {
  expect(calculator.divide(20, 4)).toBe(5);
});

// TEST para la función dividir  TAREA 1
test('divide -15 / 3 to equal -5', () => {
  expect(calculator.divide(-15, 3)).toBe(-5);
});

// TEST para divir por cero  TAREA 3
test('divide() lanza un error si el segundo argumento es 0', () => {
  expect(() => calculator.divide(10, 0)).toThrow('No se puede dividir por cero');
});
