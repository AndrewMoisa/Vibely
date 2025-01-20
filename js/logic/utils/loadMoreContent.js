export function monitorScrollForMoreContent() {
  const container = document.body;

  // Add the scroll event listener
  container.addEventListener("scroll", () => {
    // Check if the user has scrolled to the bottom
    if (
      container.scrollTop + container.clientHeight >=
      container.scrollHeight
    ) {
      console.log("You reached the bottom!");
      // Call your function to load more content
      loadMoreContent();
    }
  });

  function loadMoreContent() {
    console.log("Loading more content...");
    // Your logic to load and append additional content
    const newContent = document.createElement("div");
    newContent.style.height = "200px"; // Example: height for new content
    newContent.style.background = "lightgray"; // Example: visual indicator
    newContent.textContent = "New Content Loaded";
    container.appendChild(newContent);
  }
}
