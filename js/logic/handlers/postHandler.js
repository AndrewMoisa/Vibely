import { displayMessage } from "../../ui/shared/displayMessage.js";
import { loadingContainer } from "../../constants/constants.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { singlePost } from "../api/post.js";
import { getQueryParam } from "../../logic/shared/getQueryParam.js";
import { renderPost } from "../../ui/post/renderPost.js";
import { getUsername } from "../../logic/utils/storage.js";
import { formatDate } from "../utils/formatDate.js";
import { deleteButton } from "../utils/deleteButton.js";

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
    const author = post.data.author.name;

    renderPost(mainContainer, user, post.data, postDate);
    deleteButton(post.data.id, user, author);

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
