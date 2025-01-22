export function scrollForMoreContent(nextChunk) {
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
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100; // 100px buffer

      if (endOfPage) {
        nextChunk();
      }
    }, 1000);
  };

  const removeInfiniteScroll = () => {
    window.removeEventListener("scroll", handleInfiniteScroll);
  };

  window.addEventListener("scroll", handleInfiniteScroll);
}
