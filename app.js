/*  Dismiss message*/

const form = document.querySelector("form");
console.log(form);
const container = document.querySelector(".container");
console.log(container);
const successMsg = document.querySelector(".success-message");
console.log(successMsg);
const errorMsg = document.querySelector(".error-message");
console.log(errorMsg);
const dismissMsg = document.querySelector(".dismiss-message");
console.log(dismissMsg);
const inputBox = document.querySelector("input");
console.log(inputBox);
const wrongEmail = document.querySelector(".wrong-email");
console.log(wrongEmail);

form.addEventListener("submit", (e) => {
  e.preventDefault(); /*to stop the page from refreshing*/

  const emailValue =
    email.value.trim(); /*to remove any spaces the inputter may have input*/

  if (emailValue === "" || !isValidEmail(emailValue)) {
    errorMsg.classList.remove("hide");
    /*I also need the input box and the input to turn red here*/
    form.className = "form error "; /*NOT classList className*/
  } else {
    container.classList.add("hide");
    successMsg.classList.remove("hide");
    wrongEmail.innerHTML = emailValue;
  }
  /*Then I want to reset here so that email@company.com reappears and not the email the inputter has just put in*/
  reload();
});

dismissMsg.addEventListener("click", () => {
  container.classList.remove("hide");
});

function isValidEmail(email) {
  return /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i.test(
    email
  );
}
