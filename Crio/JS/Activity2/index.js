function generateSortedList(arr) {
  let list = document.querySelector(".list");
  arr.sort((a, b) => a - b);
  arr.forEach((i) => {
    let item = document.createElement("li");
    item.textContent = i;
    list.append(item);
  });
}
generateSortedList([5, 4, 3, 2, 1]);
