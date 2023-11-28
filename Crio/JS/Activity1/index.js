function addNewChildElementToParent(parentId, childTagType, text) {
  let parent = document.querySelector(`#${parentId}`);
  if (childTagType && text) {
    parent.innerHTML =
      parent.innerHTML + `<${childTagType}>${text}</${childTagType}>`;
  }
}
addNewChildElementToParent("numbers-list", "li", 3);
addNewChildElementToParent("text-paras", "p", "hello");
