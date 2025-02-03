import { infiniteScrollingContent } from "../../logic/utils/infiniteScrollingContent.js";
import { renderPosts } from "./renderPosts.js";
import { chunkArray } from "../../logic/utils/chunkArray.js";

// Function to render a chunk of posts
export function renderChunk(posts, feedContainer, currentScrollListener) {
  let currentChunkIndex = 0; // Track the current chunk index
  // Track the current scroll listener

  // Split the posts into chunks of 10
  const chunkedPosts = chunkArray(posts, 10);

  // Function to render the next chunk of posts
  function renderNextChunk() {
    if (currentChunkIndex >= chunkedPosts.length) {
      // Stop rendering if there are no more posts
      if (currentScrollListener) {
        window.removeEventListener("scroll", currentScrollListener);
      }

      const div = document.createElement("div");
      div.classList.add(
        "no-more-posts",
        "text-center",
        "py-4",
        "text-gray-500",
        "font-semibold"
      );
      div.textContent = "No posts to show";
      feedContainer.appendChild(div);
      return;
    }

    // Render the current chunk
    const chunk = chunkedPosts[currentChunkIndex];
    renderPosts(feedContainer, chunk);

    console.log("Rendered chunk: ", chunk);
    console.log("Current chunk index: ", currentChunkIndex);

    // Move to the next chunk
    currentChunkIndex += 1;
  }

  // Render the first chunk
  renderNextChunk();

  // Set up infinite scrolling for more content
  currentScrollListener = infiniteScrollingContent(renderNextChunk);

  // Return the scroll listener for cleanup
  return currentScrollListener;
}
