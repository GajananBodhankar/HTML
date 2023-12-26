function prom() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("resolved");
    }, 3000);
  });
}

(async function () {
  let data = await prom();
  console.log(data);
})();

let { name, age } = {
  name: "Gajanan",
  age: 22,
};

let obj = Object.assign({ address: "Hyd" }, { name });
console.log(obj);
