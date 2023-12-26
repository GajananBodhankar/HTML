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

let arr = [10, 20, 30, 40, 50];

console.log(
  arr.reduce(
    (data, i, j) => {
      if (i % 2 == 0) {
        data.sum += i;
        data.count++;
      }
      return data;
    },
    { sum: 0, count: 0 }
  )
);

console.log(Object.keys(arr));


