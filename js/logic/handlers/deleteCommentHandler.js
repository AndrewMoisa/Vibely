import { displayMessage } from "../../ui/shared/displayMessage.js";
import { deleteComment } from "../api/deleteComment.js";
import { types } from "../../ui/shared/errorsStyles.js";

export async function deleteCommentHandler(button) {
  const containerMsg = document.querySelector("#commentsContainer");
  const deleteButton = button;
  const btnId = deleteButton?.dataset.id ?? "not found";
  const postId = deleteButton?.dataset.post ?? "not found";

  if (deleteButton) {
    deleteButton.addEventListener("click", async (event) => {
      try {
        console.log("delete button clicked");
        const userConfirmed = window.confirm(
          "Are you sure you want to delete this comment?"
        );

        if (!userConfirmed) {
          return;
        }

        await deleteComment(postId, btnId);
        const commentElement = event.target.parentElement;
        if (commentElement) {
          commentElement.remove();
        }
      } catch (error) {
        displayMessage(
          containerMsg,
          types.error.classes,
          error.message,
          types.error.icon
        );
      }
    });
  }
}
