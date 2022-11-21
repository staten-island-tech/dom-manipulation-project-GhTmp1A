const DOMSelectors = {
  input: document.querySelector("#displayplanet"),
  planet: document.getElementById("planet"),
  building: document.getElementById("#building"),
  creature: document.getElementById("creature"),
  createplanet: document.querySelector("create"),
  displayplanet: document.getElementById("displayplanet"),

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

  void1image: document.querySelector("#Void1"),
  void1button: document.getElementById("bvoid1"),

  createplanetbutton: document.getElementById("bcreate"),
  removeplanet: document.getElementById("bremove"),
  /*   sendbutton: document.getElementById("send-btn"),
  containerbox: document.getElementById("container-box"),
  outputbox: document.getElementById("output-box"),
  input: document.querySelector("#input"),
  clearbutton: document.getElementById("clear-btn"),
  sendclearbutton: document.getElementById("sendclear-btn"),
  deletebutton: document.getElementById("delete-btn"), */
};

DOMSelectors.displayplanet.insertAdjacentHTML(
  `beforeend`,
  `<div class = "createplanetfull"></div>`,
  `<button type="removeplanetButton" id="bremove" class="removeplanet">
Delete planet
</button>`
);

DOMSelectors.fallbutton.addEventListener("click", function () {
  let fall = DOMSelectors.fallimage;
  fall.style.visibility = "visible";
  winter.style.visibility = "hidden";
  spring.style.visibility = "hidden";
});

bremove.addEventListener("click", function () {
  bremove.remove();

  fall.style.visibility = "hidden";
  winter.style.visibility = "hidden";
  spring.style.visibility = "hidden";
  house.style.visibility = "hidden";
  shack.style.visibility = "hidden";
  skyscraper.style.visibility = "hidden";
  tower.style.visibility = "hidden";
  joe.style.visibility = "hidden";
  john.style.visibility = "hidden";
  jonathan.style.visibility = "hidden";
  void1.style.visibility = "hidden";
});

DOMSelectors.winterbutton.addEventListener("click", function () {
  let winter = DOMSelectors.winterimage;
  fall.style.visibility = "hidden";
  winter.style.visibility = "visible";
  spring.style.visibility = "hidden";
});

DOMSelectors.springbutton.addEventListener("click", function () {
  let spring = DOMSelectors.springimage;
  fall.style.visibility = "hidden";
  winter.style.visibility = "hidden";
  spring.style.visibility = "visible";
});

DOMSelectors.housebutton.addEventListener("click", function () {
  let house = DOMSelectors.houseimage;
  house.style.visibility = "visible";
  shack.style.visibility = "hidden";
  skyscraper.style.visibility = "hidden";
  tower.style.visibility = "hidden";
});

DOMSelectors.shackbutton.addEventListener("click", function () {
  let shack = DOMSelectors.shackimage;
  house.style.visibility = "hidden";
  shack.style.visibility = "visible";
  skyscraper.style.visibility = "hidden";
  tower.style.visibility = "hidden";
});

DOMSelectors.skyscraperbutton.addEventListener("click", function () {
  let skyscraper = DOMSelectors.skyscraperimage;
  house.style.visibility = "hidden";
  shack.style.visibility = "hidden";
  skyscraper.style.visibility = "visible";
  tower.style.visibility = "hidden";
});

DOMSelectors.towerbutton.addEventListener("click", function () {
  let tower = DOMSelectors.towerimage;
  house.style.visibility = "hidden";
  shack.style.visibility = "hidden";
  skyscraper.style.visibility = "hidden";
  tower.style.visibility = "visible";
});

DOMSelectors.johnbutton.addEventListener("click", function () {
  let john = DOMSelectors.johnimage;
  joe.style.visibility = "hidden";
  john.style.visibility = "visible";
  jonathan.style.visibility = "hidden";
  void1.style.visibility = "hidden";
});

DOMSelectors.joebutton.addEventListener("click", function () {
  let joe = DOMSelectors.joeimage;
  joe.style.visibility = "visible";
  john.style.visibility = "hidden";
  jonathan.style.visibility = "hidden";
  void1.style.visibility = "hidden";
});

DOMSelectors.jonathanbutton.addEventListener("click", function () {
  let jonathan = DOMSelectors.jonathanimage;
  joe.style.visibility = "hidden";
  john.style.visibility = "hidden";
  jonathan.style.visibility = "visible";
  void1.style.visibility = "hidden";
});

DOMSelectors.void1button.addEventListener("click", function () {
  let void1 = DOMSelectors.void1image;
  joe.style.visibility = "hidden";
  john.style.visibility = "hidden";
  jonathan.style.visibility = "hidden";
  void1.style.visibility = "visible";
});

/* DOMSelectors.removeplanet.input.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.outputbox.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.outputbox.innerHTML = "";
}); */

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
});

/*

const falltf = 0;
const wintertf = 0;
const springtf = 0;
const housetf = 0;
const shacktf = 0;
const skyscrapertf = 0;
const towertf = 0;
const johntf = 0;
const joetf = 0;
const jonathantf = 0;
const void1tf = 0;

DOMSelectors.fallbutton.addEventListener("click", function () {
  let fall = DOMSelectors.fallimage;
  let falltf = 1;
  if (falltf > 0) {
    fall.style.visibility;
  } else {
    fall.style.visibility;
  }
});

DOMSelectors.winterbutton.addEventListener("click", function () {
  let winter = DOMSelectors.winterimage;
  let wintertf = 1;
  if (wintertf > 0) {
    fall.style.visibility = "hidden";
    spring.style.visibility = "hidden";
    winter.style.visibility = "visible";
  } else {
    fall.style.visibility = "hidden";
    spring.style.visibility = "hidden";
    winter.style.visibility = "hidden";
  }
});

DOMSelectors.springbutton.addEventListener("click", function () {
  let spring = DOMSelectors.springimage;
  let springtf = 1;
  if (springtf > 0) {
    fall.style.visibility = "hidden";
    spring.style.visibility = "visible";
    winter.style.visibility = "hidden";
  } else {
    fall.style.visibility = "hidden";
    spring.style.visibility = "hidden";
    winter.style.visibility = "hidden";
  }
});

DOMSelectors.housebutton.addEventListener("click", function () {
  let house = DOMSelectors.houseimage;
  let housetf = 1;
  if (housetf > 0) {
    house.style.visibility = "visible";
    shack.style.visibility = "hidden";
    skyscraper.style.visibility = "hidden";
    tower.style.visibility = "hidden";
  } else {
    house.style.visibility = "hidden";
    shack.style.visibility = "hidden";
    skyscraper.style.visibility = "hidden";
    tower.style.visibility = "hidden";
  }
});

DOMSelectors.shackbutton.addEventListener("click", function () {
  let shack = DOMSelectors.shackimage;
  let shacktf = 1;
  if (shacktf > 0) {
    house.style.visibility = "hidden";
    shack.style.visibility = "visible";
    skyscraper.style.visibility = "hidden";
    tower.style.visibility = "hidden";
  } else {
    house.style.visibility = "hidden";
    shack.style.visibility = "hidden";
    skyscraper.style.visibility = "hidden";
    tower.style.visibility = "hidden";
  }
});

DOMSelectors.skyscraperbutton.addEventListener("click", function () {
  let skyscraper = DOMSelectors.skyscraperimage;
  let skyscrapertf = 1;
  if (skyscrapertf > 0) {
    house.style.visibility = "hidden";
    shack.style.visibility = "hidden";
    skyscraper.style.visibility = "visible";
    tower.style.visibility = "hidden";
  } else {
    house.style.visibility = "hidden";
    shack.style.visibility = "hidden";
    skyscraper.style.visibility = "hidden";
    tower.style.visibility = "hidden";
  }
});

DOMSelectors.towerbutton.addEventListener("click", function () {
  let tower = DOMSelectors.towerimage;
  let towertf = 1;
  if (towertf > 0) {
    house.style.visibility = "hidden";
    shack.style.visibility = "hidden";
    skyscraper.style.visibility = "hidden";
    tower.style.visibility = "visible";
  } else {
    house.style.visibility = "hidden";
    shack.style.visibility = "hidden";
    skyscraper.style.visibility = "hidden";
    tower.style.visibility = "hidden";
  }
});

DOMSelectors.johnbutton.addEventListener("click", function () {
  let john = DOMSelectors.johnimage;
  let johntf = 1;
  if (johntf > 0) {
    john.style.visibility = "visible";
    joe.style.visibility = "hidden";
    jonathan.style.visibility = "hidden";
    void1.style.visibility = "hidden";
  } else {
    john.style.visibility = "hidden";
    joe.style.visibility = "hidden";
    jonathan.style.visibility = "hidden";
    void1.style.visibility = "hidden";
  }
});

DOMSelectors.joebutton.addEventListener("click", function () {
  let joe = DOMSelectors.joeimage;
  let joetf = 1;
  if (joetf > 0) {
    john.style.visibility = "hidden";
    joe.style.visibility = "visible";
    jonathan.style.visibility = "hidden";
    void1.style.visibility = "hidden";
  } else {
    john.style.visibility = "hidden";
    joe.style.visibility = "hidden";
    jonathan.style.visibility = "hidden";
    void1.style.visibility = "hidden";
  }
});

DOMSelectors.jonathanbutton.addEventListener("click", function () {
  let jonathan = DOMSelectors.jonathanimage;
  let jonathantf = 1;
  if (jonathantf > 0) {
    john.style.visibility = "hidden";
    joe.style.visibility = "hidden";
    jonathan.style.visibility = "visible";
    void1.style.visibility = "hidden";
  } else {
    john.style.visibility = "hidden";
    joe.style.visibility = "hidden";
    jonathan.style.visibility = "hidden";
    void1.style.visibility = "hidden";
  }
});

DOMSelectors.void1button.addEventListener("click", function () {
  let void1 = DOMSelectors.void1image;
  let void1tf = 1;
  if (void1tf > 0) {
    john.style.visibility = "hidden";
    joe.style.visibility = "hidden";
    jonathan.style.visibility = "hidden";
    void1.style.visibility = "visible";
  } else {
    john.style.visibility = "hidden";
    joe.style.visibility = "hidden";
    jonathan.style.visibility = "hidden";
    void1.style.visibility = "hidden";
  }
});

DOMSelectors.createplanetbutton.addEventListener("click", function () {
  if (falltf > 0) {
    fall.style.visibility = "visible";
  }
});
*/
DOMSelectors.displayplanet.addEventListener("click", function () {
  let createplanet = DOMSelectors.createplanet.create;
});

function makeCard() {
  DOMSelectors.input.addEventListener("submit", function () {
    let input = DOMSelectors.input.value;
    DOMSelectors.display.insertAdjacentElement("beforeend", `<p>${input}</p>`);
  });
}

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
