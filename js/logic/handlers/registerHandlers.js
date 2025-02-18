import { registerUser } from "../api/registerUser.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { renderLoginMessage } from "../../ui/register/renderLoginMessage.js";
import { renderRegisterForm } from "../../ui/register/renderRegisterForm.js";

export function registerHandler() {
  // render the form
  renderRegisterForm();

  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", submitForm);
  }
}

async function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  if (data.bio.trim() === "") {
    delete data.bio;
  }

  const containerMsg = document.querySelector("#message");
  const fieldset = form.querySelector("fieldset");
  const button = form.querySelector("button");

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
