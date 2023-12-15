import teamsData from "./data.js";
console.log(teamsData);

const teamPillsContainerId = "teams-container";
const teamContentContainerId = "team-content-container";

// TODO 1: Displaying team pills for each team
function displayTeamPills(teamsData) {
  let div = document.getElementById(teamPillsContainerId);
  teamsData.forEach((i, j) => {
    let item = document.createElement("div");
    item.className = "card m-2 p-2";
    item.id = i.id;
    item.value = i.name;
    item.textContent = i.name;
    div.append(item);
  });
}

displayTeamPills(teamsData);

const teamPillsContainer = document.getElementById(teamPillsContainerId);

// TODO 2: Event handler to show Carousel with images for selected team
teamPillsContainer.addEventListener("click", (e) => {
  //e.target -> element node where the "click" event is fired from
  //events fired in child, bubbles up to the parent
  let mainDiv = document.createElement("div");
  mainDiv.className = "carousel slide";
  mainDiv.id = "carouselExample";
  mainDiv.style.height = "50vh";
  mainDiv.style.width = "70vw";
  let inner = document.createElement("div");
  inner.className = "carousel-inner";
  let list = teamsData.filter((i) => i.name == e.target.value);
  console.log("list", list);
  list[0].images.forEach((element, index) => {
    let doc = document.createElement("div");
    doc.className = `carousel-item ${index == 0 ? "active" : ""}`;
    doc.style.height = "50vh";
    doc.style.width = "70vw";
    let img = document.createElement("img");
    img.src = element;
    img.class = "d-block w-100";
    img.style.height = "100%";
    img.style.width = "100%";
    doc.append(img);
    inner.appendChild(doc);
  });
  let prevBtn = document.createElement("button");
  prevBtn.className = "carousel-control-prev";
  prevBtn.setAttribute("data-bs-target", "#carouselExample");
  prevBtn.setAttribute("data-bs-slide", "prev");
  let prevIcon = document.createElement("span");
  prevIcon.className = "carousel-control-prev-icon";
  prevBtn.append(prevIcon);

  let nextBtn = document.createElement("button");
  nextBtn.className = "carousel-control-next";
  nextBtn.setAttribute("data-bs-target", "#carouselExample");
  nextBtn.setAttribute("data-bs-slide", "next");
  let nextIcon = document.createElement("span");
  nextIcon.className = "carousel-control-next-icon";
  nextBtn.append(nextIcon);

  mainDiv.append(inner, prevBtn, nextBtn);
  document.getElementById(teamContentContainerId).innerHTML = "";
  document.getElementById(teamContentContainerId).append(mainDiv);
  console.log(e.target);
});
