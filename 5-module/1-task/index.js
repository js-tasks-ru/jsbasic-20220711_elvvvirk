function hideSelf() {
  // ваш код...
  const elem = document.querySelector(".hide-self-button");
  console.log(elem)
  elem.addEventListener("click", () => elem.hidden = true)
}
