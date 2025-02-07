import { displayMessage } from "../../ui/shared/displayMessage.js";
import { loadingContainer } from "../../constants/constants.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { fetchSinglePost } from "../api/fetchSinglePost.js";
import { getQueryParam } from "../../logic/shared/getQueryParam.js";
import { getUsername } from "../../logic/utils/storage.js";
import { deleteButton } from "../../ui/singlePost/deleteButton.js";
import { renderPosts } from "../../ui/multiplePosts/renderPosts.js";
import { createCommentHandler } from "./createCommentsHandler.js";
import { initialPost } from "../../ui/singlePost/initialPost.js";

export async function postHandler() {
  try {
    const id = getQueryParam("id");
    const name = getQueryParam("name");
    const user = getUsername();

    const mainContainer = document.querySelector("#feedContainer");
    const section = document.createElement("section");
    section.classList.add("singlePost");

    // Clear the container
    const loadingContainer = document.querySelector("#loadingContainer");
    loadingContainer.innerHTML = "";

    const { data: data } = await fetchSinglePost(id);
    const author = data.author.name;

    initialPost(mainContainer, name); // Render the initial post
    renderPosts(mainContainer, [data]); // Render the post content related to infinite scroll
    createCommentHandler(); // Create a comment
    // Delete button
    deleteButton(data.id, user, author, mainContainer);

    const editButton = document.querySelector("#editButton");
    if (user !== author) {
      editButton.style.display = "none";
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
}
