import { createChunkManager } from "../utils/createChunkManager.js";
import { scrollForMoreContent } from "../utils/scrollForMoreContent.js";
import { renderPosts } from "../../ui/posts/renderPosts.js";

export function filterHandler(initialChunk, posts, feedContainer) {
  const filter = document.getElementById("filter");
  filter.addEventListener("change", function () {
    feedContainer.innerHTML = ""; // Clear the feed container

    // Determine which posts to display based on the selected filter
    let postsToDisplay;
    if (this.value === "recent") {
      postsToDisplay = sortPostsByNewestFirst(initialChunk.currentChunk); // Display the posts as they are
    } else if (this.value === "oldest") {
      postsToDisplay = sortPostsByOldestFirst(posts); // Sort posts from oldest to most recent
    }

    // Initialize the chunk manager with the appropriate posts
    const chunkManager = createChunkManager(
      postsToDisplay,
      feedContainer,
      renderPosts
    );

    // Render the posts
    renderPosts(feedContainer, chunkManager.currentChunk);

    // Set up infinite scrolling for more content
    scrollForMoreContent(chunkManager.nextChunk);

    function sortPostsByOldestFirst(posts) {
      return posts.sort((a, b) => {
        const dateA = new Date(a.created).getTime();
        const dateB = new Date(b.created).getTime();
        return dateA - dateB; // Sort in ascending order (oldest first)
      });
    }
    function sortPostsByNewestFirst(posts) {
      return posts.sort((a, b) => {
        const dateA = new Date(a.created).getTime();
        const dateB = new Date(b.created).getTime();
        return dateB - dateA; // Sort in descending order (newest first)
      });
    }
  });
}
