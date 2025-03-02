import { loginUser } from "../api/loginUser.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { saveToken, saveUsername } from "../utils/storage.js";

export function loginHandler() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", submitForm);
  }
}

async function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log(data);

  const containerMsg = document.querySelector("#message");
  const fieldset = form.querySelector("fieldset");
  const button = form.querySelector("button");

  try {
    fieldset.disabled = true;
    button.textContent = "Loading...";
    const response = await loginUser(data);
    console.log(response);
    const { data: userData } = response;

    console.log(userData);
    const { accessToken, name } = userData;

    saveToken(accessToken);
    saveUsername(name);

    window.location.href = "../../../profile/";
  } catch (error) {
    displayMessage(
      containerMsg,
      types.error.classes,
      error.message,
      types.error.icon
    );
  } finally {
    fieldset.disabled = false;
    button.textContent = "Submit";
  }
}
