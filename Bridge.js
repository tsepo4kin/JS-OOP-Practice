class Model {
  constructor(color) {
    this.color = color
  }
}

class Color{
  constructor(type) {
    this.type = type
  }
  get() {
    return this.type
  }
}

class BlackColor extends Color {
  constructor() {
    super("Dark black")
  }
}

class SillbrigColor extends Color {
  constructor() {
    super('silbermetalic')
  }
}

class Audi extends Model {
  constructor(color) {
    super(color)
  }

  paint() {
    return 'Auto: Audi, Color:' + this.color.get()
  }
}

class Bmw extends Model {
  constructor(random) {
    super(random)
  }

  paint() {
    return 'Auto: Audi, Color: ' + this.color.get()
  }
}

const myBMW = new Bmw(new BlackColor());