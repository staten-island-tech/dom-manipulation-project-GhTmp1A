const DOMSelectors = {
  sendbutton: document.getElementById("send-btn"),
  containerbox: document.getElementById("container-box"),
  outputbox: document.getElementById("output-box"),
  input: document.querySelector("#input"),
  clearbutton: document.getElementById("clear-btn"),
  sendclearbutton: document.getElementById("sendclear-btn"),
  deletebutton: document.getElementById("delete-btn"),
};

DOMSelectors.sendbutton.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.outputbox.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
});

DOMSelectors.clearbutton.addEventListener("click", function () {
  let input = DOMSelectors.input.remove;
  DOMSelectors.outputbox.removeAttribute("beforeend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
});

DOMSelectors.sendclearbutton.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.outputbox.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
});

DOMSelectors.deletebutton.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.outputbox.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.outputbox.innerHTML = "";
});
