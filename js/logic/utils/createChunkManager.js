import { getItemsInChunks } from "./getItemsInChunks.js";

export function createChunkManager(posts, mainContainer, renderPosts) {
  const chunkSize = 10;
  const chunks = getItemsInChunks(posts, chunkSize);

  let currentIndex = 0;
  let currentChunk = chunks[currentIndex];

  // Function to render the current chunk
  function renderCurrentChunk() {
    renderPosts(mainContainer, currentChunk);
  }

  // Function to update the chunk dynamically
  function updateChunk(newIndex) {
    if (newIndex >= 0 && newIndex < chunks.length) {
      currentIndex = newIndex;
      currentChunk = chunks[currentIndex];
      renderCurrentChunk();
    } else {
      mainContainer.innerHTML += "No more posts to show";
    }
  }

  // Function to go to the next chunk
  function nextChunk() {
    updateChunk(currentIndex + 1);
  }

  // Function to handle infinite scroll
  function scrollForMoreContent() {
    let throttleTimer;

    const throttle = (callback, time) => {
      if (throttleTimer) return;

      throttleTimer = true;

      setTimeout(() => {
        callback();
        throttleTimer = false;
      }, time);
    };

    const handleInfiniteScroll = () => {
      throttle(() => {
        const endOfPage =
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100; // 100px buffer

        if (endOfPage) {
          console.log("End of page reached");
          nextChunk();
        }
      }, 1000);
    };

    const removeInfiniteScroll = () => {
      window.removeEventListener("scroll", handleInfiniteScroll);
    };

    window.addEventListener("scroll", handleInfiniteScroll);
  }

  // Initial render
  renderCurrentChunk();

  // Start infinite scroll
  scrollForMoreContent();
}
