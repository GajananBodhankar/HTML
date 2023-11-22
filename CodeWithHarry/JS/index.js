console.log("JavaScript");

var a = 10;
var b = 20;
var c = "Max";
var arr = [10, 20, 30, 20];
console.log(a + b, c);
console.log(typeof a, typeof b, typeof c);

// let ind = document.getElementById("data");
// ind.innerHTML = `${a} ${b} ${c}`;
let s = new Set([10, 20, 30]);

let obj = Object.create({ name: "Gajanan" });
obj.disp = function () {
  console.log(this.name);
};

Object.defineProperty(obj, "age", {
  value: 22,
});

Object.defineProperties(obj, {
  address: { value: "hyd" },
  phono: { value: 234567 },
});
console.log(obj.age, obj.address);

const { name, age } = { name: "Gajanan", age: 22 };

let obj1 = {};
Object.assign(obj1, { name, age });
console.log(obj1)

let objcall1 = { name: "Gajanan", age: 22 };
let objCall2 = {
  disp: function () {
    return this.name + " " + this.age;
  },
};
let x = objCall2.disp.bind(objcall1);
console.log(x());


