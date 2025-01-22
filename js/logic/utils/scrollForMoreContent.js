export function scrollForMoreContent(chunk) {
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
        chunk();
      }
    }, 1000);
  };

  window.addEventListener("scroll", handleInfiniteScroll);
}
