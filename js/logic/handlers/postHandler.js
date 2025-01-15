import { displayMessage } from "../../ui/shared/displayMessage.js";
import { loadingContainer } from "../../constants/constants.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { singlePost } from "../api/post.js";
import { getQueryParam } from "../../logic/shared/getQueryParam.js";
import { renderPost } from "../../ui/post/renderPost.js";
import { getUsername } from "../../logic/utils/storage.js";
import { formatDate } from "../../ui/shared/formatDate.js";
import { deletePost } from "../api/deletePost.js";

export async function postHandler() {
  try {
    const id = getQueryParam("id");
    const user = getUsername();

    const mainContainer = document.querySelector("main");

    // Clear the container
    const loadingContainer = document.querySelector("#loadingContainer");
    loadingContainer.innerHTML = "";

    const post = await singlePost(id);
    const postDate = formatDate(post.data.created);

    renderPost(mainContainer, user, post.data, postDate);

    const deleteButton = document.querySelector("#deleteButton");
    deleteButton.style.display = user === post.data.author ? "block" : "none";

    if (deleteButton) {
      deleteButton.addEventListener("click", async () => {
        try {
          const response = await deletePost(id);

          if (response.status === 204) {
            location.href = "/profile/";
          } else {
            throw new Error("Could not delete the post.");
          }
        } catch (error) {
          console.log(error);
          displayMessage(
            loadingContainer,
            types.error.classes,
            error.message,
            types.error.icon
          );
        }
      });
    }
  } catch (error) {
    console.log(error);
    displayMessage(
      loadingContainer,
      types.error.classes,
      error.message,
      types.error.icon
    );
  } finally {
  }
}
