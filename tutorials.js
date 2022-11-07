/* const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector("#input"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
}); 

 const cat = "meow";
  DOMSelectors.box.insertAdjacentHTML("afterend", `<h1>We are an ${cat}</h1>`); 

 const DOMSelectors = {
    button: document.getElementById("btn"),
    text: document.querySelector("#text"),
    box: document.getElementById("big-black-box"),
    points: document.querySelectorAll(".point"),
  };
   function backgroundAndText(background, text) {
    background.style.backgroundColor = "red";
    text.textContent = "This is now a big bigger red box";
    text.style.fontSize = "40px";
  }
  
  DOMSelectors.button.addEventListener("click", function () {
    backgroundAndText(DOMSelectors.box, DOMSelectors.text);
  });
  
  function changeLi() {
    let pointIndex = 1;
    DOMSelectors.points.forEach((point) => {
      point.addEventListener("click", function () {
        point.textContent = `Hello, I am point ${pointIndex}`;
        pointIndex++;
      });
    });
  }
  
  changeLi();
   */
