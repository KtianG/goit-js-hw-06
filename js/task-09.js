function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector("button.change-color");
const colorSpan = document.querySelector("span.color");
const body = document.querySelector("body");

const changeColor = () => {
  const newColor = getRandomHexColor();

  //zmienia kolor tła elementu <body> poprzez style inline
  body.style.backgroundColor = newColor;

  //wprowadza wartość koloru do span.color
  colorSpan.textContent = newColor;
};

button.addEventListener("click", changeColor);
