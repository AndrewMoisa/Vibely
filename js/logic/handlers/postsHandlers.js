import { displayMessage } from "../../ui/shared/displayMessage.js";
import { loadingContainer } from "../../constants/constants.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { fetchPosts } from "../api/posts.js";
import { renderPosts } from "../../ui/posts/renderPosts.js";
import { renderSearchFilter } from "../../ui/posts/renderSearchFilter.js";
import { monitorScrollForMoreContent } from "../utils/loadMoreContent.js";

export async function postsHandler() {
  try {
    const mainContainer = document.querySelector("main");

    // Clear the container
    const loadingContainer = document.querySelector("#loadingContainer");
    loadingContainer.innerHTML = "";

    const multiplePosts = await fetchPosts();
    const posts = multiplePosts.data;

    console.log(posts);

    renderSearchFilter(mainContainer);
    renderPosts(mainContainer, posts);
    monitorScrollForMoreContent(mainContainer);
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
