class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next() {
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super("waitingForPyment", Shipping);
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super("shipping", Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super("delivered", Delivered);
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next();
  }

  cancelOrder() {
    this.state.name === "waitingForPyment"
      ? console.log("Order is canceled!")
      : console.log("Order cannot be canceled!");
  }
}

const order = new Order();

console.log(order.state.name); // waitingForPyment
order.cancelOrder(); // Order is canceled!

order.nextState();
console.log(order.state.name); // shipping
order.nextState();
console.log(order.state.name); // delivered
order.cancelOrder(); // Order cannot be canceled!
