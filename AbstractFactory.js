// простым языком я представляю себе это как фабрику над фабрикой*(фабричным методом)

function BMWProducer(kind) {
  return kind === 'sport' ? sportcarFactory : familycarFactory
}

function sportcarFactory() {
  return new Z4();
}

function familycarFactory() {
  return new X5();
}

class Z4 {
  constructor() {
    // speed
    // price
    // ...
  }

  info() {
    return 'this is a sportcar BMW Z4'
  }
}

class X5 {
  constructor() {
    // speed
    // price
    // ...
  }

  info() {
    return 'this is a familycar BMW X5'
  }
}