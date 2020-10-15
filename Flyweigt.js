class AutoFlyweight {
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  constructor() {
    this.models = {};
  }

  create(name) {
    let model = this.models[name];
    if (model) return model;
    console.count("model");
    this.models[name] = new AutoFlyweight(name);
    return this.models[name];
  }

  getModels() {
    console.table(this.models);
  }
}

const factory = new AutoFactory();
const bmw = factory.create("BMW");
const audi = factory.create("AUDI");
const tesla = factory.create("TESLA");

console.log(factory.getModels());
/*
model: 1
model: 2
model: 3

Object: {
  BMW: Object {model: BMW},
  AUDI: Object {model: AUDI},
  TESLA: Object {model: TESLA},
}

*/
