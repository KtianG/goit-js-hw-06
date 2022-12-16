function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("div#controls");
const input = controls.querySelector("input");
const boxes = document.querySelector("div#boxes");
let boxSize = 0;

//Utwórz funkcję createBoxes(amount), która bierze jeden parametr - liczbę.
//Funkcja tworzy tyle <div>, ile ukazano w amount i dodaje je do div#boxes

function createBoxes(amount) {
  let markup = "";

  for (let i = 0; i < amount; i++) {
    console.log(i);
    const boxColor = getRandomHexColor();
    markup += `<div style="background-color:${boxColor}; width: ${
      30 + 10 * boxSize
    }px; height: ${30 + 10 * boxSize}px;"></div>`;
    boxSize += 1;
  }
  boxes.insertAdjacentHTML("beforeend", markup);
}

//Utwórz funkcję destroyBoxes(),
//która usuwa zawartość div#boxes, tym samym usuwając wszystkie utworzone elementy.
function destroyBoxes() {
  console.log("DESTROY");
  boxes.innerHTML = "";
  boxSize = 0;
}

const clickHandler = (event) => {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  if (event.target.dataset.create === "") {
    const amount = input.value;
    createBoxes(amount);
  }

  if (event.target.dataset.destroy === "") {
    destroyBoxes();
  }
};

controls.addEventListener("click", clickHandler);
