import { IAirPlane } from "./Interfaces";

export default class AirPlane implements IAirPlane {
  fly(): void { console.log('Flying the airplane'); }
}