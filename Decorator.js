class Car {
  constructor() {
    this.model = 'Car'
    this.price = 10000
  }

  getDescription() {
    return this.model
  }
  
  getPrice() {
    return this.price
  }
}

class Tesla extends Car {
  constructor() {
    super()
    this.model = 'Tesla'
    this.price = 20000
  }
}

class AutopilotDec {
  constructor(car) {
    this.car = car
  }

  getPrice() {
    return this.car.getPrice + 5000
  }

  getDescription() {
    return this.car.getDescription + ' With autopilot'
  }
}

class ParktronicDec {
  constructor(car) {
    this.car = car
  }

  getPrice() {
    return this.car.getPrice + 3000
  }

  getDescription() {
    return this.car.getDescription + ' With parktronic'
  }
}

let tesla = new Tesla()
tesla = new AutopilotDec(tesla)
tesla = new ParktronicDec(tesla)
console.log(tesla.getDescription, tesla.getPrice)
// Tesla with autopilot with parktronic 28000