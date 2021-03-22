function validatForm() {
  "use strict";
  const forms = document.getElementById("create-page");
  if (!forms.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
    forms.classList.add("was-validated");
    return false;
  }
  return true;
}
