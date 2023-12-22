let a = prompt("Enter first number :");

let b = prompt("Enter second number:");
try {
  if (isNaN(a) || isNaN(b)) {
    throw TypeError("type mismatch");
  } else {
    console.log("Sum", a + b);
  }
} catch (e) {
  console.log(e);
}
