class Account {
  pay(orderPrice) {
    if(this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice} using ${this.name}`)
    } else if (this.incomer) {
      console.log(`Can not pay using using ${this.name}`)
      this.incomer.pay(orderPrice)
    }else{
      console.log('Not enough money')
    }
  }

  canPay(amount) {
    return this.balance >= amount
  }

  setNext(account) {
    this.incomer = account
  }
  
}

class Master extends Account {
  constructor(balance) {
    super()
    this.name = 'Master card'
    this.balance = balance
  }
}

class Qiwi extends Account {
  constructor(balance) {
    super()
    this.name = 'Qiwi'
    this.balance = balance
  }
}

class Paypal extends Account {
  constructor(balance) {
    super()
    this.name = 'Paypal'
    this.balance = balance
  }
}


const master = new Master(100)
const qiwi = new Qiwi(500)
const paypal = new Paypal(200)

master.setNext(paypal)
paypal.setNext(qiwi)

master.pay(438)