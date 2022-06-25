import { ICar } from "./Interfaces";

export default class Car implements ICar {
  drive(): void { console.log('Driving the car'); }
}