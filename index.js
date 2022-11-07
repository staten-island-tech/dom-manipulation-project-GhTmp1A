const DOMSelectors = {
  button: document.getElementById("send-btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector("#input"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
});
