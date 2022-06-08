enum Colors {
  BLACK = "Preta",
  WHITE = "Branca",
  RED = "Vermelha",
  SILVER = "Prata"
}

enum Doors {
  DRIVER = "do motorista",
  RIDE = "do carona",
  BEHIND_DRIVER = "de trás do motorista",
  BEHIND_RIDE = "de trás do carona"
}

enum Directions {
  LEFT = 'esquerda',
  RIGHT = 'direita'
}

class Car {
  brand: string;
  color: Colors;
  doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand,
    this.color = color,
    this.doors = doors
  }

  honk(): void { console.log('Buzina'); }
  openTheDoor(door: Doors): void { console.log(`Abre a porta ${door}`); }
  closesTheDoor(door: Doors): void { console.log(`Fecha a porta ${door}`); }
  turnOn(): void { console.log('Liga o carro'); }
  turnOff(): void { console.log('Desliga o carro'); }
  speedUp(): void { console.log('Acelera o carro'); }
  speedDown(): void { console.log('Desacelera o carro'); }
  stop(): void { console.log('Para o carro'); }
  turn(direction: Directions):void { console.log(`Vira o carro para a ${direction}`); }
}

const driversCar = new Car('gol', Colors.SILVER, 4)
console.log(driversCar.openTheDoor(Doors.DRIVER));
console.log(driversCar.closesTheDoor(Doors.DRIVER));
console.log(driversCar.turnOn());
console.log(driversCar.speedUp());
console.log(driversCar.speedDown());
console.log(driversCar.turn(Directions.LEFT));
console.log(driversCar.speedUp());
console.log(driversCar.speedDown());
console.log(driversCar.turn(Directions.RIGHT));
console.log(driversCar.speedUp());
console.log(driversCar.speedDown());
console.log(driversCar.turn(Directions.RIGHT));
console.log(driversCar.turn(Directions.RIGHT));
console.log(driversCar.speedUp());
console.log(driversCar.stop());
console.log(driversCar.openTheDoor(Doors.BEHIND_RIDE));
console.log(driversCar.closesTheDoor(Doors.BEHIND_RIDE));
console.log(driversCar.speedUp());
console.log(driversCar.speedDown());
console.log(driversCar.turn(Directions.RIGHT));
console.log(driversCar.turn(Directions.RIGHT));
console.log(driversCar.speedUp());
console.log(driversCar.speedDown());
console.log(driversCar.turn(Directions.LEFT));
console.log(driversCar.speedUp());
console.log(driversCar.speedDown());
console.log(driversCar.turn(Directions.RIGHT));
console.log(driversCar.turn(Directions.RIGHT));
console.log(driversCar.speedUp());
console.log(driversCar.stop());
