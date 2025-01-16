import { deletePost } from "../api/deletePost.js";

export function deleteButton(id, user, author) {
  const deleteButton = document.querySelector("#deleteButton");

  console.log(user);

  if (user !== author) {
    deleteButton.style.display = "none";
  }

  if (deleteButton) {
    deleteButton.addEventListener("click", async () => {
      const response = await deletePost(id);

      if (response.status === 204) {
        location.href = "/profile/";
      } else {
        throw new Error("Could not delete the post.");
      }
    });
  }
}
