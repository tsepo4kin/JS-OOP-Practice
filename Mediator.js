class OfficialDealer {
  constructor () {
    this.customers = []
  }

  orderAuto(customer, auto, info) {
    const name = customer.getName()

    console.log(`Order name: ${name}. Order auto is ${auto}`)
    console.log(`Additional info: ${info}`)
    this.addToCustomersList(name)
  }

  addToCustomersList(name) {
    this.customers.push(name)
  }

  getCustomersList() {
    return this.customers
  }
}

class Customer {
  constructor(name, dealerMediator){
    this.name = name
    this.dealerMediator = dealerMediator
  }

  getName() {
    return this.name
  }

  makeOrder() {
    this.dealerMediator.orderAuto(this, auto, info)
  }
}

const mediator = new OfficialDealer()

const maxim = new Customer('Maxim', mediator)
maxim.makeOrder('Tesla', 'With autopilot')
// Order name: Maxim. Order auto is Tesla
// Additional info: With autopilot