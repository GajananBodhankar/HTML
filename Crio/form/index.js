let data = { name: null, email: null, doc: null, where: null, when: null };
let x = document.getElementById("form");
x.addEventListener("submit", (e) => {
  e.preventDefault();
  send();
  global();
});
function send() {
  let name = document.getElementById("form");
  // console.dir(name);
  // console.log(name.elements["Email"].value);
}
let fname = document.querySelector("#fname");
fname.addEventListener("input", function (e) {
  nameCheck(e.target.value);
});
fname.addEventListener("focus", function (e) {
  eraseWarn("mainwarn");

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
  eraseWarn("mainwarn");
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
    data.name = value;
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
    data.email = value;
  }
}
async function api(name, email, doc, where, when) {
  let data = { name, email, doc, where, when };
  let s = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  s.json().then((e) => {
    console.log(e);
    alert("Submitted the data");
  });
}

let doc = document.querySelector("#doctor");
doc.addEventListener("click", function (e) {
  if (e.target.value) {
    data.doc = e.target.value;
  }
});

let google = document.getElementById("Google Meet");
google.addEventListener("click", function (e) {
  data.where = e.target.value;
});

let phone = document.getElementById("Phone");
phone.addEventListener("click", function (e) {
  data.where = e.target.value;
});

let d = document.getElementById("date");
d.addEventListener("input", function (e) {
  data.when = e.target.value;
});

function global() {
  let flag = false;
  for (let i in data) {
    if (data[i] == null) {
      flag = true;
    }
  }
  if (flag) {
    document.getElementById("mainwarn").textContent =
      "Please fill all the details";
    document.getElementById("mainwarn").style.visibility = "visible";
  } else {
    api(data.name, data.email, data.doc, data.where, data.when);
    eraseWarn("mainwarn");
  }
}
