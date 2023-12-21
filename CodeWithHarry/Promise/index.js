async function fetchApiData() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (res) {
    let result = await res.json();
    return result;
  }
  return null;
}
async function fetchdata() {
  console.log("One");
  console.log("Two");
  try {
    var data = await fetchApiData();
  } catch (e) {
    console.log(e);
  }

  console.log(data);
  console.log("Done");
}

fetchdata();
