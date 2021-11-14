const { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee } = require('./sum');

describe('1 - sum tests', () => {
  test('Espera a soma 4 + 5 ser igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  test('Espera a soma de 0 + 0 ser igual a 0', () => {
    expect(sum(0, 0)).toBe(0)
  });
  test('Espera um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => { sum(4, '5') }).toThrow("parameters must be numbers")
  });
});

describe('2 - myRemove tests', () => {
  test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 6)).toEqual([1, 2, 3, 4]);
  });
});

describe('3 - myFizzBuzz tests', () => {
  test('Verifica se a chamada myFizzBuzz(15) retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('Verifica se a chamada myFizzBuzz(12) retorna "fizz"', () => {
    expect(myFizzBuzz(12)).toBe('fizz');
  });
  test('Verifica se a chamada myFizzBuzz(20) retorna "buzz"', () => {
    expect(myFizzBuzz(20)).toBe('buzz');
  });
  test('Verifica se a chamada myFizzBuzz(16) retorna 16', () => {
    expect(myFizzBuzz(16)).toBe(16);
  });
  test('Verifica se a chamada myFizzBuzz("fizzbuzz") retorna false', () => {
    expect(myFizzBuzz('fizzbuzz')).toBe(false);
  });
});

describe('4 - encode and decode tests', () => {
  test('Verifica se encode e decode são funções', () => {
    expect(typeof encode && typeof decode).toBe('function');
  });
  test('Verifica se encode("a, e, i, o, u") retorna "1, 2, 3, 4, 5"', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  });
  test('Verifica se decode("1, 2, 3, 4, 5") retorna "a, e, i, o, u"', () => {
    expect(decode("1, 2, 3, 4, 5")).toBe("a, e, i, o, u");
  });
  test('Verifica se as demais letras/números não são convertidos', () => {
    expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
    expect(decode('67890')).toBe('67890');
  });
  test('Verifica se a string retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    const str = 'caracteres';
    expect(encode(str).length && decode(str).length).toBe(str.length);
  });
});

describe('5 - techList tests', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('6 - hydrate tests', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

describe('7 - searchEmployee tests', () => {
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testa se a função retorna os resultados da busca pelo id para aquele funcionário e a informação consultada', () => {
    const professionalBoard = [
      {
        id: '8579-6',
        firstName: 'Ana',
        lastName: 'Gates',
        specialities: ['UX', 'Design'],
      },
      {
        id: '5569-4',
        firstName: 'George',
        lastName: 'Jobs',
        specialities: ['Frontend', 'Redux', 'React', 'CSS'],
      },
      {
        id: '4456-4',
        firstName: 'Leila',
        lastName: 'Zuckerberg',
        specialities: ['Context API', 'RTL', 'Bootstrap'],
      },
      {
        id: '1256-4',
        firstName: 'Linda',
        lastName: 'Bezos',
        specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
      },
      {
        id: '9852-2-2',
        firstName: 'Jeff',
        lastName: 'Cook',
        specialities: ['Ruby', 'SQL'],
      },
      {
        id: '4678-2',
        firstName: 'Paul',
        lastName: 'Dodds',
        specialities: ['Backend'],
      },
    ];
    expect(searchEmployee('9852-2-2', ['firstName' , 'lastName' , 'specialities'])).toEqual(['Jeff', 'Cook', ['Ruby', 'SQL']]);
    expect(searchEmployee('1256-4', ['lastName', 'specialities'])).toEqual(['Bezos', ['Hooks', 'Context API', 'Tailwind CSS']]);
    expect(searchEmployee('5569-4', ['specialities'])).toEqual([['Frontend', 'Redux', 'React', 'CSS']]);
  });
  it('Testa se a função retorna o erro "ID não identificada" caso o id não conste no quadro de funcionários', () => {
    expect(() => { searchEmployee('7732-1', ['firstName']); }).toThrowError(new Error("ID não identificada"));
  });
  it('Testa se a função retorna o erro "Informação indisponível" caso a informação não existir', () => {
    expect(() => { searchEmployee('4678-2', ['middleName']); }).toThrowError(new Error("Informação indisponível"));
  });
});
