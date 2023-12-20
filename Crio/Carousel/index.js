async function LoadCarousel(id) {
  let mainDiv = document.getElementById("car-content");

  let carouselDiv = document.createElement("div");
  carouselDiv.className = "carousel slide";
  carouselDiv.id = "carouselIndicators";
  carouselDiv.innerHTML = `
  <div class="carousel-inner"></div>
  <button
    type="button"
    class="carousel-control-prev"
    data-bs-target="#carouselIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button
    type="button"
    class="carousel-control-next"
    data-bs-target="#carouselIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon"></span>
  </button>
  `;
  mainDiv.innerHTML = "";
  mainDiv.append(carouselDiv);

  let data = await fetchData(id);
  let dataToBeAppended = appendData(data.items);
  document.getElementById("carouselIndicators").append(dataToBeAppended);
}

async function fetchData(params) {
  var link = "";
  if (params == "One") {
    link =
      "https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@dfletcher/india-tech-b2meqpd6z.rss";
  } else if (params == "two") {
    link =
      "https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/topic/indiansports.rss";
  } else {
    link =
      "https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@thenewsdesk/the-latest-on-coronavirus-covid-19-t82no8kmz.rss";
  }
  let response = await fetch(link);
  if (response) {
    return response.json();
  }
  console.log(response.json(), params, link);
  return null;
}

function appendData(data) {
  let innerClass = document.querySelector(".carousel-inner");
  innerClass.innerHTML = "";
  data.forEach((i, j) => {
    if (i.enclosure.link) {
      let item = document.createElement("div");
      item.className = j == 0 ? `carousel-item active` : `carousel-item`;
      let img = document.createElement("img");
      img.src = i.enclosure.link;
      img.className = "d-block w-100";
      img.style.objectFit = "fill";
      img.style.height = "30rem";
      item.append(img);
      innerClass.appendChild(item);
    }
  });
  console.log(innerClass);
  return innerClass;
}

document.querySelector("#group").addEventListener("click", (e) => {
  LoadCarousel(e.target.id);
});
