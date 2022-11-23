const DOMSelectors = {
  input: document.querySelector("#displayplanet"),
  planet: document.getElementById("planet"),
  building: document.getElementById("#building"),
  creature: document.getElementById("creature"),
  createplanet: document.querySelector("create"),
  displayplanet: document.getElementById("displayplanet"),

  /*   delete: document.getElementById("removeplanet"), */

  winterimage: document.querySelector("#Winter"),
  wintercheckbox: document.getElementById("bwinter"),

  springimage: document.querySelector("#Spring"),
  springcheckbox: document.getElementById("bspring"),

  fallimage: document.querySelector("#Fall"),
  fallcheckbox: document.getElementById("bfall"),

  houseimage: document.querySelector("#House"),
  housecheckbox: document.getElementById("bhouse"),

  towerimage: document.querySelector("#Tower"),
  towercheckbox: document.getElementById("btower"),

  skyscraperimage: document.querySelector("#Skyscraper"),
  skyscrapercheckbox: document.getElementById("bskyscraper"),

  shackimage: document.querySelector("#Shack"),
  shackcheckbox: document.getElementById("bshack"),

  joeimage: document.querySelector("#Joe"),
  joecheckbox: document.getElementById("bjoe"),

  jonathanimage: document.querySelector("#Jonathan"),
  jonathancheckbox: document.getElementById("bjonathan"),

  johnimage: document.querySelector("#John"),
  johncheckbox: document.getElementById("bjohn"),

  void1image: document.querySelector("#Void1"),
  void1checkbox: document.getElementById("bvoid1"),

  createplanetbutton: document.getElementById("bcreate"),
  /*   sendbutton: document.getElementById("send-btn"),
  containerbox: document.getElementById("container-box"),
  outputbox: document.getElementById("output-box"),
  input: document.querySelector("#input"),
  clearbutton: document.getElementById("clear-btn"),
  sendclearbutton: document.getElementById("sendclear-btn"),
  deletebutton: document.getElementById("delete-btn"), */
};

/* DOMSelectors.displayplanet.insertAdjacentHTML(
  `beforeend`,
  `<div class = "createplanet"></div>`,
  `<button type="removeplanetButton" id="bremove" class="removeplanet">
Delete planet
</button>`
); */

/* DOMSelectors.fallbutton.addEventListener("click", function () {
  let fall = DOMSelectors.fallimage;
  fall.style.visibility = "visible";
  winter.style.visibility = "hidden";
  spring.style.visibility = "hidden";
}); */

/* bremove.addEventListener("click", function () {
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
}); */
/* 
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
 */
/* DOMSelectors.removeplanet.input.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.outputbox.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.outputbox.innerHTML = "";
}); */

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
});

let wintertf = 0;
let springtf = 0;
let housetf = 0;
let shacktf = 0;
let skyscrapertf = 0;
let towertf = 0;
let johntf = 0;
let joetf = 0;
let jonathantf = 0;
let void1tf = 0;
console.log(DOMSelectors.fallcheckbox);
DOMSelectors.fallcheckbox.addEventListener("click", function () {
  // let fall = DOMSelectors.fallimage;
  // let falltf = 1;
  if (DOMSelectors.fallcheckbox.checked) {
    console.log("The checkbox is checked");
  } else {
    spring.style.visibility = "hidden";
  }
});

DOMSelectors.wintercheckbox.addEventListener("click", function () {
  if (DOMSelectors.wintercheckbox.checked) {
    console.log("The checkbox is checked");
  } else {
  }
});

DOMSelectors.springcheckbox.addEventListener("click", function () {
  if (DOMSelectors.springcheckbox.checked) {
    console.log("The checkbox is checked");
  } else {
  }
});

DOMSelectors.housecheckbox.addEventListener("click", function () {
  if (DOMSelectors.housecheckbox.checked) {
    console.log("The checkbox is checked");
  } else {
  }
});

DOMSelectors.shackcheckbox.addEventListener("click", function () {
  if (DOMSelectors.shackcheckbox.checked) {
    console.log("The checkbox is checked");
  } else {
  }
});

DOMSelectors.skyscrapercheckbox.addEventListener("click", function () {
  if (DOMSelectors.skyscrapercheckbox.checked) {
    console.log("The checkbox is checked");
  } else {
  }
});

DOMSelectors.towercheckbox.addEventListener("click", function () {
  if (DOMSelectors.towercheckbox.checked) {
    console.log("The checkbox is checked");
  } else {
  }
});

DOMSelectors.johncheckbox.addEventListener("click", function () {
  if (DOMSelectors.johncheckbox.checked) {
    console.log("The checkbox is checked");
  } else {
  }
});

DOMSelectors.joecheckbox.addEventListener("click", function () {
  if (DOMSelectors.joecheckbox.checked) {
    console.log("The checkbox is checked");
  } else {
  }
});

DOMSelectors.jonathancheckbox.addEventListener("click", function () {
  if (DOMSelectors.jonathancheckbox.checked) {
    console.log("The checkbox is checked");
  } else {
  }
});

DOMSelectors.void1checkbox.addEventListener("click", function () {
  if (DOMSelectors.void1checkbox.checked) {
    console.log("The checkbox is checked");
  } else {
  }
});

/* DOMSelectors.createplanetbutton.addEventListener("click", function () {
  if (falltf > 0) {
    fall.style.visibility = "visible";
  }
}); */

/* DOMSelectors.displayplanet.addEventListener("click", function () {
  let createplanet = DOMSelectors.createplanet.create;
});
 */
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
