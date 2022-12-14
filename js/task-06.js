const input = document.querySelector("#validation-input");

const checkLength = (event) => {
  const symbols = event.currentTarget.value;

  if (symbols.length === parseInt(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", checkLength);
