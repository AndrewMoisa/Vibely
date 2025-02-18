import { renderChunk } from "../../ui/multiplePosts/renderChunk.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import {
  sortPostsByNewestFirst,
  sortPostsByOldestFirst,
} from "..//utils/postsFilters.js";
import { types } from "../../ui/shared/errorsStyles.js";

export function filterHandler(posts, feedContainer, currentScrollListener) {
  const filter = document.getElementById("filter");

  filter.addEventListener("change", function () {
    try {
      feedContainer.innerHTML = "";

      // Clean up the previous scroll listener
      if (currentScrollListener) {
        window.removeEventListener("scroll", currentScrollListener);
      }

      // Determine which posts to display based on the selected filter
      let postsToDisplay;

      // Sort posts based on the selected value
      if (this.value === "recent") {
        postsToDisplay = sortPostsByNewestFirst(posts);
      } else if (this.value === "oldest") {
        postsToDisplay = sortPostsByOldestFirst(posts);
      }

      currentScrollListener = renderChunk(postsToDisplay, feedContainer); // Render the initial chunk
    } catch (error) {
      displayMessage(
        feedContainer,
        types.error.classes,
        error.message,
        types.error.icon
      );
    }
  });
}
