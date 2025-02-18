import { displayMessage } from "../../ui/shared/displayMessage.js";
import { loadingContainer } from "../../constants/constants.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { fetchMultiplePosts } from "../api/fetchMultiplePosts.js";
import { renderSearchFilter } from "../../ui/multiplePosts/renderSearchFilter.js";
import { filterHandler } from "./filterHandler.js";
import { renderChunk } from "../../ui/multiplePosts/renderChunk.js";
import { searchHandler } from "./searchHandler.js";
import { createCommentHandler } from "./createCommentsHandler.js";

export async function postsHandler() {
  try {
    const mainContainer = document.querySelector("#filterContainer");
    const feedContainer = document.querySelector("#feedContainer");

    // Clear the container
    const loadingContainer = document.querySelector("#loadingContainer");
    loadingContainer.innerHTML = "";
    feedContainer.innerHTML = "";

    // Fetch posts
    const { data: posts } = await fetchMultiplePosts();

    let currentScrollListener = null; // Track the current scroll listener

    // Render posts
    currentScrollListener = renderChunk(
      posts,
      feedContainer,
      currentScrollListener
    );

    // Render Search Filter
    renderSearchFilter(mainContainer);

    // Filter handling
    filterHandler(posts, feedContainer, currentScrollListener);

    // handle Search
    searchHandler(feedContainer, currentScrollListener);

    createCommentHandler();
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
