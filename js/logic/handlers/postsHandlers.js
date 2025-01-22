import { displayMessage } from "../../ui/shared/displayMessage.js";
import { loadingContainer } from "../../constants/constants.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { fetchPosts } from "../api/posts.js";
import { renderPosts } from "../../ui/posts/renderPosts.js";
import { renderSearchFilter } from "../../ui/posts/renderSearchFilter.js";
import { createChunkManager } from "../utils/createChunkManager.js";
import { scrollForMoreContent } from "../utils/scrollForMoreContent.js";
import { filterHandler } from "./filterHandler.js";

export async function postsHandler() {
  try {
    const mainContainer = document.querySelector("#filterContainer");
    const feedContainer = document.querySelector("#feedContainer");

    // Clear the container
    const loadingContainer = document.querySelector("#loadingContainer");
    loadingContainer.innerHTML = "";

    // Fetch posts
    const multiplePosts = await fetchPosts();
    const posts = multiplePosts.data;

    // Initial rendering
    renderSearchFilter(mainContainer);
    const chunksWithPosts = createChunkManager(
      posts,
      feedContainer,
      renderPosts
    );
    renderPosts(feedContainer, chunksWithPosts.currentChunk);
    scrollForMoreContent(chunksWithPosts.nextChunk);

    // Filter handling
    filterHandler(chunksWithPosts, posts, feedContainer);
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
