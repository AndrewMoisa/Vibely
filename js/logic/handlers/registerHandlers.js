import { registerUser } from "../api/register.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { types } from "../../ui/shared/errorsStyles.js";

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

  // if (data.profileImage.trim() === "") {
  //   delete data.avatar;
  // // } else {
  // //   data.avatar = {
  // //     url: data.avatar.url,
  // //     alt: `${data.name}'s avatar`,
  // //   };
  // //   delete data.avatarUrl;
  // // }

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

    containerMsg.innerHTML += `
    <div>
          <p class="text-center text-sm text-gray-400 pt-5">
            You can now log in with your new account.
            <a class="text-blue-500" href="/">Log in</a>
          </p>
        </div>`;

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
