const cloneMethod = Symbol('cloneMethod');

class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneMethod]() {
    return new Car(this._brand, this._motor, this._color);
  }

  cloneCar() {
    return this[cloneMethod]();
  }
}

export default Car;