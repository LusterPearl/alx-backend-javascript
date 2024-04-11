import Car from './10-car.js';

class EVCar extends Car {
  constructor(...args) {
    super(...args);
    [, , , this._range] = args;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}

export default EVCar;
