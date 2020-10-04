class Equipment {
  getPrice() {
    return this.price || 0;
  }

  getName() {
    return this.name;
  }

  setPrice(price) {
    this.price = price;
  }

  setName(name) {
    this.name = name;
  }
}

class Engine extends Equipment {
  constructor() {
    super();
    this.setName("Engine");
    this.setPrice(500);
  }
}

class Body extends Equipment {
  constructor() {
    super();
    this.setName("Body");
    this.setPrice(1000);
  }
}

class Tools extends Equipment {
  constructor() {
    super();
    this.setName("Tools");
    this.setPrice(350);
  }
}

class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments.map((e) => e.getPrice()).reduce((a, b) => a + b);
  }
}

class Car extends Composite {
  constructor() {
    super();
    this.setName("Audi");
  }
}

const myCar = new Car();
myCar.add(new Engine());
myCar.add(new Body())
myCar.add(new Tools())
console.log(myCar.getName(), myCar.getPrice()) // Audi 1850