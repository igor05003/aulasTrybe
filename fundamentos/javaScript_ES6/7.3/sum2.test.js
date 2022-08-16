const sum = require('./sum2');

describe('A função sum retorna a soma dos parâmetros', () => {
  test('O retorno de sum(4,5) é 9', () => {
    expect(sum(4,5)).toBe(9)
  });

  test('O retorno de sum(0,0) é 0', () => {
    expect(sum(0,0)).toBe(0);
  });

  test('Testa se a função lança um erro', () => {
    expect(() => sum(4,'5')).toThrow()
  });

  test('Testa se a mensagem de erro está correta', () => {
    expect(() => sum(4,'5')).toThrow('parameters must be numbers');
  });
});