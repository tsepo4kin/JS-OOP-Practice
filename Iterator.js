class Iterator {
  constructor(el) {
    this.index = 0
    this.elements = el
  }

  next() {
    return this.elements[this.index++]
  }

  hasNext() {
    return this.index < this.elements.length
  }
}

const collecton = new Iterator(['Audi', 'BMW', 'Tesla', 'Mersedes'])

while(collecton.hasNext()) {
  console.log(collecton.next())
}