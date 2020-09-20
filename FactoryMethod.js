class BMW {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class FactoryBMW {
  create(type) {
    if(type === 'X5') {
      return new BMW(type, '100000$', '250km/h')
    }
    if(type === 'X6') {
      return new BMW(type, '130000$', '280km/h')
    }
  }
}

let factory = new FactoryBMW();

let x5 = factory.create('X5')
let x6 = factory.create('X6')