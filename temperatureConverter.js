// temperatureConverter.js

function convertTemperature(temperature, fromUnit, toUnit) {
    if (fromUnit === toUnit) {
      // Om enheterna är desamma, returnera samma temperatur
      return temperature;
    } else if (fromUnit === "Celsius") {
      // Konvertera från Celsius till önskad enhet
      if (toUnit === "Fahrenheit") {
        return (temperature * 9/5) + 32;
      } else if (toUnit === "Kelvin") {
        return temperature + 273.15;
      }
    } else if (fromUnit === "Fahrenheit") {
      // Konvertera från Fahrenheit till önskad enhet
      if (toUnit === "Celsius") {
        return (temperature - 32) * 5/9;
      } else if (toUnit === "Kelvin") {
        return (temperature - 32) * 5/9 + 273.15;
      }
    } else if (fromUnit === "Kelvin") {
      // Konvertera från Kelvin till önskad enhet
      if (toUnit === "Celsius") {
        return temperature - 273.15;
      } else if (toUnit === "Fahrenheit") {
        return (temperature - 273.15) * 9/5 + 32;
      }
    }
  
    // Om något går fel returneras null
    return null;
  }
  
  module.exports = convertTemperature;
  