class Car {
  constructor() {
    this.parktronic = false
    this.autopilot = false
    this.signaling = false
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car()
  }

  changeParktronic(payload) {
    this.car.parktronic = payload
    return this
  }

  changeAutopilot(payload) {
    this.car.autopilot = payload
    return this
  }

  changeSignaling(payload) {
    this.car.signaling = payload
    return this
  }

  updateEngine(engine) {
    this.car.engine = engine
    return this
  }

  build() {
    return this.car
  }
}

const myCar = new CarBuilder().changeAutopilot(true)
                              .changeParktronic(true)
                              .changeSignaling(true)
                              .updateEngine('V8')
                              .build()
console.log(myCar) 
// Car {
//   parktronic: true,
//   autopilot: true,
//   signaling: true,
//   engine: 'V8' }