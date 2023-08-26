const inputPassword = document.getElementById("input-password");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-message");
const sandiMessage = document.getElementById("sandi-message")
submitButton.addEventListener ("click", () => {
    const password = inputPassword.value;
    if(password.length > 7) {
        errorMessage.textContent = password;
        errorMessage.style.color = "green";
     } else {
        errorMessage.textContent = password;
        errorMessage.style.color = "red";
     }
});
 