const isUpperCase = require('../utils/esmayuscula2');

describe('mayuscula', () => {
    test.each`
      firstValue |  expectedResult    
      ${"hola"}    |  ${false}
      ${"roma"}    |  ${false}        
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  });