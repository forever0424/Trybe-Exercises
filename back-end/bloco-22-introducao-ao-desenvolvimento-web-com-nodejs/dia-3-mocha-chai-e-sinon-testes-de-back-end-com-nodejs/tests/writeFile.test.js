const { expect } = require('chai');
const escreveArquivo = require('../writeFile.js');
const sinon = require('sinon');
const fs = require('fs');

const DATA_FILE = 'Olá';

describe('Escreve um conteúdo em um arquivo específico', () => {
  describe('Quando a escrita é feita com sucesso', () => {

    before(() => {
      sinon.stub(fs, 'writeFile').resolves(DATA_FILE);
    })

    after(() => {
      fs.writeFile.restore();
    })

    describe('a resposta', () => {
      it('é uma string', async () => {
        const result = await escreveArquivo('teste.txt', DATA_FILE);

        expect(result).to.be.a('string');
      });

      it('deve retornar um "ok"', async () => {
        const result = await escreveArquivo('teste.txt', DATA_FILE);

        expect(result).to.be.equals('ok');
      });
    });
  });
});