import { displayMessage } from "../../ui/shared/displayMessage.js";
import { loadingContainer } from "../../constants/constants.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { fetchPosts } from "../api/posts.js";
import { renderPosts } from "../../ui/posts/renderPosts.js";
import { renderSearchFilter } from "../../ui/posts/renderSearchFilter.js";
import { createChunkManager } from "../utils/createChunkManager.js";
import { scrollForMoreContent } from "../utils/scrollForMoreContent.js";

export async function postsHandler() {
  try {
    const mainContainer = document.querySelector("main");

    // Clear the container
    const loadingContainer = document.querySelector("#loadingContainer");
    loadingContainer.innerHTML = "";

    const multiplePosts = await fetchPosts();
    const posts = multiplePosts.data;

    // Initial rendering
    renderSearchFilter(mainContainer);

    const initialChunkManager = createChunkManager(
      posts,
      mainContainer,
      renderPosts
    );
    // renderPosts(mainContainer, initialChunkManager.currentChunk);
    scrollForMoreContent(initialChunkManager.nextChunk);

    const filter = document.getElementById("filter");
    filter.addEventListener("change", function () {
      console.log("Filter changed to:", this.value); // Debugging

      // Clear the main container
      // mainContainer.innerHTML = "";

      // Render the search filter
      // renderSearchFilter(mainContainer);

      // Determine which posts to display based on the selected filter
      let postsToDisplay;
      if (this.value === "recent") {
        console.log("Displaying recent posts"); // Debugging
        postsToDisplay = posts; // Display recent posts by default
      } else if (this.value === "oldest") {
        console.log("Displaying oldest posts"); // Debugging
        postsToDisplay = sortPostsByOldestFirst(posts); // Sort posts from oldest to most recent
      }

      console.log("Posts to display:", postsToDisplay); // Debugging

      // Initialize the chunk manager with the appropriate posts
      const chunkManager = createChunkManager(
        postsToDisplay,
        mainContainer,
        renderPosts
      );

      // Render the posts
      renderPosts(mainContainer, chunkManager.currentChunk);

      // Set up infinite scrolling for more content
      scrollForMoreContent(chunkManager.nextChunk);
    });

    // Sort posts from oldest to most recent
    function sortPostsByOldestFirst(posts) {
      return posts.sort((a, b) => {
        const dateA = new Date(a.created).getTime();
        const dateB = new Date(b.created).getTime();
        return dateA - dateB; // Sort in ascending order (oldest first)
      });
    }

    // console.log(posts);
  } catch (error) {
    console.log(error);
    displayMessage(
      loadingContainer,
      types.error.classes,
      error.message,
      types.error.icon
    );
  }
}
