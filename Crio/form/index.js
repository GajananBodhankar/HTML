let x = document.getElementById("form");
x.addEventListener("submit", (e) => {
  e.preventDefault();
  send();
});
function send() {
  let name = document.getElementById("form");
  console.dir(name);
  console.log(name.elements["Email"].value);
}
let fname = document.querySelector("#fname");
fname.addEventListener("input", function (e) {
  nameCheck(e.target.value);
});
fname.addEventListener("focus", function (e) {
  nameCheck(e.target.value);
});
fname.addEventListener("blur", function (e) {
  eraseWarn(fname.id + "warn");
});
let email = document.querySelector("#email");
email.addEventListener("input", function (e) {
  checkEmail(e.target.value);
});
email.addEventListener("focus", function (e) {
  checkEmail(e.target.value);
});
email.addEventListener("blur", function (e) {
  eraseWarn(email.id + "warn");
});
function eraseWarn(val) {
  document.querySelector(`#${val}`).style.visibility = "hidden";
  document.querySelector(`#${val}`).textContent = "hi";
}
function nameCheck(value) {
  let nameRegex = /^[a-zA-Z]+[\s]+[a-zA-Z]+$/;
  if (!nameRegex.exec(value)) {
    document.querySelector("#fnamewarn").style.visibility = "visible";
    document.querySelector("#fnamewarn").textContent =
      "Format should be first name and last name with only alphabets.";
  } else {
    document.querySelector("#fnamewarn").style.visibility = "hidden";
    document.querySelector("#fnamewarn").textContent = "hii";
  }
}
function checkEmail(value) {
  let emaiRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+[.]+com$/;

  if (!emaiRegex.exec(value)) {
    document.querySelector("#emailwarn").style.visibility = "visible";
    document.querySelector("#emailwarn").textContent =
      "Email should have @ and a '.com' in it";
  } else {
    document.querySelector("#emailwarn").style.visibility = "hidden";
    document.querySelector("#emailwarn").textContent = "hii";
  }
}
async function api() {
  let data = { name: "gajanan" };
  let s = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  s.json().then((e) => console.log(e));
}
api();
