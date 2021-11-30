const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testa se "uppercase" transforma em letras maiúsculas', (done) => {
  uppercase('calopsyta', (result) => {
    try {
      expect(result).toBe('CALOPSYTA');
      done();
    } catch (error) {
      done(error);
    }
  });
});
