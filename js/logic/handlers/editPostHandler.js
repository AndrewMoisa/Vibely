import { displayMessage } from "../../ui/shared/displayMessage.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { editPost } from "../api/editPost.js";
import { renderCreatePost } from "../../ui/createPost/renderCreatePost.js";
import { getQueryParam } from "../shared/getQueryParam.js";

export async function editPostHandler() {
  document.querySelector("#loadingContainer").innerHTML = "";

  renderCreatePost("Edit");

  const form = document.querySelector("#createPost");
  if (form) {
    form.addEventListener("submit", submitForm);
  }
}

async function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  if (data.mediaUrl || data.mediaAlt) {
    data.media = {};

    if (data.mediaUrl) {
      data.media.url = data.mediaUrl.trim();
    }

    if (data.mediaAlt) {
      data.media.alt = data.mediaAlt.trim();
    }

    delete data.mediaUrl;
    delete data.mediaAlt;
  } else {
    delete data.mediaUrl;
    delete data.mediaAlt;
  }

  const containerMsg = document.querySelector("#message");
  const fieldset = form.querySelector("fieldset");
  const button = form.querySelector("button");
  const id = getQueryParam("id");

  try {
    fieldset.disabled = true;
    button.disabled = true;
    await editPost(id, data);
    console.log(data);
    displayMessage(
      containerMsg,
      types.success.classes,
      "Post edited successful",
      types.success.icon
    );
    form.reset();

    setTimeout(() => {
      location.href = `/post/?id=${id}`;
    }, 2000);
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
