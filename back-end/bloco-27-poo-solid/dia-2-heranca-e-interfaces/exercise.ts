interface Contract {
  subject: string;
  clauses: string[];
  signatories: Person[];
  describe(): void;
}

class Person {
  constructor(private _name: string) { }
  get name() { return this._name; }
}

class NaturalPerson extends Person {
  constructor(name: string, private _cpf: string) {
    super(name);
  }
  get cpf() { return this._cpf; }
}

class LegalPerson extends Person {
  constructor(name: string, private _cnpj: string) {
    super(name);
  }
}

class SalesContract implements Contract {
  private _signatories: Person[];
  private _clauses: string[];

  constructor() {
    this._signatories = [];
    this._clauses = [];
  }

  get signatories() { return [...this._signatories]; }
  get clauses() { return [...this._clauses]; }
  get subject() { return "Sales"; }

  sign(signatory: Person) { this._signatories.push(signatory); }
  addClause(clause: string) {
    if (this._signatories.length > 0) return;
    this._clauses.push(clause);
  }

  describe() {
    console.log('--------------------');
    console.log(`Contrato: ${this.subject}`);
    this.clauses.forEach((clause) => { console.log(`Cláusula: ${clause}`) });
    this.signatories.forEach((signatory) => { console.log(`Assinado por: ${signatory.name}`) });
    console.log('--------------------\n');
  }
}

const s1 = new SalesContract();
const pp1 = new NaturalPerson('Tony', '123456789');
const pp2 = new NaturalPerson('Lilly', '987654321');
const lp = new LegalPerson('International Sales SA', '23961237162378');

s1.describe();
s1.addClause('Foo');
s1.addClause('Bar');
s1.describe();
s1.sign(pp1);
s1.sign(pp2);
s1.describe();
s1.addClause('Baz');
s1.sign(lp);
s1.describe();

/*
Saída:
--------------------
Contrato: Sales
--------------------

--------------------
Contrato: Sales
Cláusula: Foo
Cláusula: Bar
--------------------

--------------------
Contrato: Sales
Cláusula: Foo
Cláusula: Bar
Assinado por: Tony
Assinado por: Lilly
--------------------

--------------------
Contrato: Sales
Cláusula: Foo
Cláusula: Bar
Assinado por: Tony
Assinado por: Lilly
Assinado por: International Sales SA
--------------------
 */