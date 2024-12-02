const isUpperCase = require('../utils/esmayuscula');

test('Comprobar mayusculas True', () => {
    expect(isUpperCase("HOLA")).toBe(true);
})

test('Comprobar mayusculas False', () => {
    expect(isUpperCase("hola")).toBe(false);
})