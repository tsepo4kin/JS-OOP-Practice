class CarAccess {
  open() {
    console.log("Doors open!");
  }

  close() {
    console.log("Doors closed!");
  }
}

class ProxySecurity {
  constructor(securityObj) {
    this.securityObj = securityObj;
  }
  open(password) {
    if (this.auth(password)) {
      this.securityObj.open();
    } else {
      console.log("Access denied!");
    }
  }
  auth(pass) {
    return pass === "myPass";
  }
  close() {
    this.securityObj.close();
  }
}
