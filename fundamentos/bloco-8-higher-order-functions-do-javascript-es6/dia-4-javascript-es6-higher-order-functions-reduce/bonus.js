const cervejas = [
  {
    codigo: 123,
    fabricante: 'Urquell',
    descricao: 'Pilsner Urquell 500ML',
    valor: 20,
    estoque: 200,
  },
  {
    codigo: 176,
    fabricante: 'Schornstein',
    descricao: 'Schornstein Imperial 500ML',
    valor: 35.99,
    estoque: 150,
  },
  {
    codigo: 122,
    fabricante: 'Schornstein',
    descricao: 'Schornstein IPA 500ML',
    valor: 18.99,
    estoque: 300,
  },
  {
    codigo: 323,
    fabricante: 'Maniacs',
    descricao: 'Maniacs Craft Lager 355ML',
    valor: 19.99,
    estoque: 500,
  },
  {
    codigo: 183,
    fabricante: 'Leuven',
    descricao: 'Leuven Red ALE Knight 600ML',
    valor: 25.99,
    estoque: 100,
  },
  {
    codigo: 129,
    fabricante: 'Leuven',
    descricao: 'Leuven Witbier The Witch 500ML',
    valor: 19.99,
    estoque: 200,
  },
  {
    codigo: 451,
    fabricante: 'Lupulus',
    descricao: 'Lupulus Blanche 330ML',
    valor: 29.99,
    estoque: 0,
  },
  {
    codigo: 111,
    fabricante: 'Eggenberg',
    descricao: 'Samichlaus Berrique 330ML',
    valor: 55.9,
    estoque: 25,
  },
  {
    codigo: 1,
    fabricante: 'Fuller',
    descricao: "Fuller's Vintage Ale 2015 500ML",
    valor: 264.9,
    estoque: 5,
  },
];

// Separar as cervejas por fabricante

const cervejasPorFabricante = cervejas.reduce((obj, cerveja) => {
  Object.keys(obj).includes(cerveja.fabricante) ? obj[cerveja.fabricante] += `, ${cerveja.descricao}` : obj[cerveja.fabricante] = cerveja.descricao;
  return obj;
}, {});

console.log(cervejasPorFabricante);
