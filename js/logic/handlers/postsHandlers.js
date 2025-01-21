import { displayMessage } from "../../ui/shared/displayMessage.js";
import { loadingContainer } from "../../constants/constants.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { fetchPosts } from "../api/posts.js";
import { renderPosts } from "../../ui/posts/renderPosts.js";
import { renderSearchFilter } from "../../ui/posts/renderSearchFilter.js";
import { getItemsInChunks } from "../utils/getItemsInChunks.js";
import { createChunkManager } from "../utils/createChunkManager.js";

export async function postsHandler() {
  try {
    const mainContainer = document.querySelector("main");

    // Clear the container
    const loadingContainer = document.querySelector("#loadingContainer");
    loadingContainer.innerHTML = "";

    const multiplePosts = await fetchPosts();
    const posts = multiplePosts.data;

    renderSearchFilter(mainContainer);
    createChunkManager(posts, mainContainer, renderPosts);

    // chunks.forEach((chunk, index) => {
    //   createChunkManager(chunks, mainContainer, renderPosts);
    // });

    // Process each chunk

    console.log(posts);
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
