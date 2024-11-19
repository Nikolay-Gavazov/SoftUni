function validate() {
  const nameInput = document.getElementById("username");
  const mailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPass = document.getElementById("confirm-password");
  const companyNum = document.getElementById("companyNumber");
  const companyInfo = document.getElementById("companyInfo");
  const companyCheck = document.getElementById("company");
  companyCheck.addEventListener("change", () => {
    if (companyCheck.checked) {
      companyInfo.style.display = "block";
    } else {
      companyInfo.style.display = "none";
    }
  });
  const submit = document.getElementById("submit");
  submit.addEventListener("click", send);
  const valid = document.getElementById("valid");
  let isName = false;
  let isMail = false;
  let isPass = false;
  let isValid = true;
  const namePattern = /^[A-Za-z0-9]+$/gm;
  const passPattern = /^[\w]+$/gm;
  const mailPattern = /.*@.*\..*/gm;
  function send(e) {
    e.preventDefault();
    if (
      nameInput.value.length > 2 &&
      nameInput.value.length < 21 &&
      namePattern.exec(nameInput.value)
    ) {
      isName = true;
      nameInput.style.border = "none";
    } else {
      nameInput.style.borderColor = "red";
      isName = false;
    }
    if (
      passwordInput.value.length > 4 &&
      passwordInput.value.length < 16 &&
      passPattern.exec(passwordInput.value) &&
      passwordInput.value == confirmPass.value
    ) {
      isPass = true;
      passwordInput.style.border = "none";
      confirmPass.style.border = "none";
    } else {
      isPass = false;
      passwordInput.style.borderColor = "red";
      confirmPass.style.borderColor = "red";
    }
    if (mailPattern.exec(mailInput.value)) {
      isMail = true;
      mailInput.style.border = "none";
    } else {
      isMail = false;
      mailInput.style.borderColor = "red";
    }
    if (companyCheck.checked) {
      if (Number(companyNum.value) > 999 && Number(companyNum.value) < 10000) {
        companyNum.style.border = "none";
        isValid = true;
      } else {
        isValid = false;
        companyNum.style.borderColor = "red";
      }
    }
    if (isValid && isName && isMail && isPass) {
      valid.style.display = "block";
    } else {
      valid.style.display = "none";
    }
  }
}

//^[a-z]+[0-9]*[\@]{1}[a-z]*[\.]*[a-z]+[\.]{1}[a-z]{2,}$
