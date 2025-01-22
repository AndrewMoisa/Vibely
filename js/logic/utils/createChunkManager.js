import { getItemsInChunks } from "./getItemsInChunks.js";

export function createChunkManager(posts, mainContainer, renderPosts) {
  const chunkSize = 10;
  const chunks = getItemsInChunks(posts, chunkSize);

  let currentIndex = 0;
  let currentChunk = chunks[currentIndex];

  // Function to update the chunk dynamically
  function updateChunk(newIndex) {
    if (newIndex >= 0 && newIndex < chunks.length) {
      currentIndex = newIndex;
      currentChunk = chunks[currentIndex];
      renderPosts(mainContainer, currentChunk);
    } else {
      // fix later, i need a container at the end of the page for no more posts
    }
  }

  // Function to go to the next chunk
  const nextChunk = () => {
    updateChunk(currentIndex + 1);
  };

  // Expose nextChunk function
  return {
    currentChunk,
    nextChunk,
  };
}
