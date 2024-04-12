import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range; // Removed underscore
  }

  cloneCar() {
    return new Car(this.brand, this.motor, this.color); // Removed underscores
  }
}

export default EVCar;
