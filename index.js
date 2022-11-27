const DOMSelectors = {
  create: document.querySelector("#submit"),
  buttons: document.querySelector("#buttons"),
  text: document.getElementById("text"),
  review: document.getElementById("review"),
  image: document.getElementById("url"),
  display: document.getElementById("display"),
  form: document.getElementById("form"),
};

DOMSelectors.create.addEventListener("click", function () {
  let text = DOMSelectors.text.value;
  let review = DOMSelectors.review.value;
  let image = DOMSelectors.image.value;

  DOMSelectors.display.insertAdjacentHTML(
    "afterend",
    `   
        <div id=displaycard2>
        <div id="displaycard">
        <p class="displaytext">${text}</p> 
        <img class= "displayimage height="100px" src= ${image}></p>
        <br>
        <p class="displayreview">${review}</p>
        <p><button type="button" id="cdelete"> Delete your creation?</button> </p>
        </div>
        </div>
    `
  );
  DOMSelectors.text.value = "";
  DOMSelectors.review.value = "";
  DOMSelectors.image.value = "";

  DOMSelectors.form.addEventListener("click", (e) => {
    e.preventDefault();
  });

  let cdeleted = document.getElementById("cdelete");
  let displaycard = document.getElementById("displaycard");

  cdeleted.addEventListener("click", function () {
    displaycard.remove();
    cdeleted.remove();
  });
});
console.log(DOMSelectors);
