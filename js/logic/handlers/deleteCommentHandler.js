import { deleteComment } from "../api/deleteComment.js";

export async function deleteCommentHandler(button) {
  const deleteButton = button;
  const btnId = deleteButton?.dataset.id ?? "not found";
  const postId = deleteButton?.dataset.post ?? "not found";

  if (deleteButton) {
    deleteButton.addEventListener("click", async (event) => {
      console.log("delete button clicked");
      window.confirm("Are you sure you want to delete this comment?");
      const response = await deleteComment(postId, btnId);
      const commentElement = event.target.parentElement;
      if (commentElement) {
        commentElement.remove();
      }
    });
  } else {
    throw new Error("Could not find the delete button.");
  }
}
