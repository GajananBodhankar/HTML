class Length {
  constructor(l1, l2) {
    this.l1 = l1;
    this.l2 = l2;
  }
  isValidObject(lengthObj) {
    return lengthObj.l1 >= 0 && lengthObj.l2 >= 0;
  }
  addLength(lengthObj) {
    let inc = this.l2 + lengthObj.l2;
    let carry = inc > 11 ? Math.floor(inc / 12) : 0;
    let ft = this.l1 + lengthObj.l1;
    if (this.isValidObject(lengthObj)) {
      return [ft + carry, carry ? inc % 12 : inc];
    }
    return [0, 0];
  }
}

let x = new Length(5, 24);
let y = new Length(2, 15);

// x.addLength(y);
console.log(x.addLength(y));
