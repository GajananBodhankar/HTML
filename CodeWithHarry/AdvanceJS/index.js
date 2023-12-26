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
