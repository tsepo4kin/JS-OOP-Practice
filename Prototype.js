class Tesla {
  constructor(model, price, color, autopilot) {
    this.model = model;
    this.price = price;
    this.color = color;
    this.autopilot = autopilot;
  }

  produce() {
    return new Tesla(this.model, this.price, this.color, this.autopilot);
  }
}

const prototypeCar = new Tesla("S", 80000, "black", false);

const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

car1.color = "white";
car1.autopilot = true;
