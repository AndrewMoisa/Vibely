import { renderCreatePost } from "../../ui/createPost/renderCreatePost.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { createPost } from "../api/createPosts.js";

export async function createPostHandler() {
  document.querySelector("#loadingContainer").innerHTML = "";
  const container = document.querySelector("#feedContainer");
  container.innerHTML = "";

  renderCreatePost("Create");

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

  try {
    fieldset.disabled = true;
    button.disabled = true;
    await createPost(data);
    displayMessage(
      containerMsg,
      types.success.classes,
      "Post created successful",
      types.success.icon
    );

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
