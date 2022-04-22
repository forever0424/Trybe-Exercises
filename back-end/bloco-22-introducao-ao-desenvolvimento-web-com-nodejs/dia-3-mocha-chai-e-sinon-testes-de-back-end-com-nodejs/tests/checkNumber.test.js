const { expect } = require('chai');
const checkNumber = require('../checkNumber.js');

describe('Se receber um número como parâmetro', () => {
  describe('e for menor que zero', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const result = checkNumber(-2);

        expect(result).to.be.a('string');
      });
      
      it('é igual a "negativo"', () => {
        const result = checkNumber(-2);

        expect(result).to.be.equals('negativo');
      })
    });
  })
  describe('e for maior que zero', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const result = checkNumber(2);

        expect(result).to.be.a('string');
      });

      it('é igual a "positivo"', () => {
        const result = checkNumber(2);

        expect(result).to.be.equals('positivo');
      })
    });
  })
  describe('e for igual a zero', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const result = checkNumber(0);

        expect(result).to.be.a('string');
      });

      it('é igual a "neutro"', () => {
        const result = checkNumber(0);

        expect(result).to.be.equals('neutro');
      })
    });
  })
});

describe('Se não recer um número como parâmetro', () => {
  describe('a resposta deverá ser', () => {
    describe('a resposta', () => {
      it('é uma "string"', () => {
        const result = checkNumber('oi');
  
        expect(result).to.be.a('string');
      });

      it('é igual a "o valor deve ser um número"', () => {
        const result = checkNumber('oi');

        expect(result).to.be.equals('o valor deve ser um número')
      })
    });
  })
});
