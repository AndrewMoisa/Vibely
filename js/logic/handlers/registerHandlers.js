import { registerUser } from "../api/register.js";

export function registerHandler() {
  const form = document.querySelector("#registerForm");
  console.log("registerHandler");

  if (form) {
    form.addEventListener("submit", submitForm);
  }
}

function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  if (data.bio.trim() === "") {
    delete data.bio;
  }

  //   if (data.avatar.url.trim() === "") {
  //     delete data.avatar.url;
  //   } else {
  //     data.avatar = {
  //       url: data.avatar.url,
  //       alt: `${data.name}'s avatar`,
  //     };
  //     delete data.avatarUrl;
  //   }

  registerUser(data);
}
