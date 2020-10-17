// // #1
// class Tesla {
//   info() {
//     return "It is a Tesla car";
//   }

//   accept(visitor) {
//     visitor(this);
//   }
// }

// class BMW {
//   info() {
//     return "It is a BMW car";
//   }

//   accept(visitor) {
//     visitor(this);
//   }
// }

// class Audi {
//   info() {
//     return "It is a Audi car";
//   }

//   accept(visitor) {
//     visitor(this);
//   }
// }

// #2

class Auto {
  accept(visitor) {
    visitor(this);
  }
}

class Tesla extends Auto {
  info() {
    return "It is a Tesla car";
  }
}

class BMW extends Auto {
  info() {
    return "It is a BMW car";
  }
}

class Audi extends Auto {
  info() {
    return "It is a Audi car";
  }
}

function exportVisitor(auto) {
  if (auto instanceof Tesla) {
    auto.export = console.log(`Exported data: ${auto.info}`);
  }
  if (auto instanceof BMW) {
    auto.export = console.log(`Exported data: ${auto.info}`);
  }
  if (auto instanceof Audi) {
    auto.export = console.log(`Exported data: ${auto.info}`);
  }
}

const tesla = new Tesla();
const bmw = new BMW();

console.log(tesla.accept(exportVisitor));
//Exported data: It is a Tesla car
console.log(bmw.accept(exportVisitor));
//Exported data: It is a BMW car
