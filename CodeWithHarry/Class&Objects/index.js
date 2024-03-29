let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
};
// o/p - rabbit {jumps:true}

// let rabbit = Object.assign({ jumps: true }, animal);
// Here if we do above one then, the o/p will be {jumps:true,eats:true}

rabbit.__proto__ = animal;

// **********************************************************
class A {
  constructor(name) {
    this.name = name;
  }
  eats() {
    console.log("eats");
  }
}
class B extends A {
  constructor(name) {
    super(name);
  }
  disp() {
    super.eats();
  }
}

let i = new B("hello");
console.log(i.name);
i.disp();

// ************************************************************
// Getters and setters

class Main {
  constructor(name) {
    this.name = name;
  }
  get disp() {
    return this._name;
  }
  set disp(name) {
    this._name = name;
  }
}

var n = new Main("Rohit");
console.log(n.name);
n.name = "Gajanan";
console.log(n.name);
