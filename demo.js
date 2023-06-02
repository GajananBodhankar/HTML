// function check(x) {
//   var i = x.toString().split("");
//   var sum = 0;
//   var mul = 1;
//   i.forEach((item) => {
//     sum = sum + Number(item);
//     mul = mul * Number(item);
//   });
//   (sum==mul)?console.log('true'):console.log('false')
// }
// check(123)
//************************************ */
let arr = ["React:Native", "Java:Script"];
let x = arr[0].split(":");
let y = arr[1].split(":");
var obj = [];
obj.push({ fname: x[0], lname: x[1] });
obj.push({ fname: y[0], lname: y[1] });
console.log(obj);
