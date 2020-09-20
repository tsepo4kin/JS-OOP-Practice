//Пример так себе тк. инстанс не приватный и его можно легко поменять
// let instance;
// class Counter {
//   constructor() {
//     if(!instance) instance = this;
//     instance.count = 0;
//     return instance;
//   }
//   getCount() {
//     return instance.count;
//   }

//   increaceCount() {
//     instance.count++;
//   }
// }

class Counter {
  constructor() {
    if(typeof Counter.instance === 'object') return Counter.instance;
    instance.count = 0;
    Counter.instance = this;
    return this;
  }
  getCount() {
    return instance.count;
  }

  increaceCount() {
    instance.count++;
  }
}

const myCount1 = new Counter();
const myCount2 = new Counter();

myCount1.increaceCount()
myCount1.increaceCount()
myCount2.increaceCount()
myCount2.increaceCount()

myCount1.getCount() //4
myCount2.getCount() //4