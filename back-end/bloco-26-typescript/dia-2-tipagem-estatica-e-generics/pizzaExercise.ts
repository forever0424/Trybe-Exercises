type Slices = 4 | 6 | 8

interface Pizza {
  flavor: string;
  slices: Slices;
}

const calabresa: Pizza = {
  flavor: 'calabresa',
  slices: 8,
}

const marguerita: Pizza = {
  flavor: 'marguerita',
  slices: 6,
}

const nutela: Pizza = {
  flavor: 'nutela',
  slices: 4,
}

type Comum = 'Calabresa' | 'Frango' | 'Pepperoni'
type Vegetariana = 'Marguerita' | 'Palmito' | 'Cogumelo'
type Doce = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow'

interface Common extends Pizza {
  flavor: Comum;
  slices: Slices;
}

interface Vegetarian extends Pizza {
  flavor: Vegetariana;
  slices: Slices;
}

interface Sweet extends Pizza {
  flavor: Doce;
  slices: 4;
}

const calabresaComum: Common = {
  flavor: 'Calabresa',
  slices: 6
}

const pepperoniComum: Common = {
  flavor: 'Pepperoni',
  slices: 8
}

const vegetariana: Vegetarian = {
  flavor: 'Palmito',
  slices: 8
}

const doce: Sweet = {
  flavor: 'Marshmallow',
  slices: 4
}