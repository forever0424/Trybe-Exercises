// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./pokemon");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const ava = new Error('Não temos esse pokémon para você :(');
    const callback = (erro, result) => {
      try {
        expect(erro).toStrictEqual(ava);
        done();
      } catch (error) {
        done(error);
      }
    }
    getPokemonDetails(({ name }) => name === 'Charmansder', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const char = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    const callback = (erro, result) => {
      try {
        expect(result).toStrictEqual(char);
        done();
      } catch (error) {
        done(error);
      }
    }
    getPokemonDetails(({ name }) => name === 'Charmander', callback);
  });
});
