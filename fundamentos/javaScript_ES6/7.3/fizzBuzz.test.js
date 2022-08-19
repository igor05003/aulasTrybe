const myFizzBuzz = require('./fizzBuzz');

describe('Checa o funcionamento da função fizzBuzz', () => {
  test('A função retorna o esperado com um número específico', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('A função retorna o esperado com um número especifico', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  });

  it('A função retorna o esperado com um número específico', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  });

  it('A função retorna o esperado com um número específico', () => {
    expect(myFizzBuzz(2)).toEqual(2);
  });

  it('A função retorna o esperado ao receber um parâmetro falso', () => {
    expect(myFizzBuzz('1')).toEqual(false);
  });
});