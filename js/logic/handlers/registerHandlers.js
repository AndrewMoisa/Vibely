import { registerUser } from "../api/register.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { renderLoginMessage } from "../../ui/register/renderLoginMessage.js";

export function registerHandler() {
  const form = document.querySelector("#registerForm");
  console.log("registerHandler");

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

  if (data.bio.trim() === "") {
    delete data.bio;
  }

  const containerMsg = document.querySelector("#message");
  const fieldset = form.querySelector("fieldset");
  const button = form.querySelector("button");

  console.log(types.success);

  try {
    fieldset.disabled = true;
    button.disabled = true;
    await registerUser(data);
    displayMessage(
      containerMsg,
      types.success.classes,
      "Registration successful",
      types.success.icon
    );

    renderLoginMessage(containerMsg);

    form.reset();
  } catch (error) {
    displayMessage(
      containerMsg,
      types.error.classes,
      error.message,
      types.error.icon
    );
  } finally {
    fieldset.disabled = false;
    button.disabled = false;
  }
}
