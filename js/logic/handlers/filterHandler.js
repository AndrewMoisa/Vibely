import { renderChunk } from "../../ui/posts/renderChunk.js";
import {
  sortPostsByNewestFirst,
  sortPostsByOldestFirst,
} from "..//utils/postsFilters.js";

export function filterHandler(posts, feedContainer, currentScrollListener) {
  const filter = document.getElementById("filter");

  filter.addEventListener("change", function () {
    feedContainer.innerHTML = ""; // Clear the feed container

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

    currentScrollListener = renderChunk(posts, feedContainer); // Render the initial chunk
  });
}
