import { displayMessage } from "../../ui/shared/displayMessage.js";
import { loadingContainer } from "../../constants/constants.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { singlePost } from "../api/post.js";
import { getQueryParam } from "../../logic/shared/getQueryParam.js";
import { renderPost } from "../../ui/post/renderPost.js";

export async function postHandler() {
  try {
    const id = getQueryParam("id");
    const mainContainer = document.querySelector("main");

    // Clear the container
    document.querySelector("#loadingContainer").innerHTML = "";

    const post = await singlePost(id);

    renderPost(mainContainer, post.data);
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
