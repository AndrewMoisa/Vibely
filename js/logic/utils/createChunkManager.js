import { renderPosts } from "../../ui/posts/renderPosts.js";
import { getItemsInChunks } from "./getItemsInChunks.js";

export function createChunkManager(posts, container) {
  const chunkSize = 10;
  const chunks = getItemsInChunks(posts, chunkSize);

  let currentIndex = 0;
  let currentChunk = chunks[currentIndex];

  // Function to update the chunk dynamically
  function updateChunk(newIndex) {
    if (newIndex >= 0 && newIndex < chunks.length) {
      currentIndex = newIndex;
      currentChunk = chunks[currentIndex];
      renderPosts(container, currentChunk); // renderPosts when the chunk is updated, and scrollForMoreContent it's called.
    } else {
      // fix later, i need a container at the end of the page for no more posts
    }
  }

  // Function to go to the next chunk called by scrollForMoreContent
  const nextChunk = () => {
    updateChunk(currentIndex + 1);
  };

  console.log(currentChunk);

  // Expose nextChunk function
  return {
    currentChunk,
    nextChunk,
  };
}
