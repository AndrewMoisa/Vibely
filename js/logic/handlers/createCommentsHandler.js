import { renderInstantComment } from "../../ui/posts/renderComment.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { createComment } from "../api/createComment.js";

export async function createCommentHandler() {
  document.querySelector("#loadingContainer").innerHTML = "";
}

export async function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  const button = form.querySelector("button");
  const buttonId = button.id;

  try {
    if (!data.body) {
      const input = form.querySelector("input[name='body']");
      input.placeholder = "Please write something";
      input.focus();
      return;
    }

    const { data: commentData } = await createComment(buttonId, data);
    renderInstantComment(commentData, event.target);
    form.reset();
  } catch (error) {
    // Handle errors and display a message to the user
    const containerMsg = document.querySelector("#messageContainer");
    displayMessage(
      containerMsg,
      types.error.classes,
      error.message || "Failed to post comment. Please try again.",
      types.error.icon
    );
  } finally {
    // Perform any cleanup or reset actions here
    // Example: Re-enable a submit button if it was disabled
    const submitButton = form.querySelector("button[type='submit']");
    if (submitButton) submitButton.disabled = false;
  }
}
