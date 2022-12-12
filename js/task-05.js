let nameShown = "Anonymous";

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function handleInput(event) {
  event.preventDefault();
  const nameSent = event.currentTarget.value;

  if (nameSent === "") {
    nameShown = "Anonymous";
  } else {
    nameShown = nameSent;
  }
  output.textContent = nameShown;
}

input.addEventListener("input", handleInput);
