// temperatureConverter.test.js
const convertTemperature = require('./temperatureConverter');

test('32 Fahrenheit should be 0 Celsius', () => {
  expect(convertTemperature(32, 'Fahrenheit', 'Celsius')).toBe(0);
});

test('20 Celsius should be 293.15 Kelvin', () => {
  expect(convertTemperature(20, 'Celsius', 'Kelvin')).toBe(293.15);
});

test('100 Kelvin should be -173.15 Celsius', () => {
  expect(convertTemperature(100, 'Kelvin', 'Celsius')).toBeCloseTo(-173.15, 2);
});
