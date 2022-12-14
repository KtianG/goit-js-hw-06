const loginForm = document.querySelector(".login-form");

const checkLoginForm = (event) => {
  //Podczas przesyłania formularza strona nie powinna się restartować
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  //Jeśli w formularzu są nieuzupełnione pola, wprowadź alert z upomnieniem o tym,
  //że wszystkie pola powinny zostać wypełnione
  if (email.value === "" || password.value === "") {
    alert("Wszystkie pola powinny zostać wypełnione.");
  } else {
    //Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz,
    //zbierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości,
    //a wartość pola - wartością właściwości.
    //Aby otrzymać dostęp do elementów formularza użyj właściwości elements
    const loginData = {
      email: email.value,
      password: password.value,
    };
    //Umieść obiekt z wprowadzonymi danymi do wiersza poleceń
    //i wyczyść wartości pól formularza metodą reset
    console.log(loginData);
    loginForm.reset();
  }
};

//Opracowanie przesyłania formularza form.login-form powinno przebiegać zgodnie ze zdarzeniem submit
loginForm.addEventListener("submit", checkLoginForm);
