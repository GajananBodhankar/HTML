function getDate() {
  let d = document.getElementById("date");
  let date = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  d.textContent = date;
  d.style.textAlign = "center";
  d.style.color = "white";
}
getDate();

let btn = document.querySelector("button");
btn.addEventListener("click", function (a) {
  let input = document.querySelector("input");
  input.focus();
});
