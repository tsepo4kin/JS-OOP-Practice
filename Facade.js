class Conveyor {
  setBody() {
    console.log("Body set!");
  }
  getEngine() {
    console.log("Dismantle engine!");
  }
  setEngine() {
    console.log("Engine set!");
  }
  getInterior() {
    console.log("Dismantle interior");
  }
  setInterior() {
    console.log("Interior added!");
  }
  setWheels() {
    console.log("Wheels!");
  }
  addElectronics() {
    console.log("Added electronics!");
  }
  paint() {
    console.log("Car paint!");
  }
}

class ConveyorFacade {
  constructor(car) {
    this.car = car;
  }

  assembleCar() {
    this.car.setBody();
    this.car.setEngine();
    this.car.setInterior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();
  }

  changeEngine() {
    this.car.getEngine();
    this.car.setEngine();
  }

  changeInterior() {
    this.car.getInterior();
    this.car.setInterior();
  }
}

const conveyor = new ConveyorFacade(new Conveyor());
let car = conveyor.assembleCar();
car = conveyor.changeEngine();
car = conveyor.changeInterior();
