export function infiniteScrollingContent(nextChunk) {
  // Set up infinite scrolling for more content
  const throttleTime = 200; // Throttle time for scroll events
  const buffer = 100; // Buffer for end-of-page detection
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
        document.body.offsetHeight - buffer;

      if (endOfPage) {
        nextChunk(); // Render the next chunk
      }
    }, throttleTime);
  };

  // Add the new scroll event listener
  window.addEventListener("scroll", handleInfiniteScroll);

  // Return the scroll listener for cleanup
  return handleInfiniteScroll;
}
