class Builder {
  build() {
    this.addEngine();
    this.installChassis();
    this.addElectronic();
    this.collectAccessories();
  }
}

class TeslaBuilder extends Builder {
  addEngine() {
    console.log("Add electronic engine");
  }

  installChassis() {
    console.log("Install tesla chassis");
  }

  addElectronic() {
    console.log("Add special electronic");
  }

  collectAccessories() {
    console.log("Collect Accessories");
  }
}

class BMWBuilder extends Builder {
  addEngine() {
    console.log("Add BMW engine");
  }

  installChassis() {
    console.log("Install BMW chassis");
  }

  addElectronic() {
    console.log("Add electronic");
  }

  collectAccessories() {
    console.log("Collect Accessories");
  }
}

const teslaBuilder = new TeslaBuilder();
const bmwBuilder = new BMWBuilder();

teslaBuilder.build();
// Add electronic engine
// Install tesla chassis
// Add special electronic
// Collect Accessories
bmwBuilder.build();
// Add BMW engine
// Install BMW chassis
// Add electronic
// Collect Accessories