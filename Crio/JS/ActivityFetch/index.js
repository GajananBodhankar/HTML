async function getGithubUsernames() {
  let response = await fetch("https://api.github.com/users");
  if (response) {
    response
      .json()
      .then((r) => displayValuesAsList(r))
      .catch((e) => console.log(e));
  }
  return null;
}

function displayValuesAsList(values) {
  let parent = document.querySelector(".list");
  values.forEach((i) => {
    let item = document.createElement("li");
    item.textContent = i.login;
    parent.append(item);
  });
}
getGithubUsernames();
