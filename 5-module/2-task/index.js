function toggleText() {
  // ваш код...
  let button = document.querySelector(".toggle-text-button")
  let text = document.getElementById("text")
  console.log (text)
  button.addEventListener("click", () => {
    text.hidden = !text.hidden
  })
}
