class Engine2 {
  simpleInterface() {
    console.log("Engine 2.0 tr-tr-tr");
  }
}

class EngineV8 {
  complicatedInterface() {
    console.log("Engine V8 wroom-wroom");
  }
}

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complicatedInterface();
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleInterface();
  }
}

const myCar = new Auto();
const oldEngine = new Engine2();
myCar.startEngine(oldEngine) // Engine 2.0 tr-tr-tr

const myCar1 = new Auto();
const newEngine = new EngineV8Adapter(new EngineV8());
myCar.startEngine(newEngine) // Engine V8 wroom-wroom

const myCar2 = new Auto();
const engine = new EngineV8();
myCar.startEngine(engine) // error