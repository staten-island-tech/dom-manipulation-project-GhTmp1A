const DOMSelectors = {
  input: document.querySelector("#display"),
  planet: document.getElementById("planet"),
  building: document.getElementById("#building"),
  creature: document.getElementById("creature"),
  display: document.getElementById("display"),
  /*   delete: document.getElementById("removeplanet"), */

  winterimage: document.querySelector("#Winter"),
  winterbutton: document.getElementById("bwinter"),

  springimage: document.querySelector("#Spring"),
  springbutton: document.getElementById("bspring"),

  fallimage: document.querySelector("#Fall"),
  fallbutton: document.getElementById("bfall"),

  houseimage: document.querySelector("#House"),
  housebutton: document.getElementById("bhouse"),

  towerimage: document.querySelector("#Tower"),
  towerbutton: document.getElementById("btower"),

  skyscraperimage: document.querySelector("#Skyscraper"),
  skyscraperbutton: document.getElementById("bskyscraper"),

  shackimage: document.querySelector("#Shack"),
  shackbutton: document.getElementById("bshack"),

  joeimage: document.querySelector("#Joe"),
  joebutton: document.getElementById("bjoe"),

  jonathanimage: document.querySelector("#Jonathan"),
  jonathanbutton: document.getElementById("bjonathan"),

  johnimage: document.querySelector("#John"),
  johnbutton: document.getElementById("bjohn"),

  voidimage: document.querySelector("#Void"),
  voidbutton: document.getElementById("bvoid"),
  /*   sendbutton: document.getElementById("send-btn"),
  containerbox: document.getElementById("container-box"),
  outputbox: document.getElementById("output-box"),
  input: document.querySelector("#input"),
  clearbutton: document.getElementById("clear-btn"),
  sendclearbutton: document.getElementById("sendclear-btn"),
  deletebutton: document.getElementById("delete-btn"), */
};
DOMSelectors.winterbutton.addEventListener("click", function () {
  let winter = DOMSelectors.winterimage;
  winter.style.visibility = "visible";
});

DOMSelectors.housebutton.addEventListener("click", function () {
  let house = DOMSelectors.houseimage;
  house.style.visibility = "visible";
});

DOMSelectors.johnbutton.addEventListener("click", function () {
  let john = DOMSelectors.johnimage;
  john.style.visibility = "visible";
});

function makeCard() {
  DOMSelectors.input.addEventListener("submit", function () {
    let input = DOMSelectors.input.value;
    DOMSelectors.display.insertAdjacentElement("beforeend", `<p>${input}</p>`);
  });
}

/* DOMSelectors.removeplanet.input.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.outputbox.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.outputbox.innerHTML = "";
}); */

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
});

/* 
DOMSelectors.input.addEventListener("click", function () {
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
 */
