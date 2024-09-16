function validateForm() {
  console.info(`✔️ Form Submitted`);
  validateFirstname();
  validateLastname();
  validateEmail();
  validateQuerytype();
  validateMessage();
  validateCheckbox();
}

function validateFirstname() {
  const firstName = document.getElementById("firstname")?.value;
  if (firstName) {
    document.getElementById("firstname-error-message").style.visibility =
      "hidden";
    document.getElementById("firstname").style.border =
      "2px solid hsl(186, 15%, 59%)";
  } else {
    document.getElementById("firstname-error-message").style.visibility =
      "visible";
    document.getElementById("firstname").style.border =
      "2px solid hsl(0, 66%, 54%)";
  }
}
function validateLastname() {
  const lastName = document.getElementById("lastname")?.value;
  if (lastName) {
    document.getElementById("lastname-error-message").style.visibility =
      "hidden";
    document.getElementById("lastname").style.border =
      "2px solid hsl(186, 15%, 59%)";
  } else {
    document.getElementById("lastname-error-message").style.visibility =
      "visible";
    document.getElementById("lastname").style.border =
      "2px solid hsl(0, 66%, 54%)";
  }
}
function validateEmail() {
  const email = document.getElementById("email")?.value;

  if (email) {
    document.getElementById("email-error-message").style.visibility = "hidden";
    document.getElementById("email").style.border =
      "2px solid hsl(186, 15%, 59%)";
  } else {
    document.getElementById("email-error-message").style.visibility = "visible";
    document.getElementById("email").style.border =
      "2px solid hsl(0, 66%, 54%)";
  }
}
function validateQuerytype() {
  const enquiryType = document.getElementById("generalquery")?.checked;
  const supportType = document.getElementById("supportquery")?.checked;
  if (enquiryType || supportType) {
    document.getElementById("query-error-message").style.visibility = "hidden";
  } else {
    document.getElementById("query-error-message").style.visibility = "visible";
  }
}
function validateMessage() {
  const message = document.getElementById("message")?.value;

  if (message) {
    document.getElementById("checkbox-error-message").style.visibility =
      "hidden";
    document.getElementById("message").style.border =
      "2px solid hsl(186, 15%, 59%)";
  } else {
    document.getElementById("checkbox-error-message").style.visibility =
      "visible";
    document.getElementById("message").style.border =
      "2px solid hsl(0, 66%, 54%)";
  }
}
function validateCheckbox() {
  const checkbox = document.getElementById("checkbox")?.checked;
  if (checkbox) {
    document.getElementById("subcheckbox-error-message").style.visibility =
      "hidden";
  } else {
    document.getElementById("subcheckbox-error-message").style.visibility =
      "visible";
  }
}
