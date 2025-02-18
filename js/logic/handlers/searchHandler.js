import { fetchSearchPosts } from "../api/fetchSearchPosts.js";
import { renderChunk } from "../../ui/multiplePosts/renderChunk.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { types } from "../../ui/shared/errorsStyles.js";
types;

export function searchHandler(feedContainer, currentScrollListener) {
  const searchButton = document.querySelector("#searchButton");
  const searchInput = document.querySelector("#searchInput");

  const handleSearch = async () => {
    const query = searchInput.value.trim();
    searchInput.value = "";

    if (!query) {
      searchInput.placeholder = "Please enter a search query";
      return;
    }

    try {
      const searchPosts = await getPosts(query);
      console.log("Search Results:", searchPosts);

      // Clear the container
      feedContainer.innerHTML = "";

      if (currentScrollListener) {
        window.removeEventListener("scroll", currentScrollListener);
        console.log("Old scroll listener removed");
      }

      // Render the new posts
      currentScrollListener = renderChunk(searchPosts, feedContainer);
    } catch (error) {
      displayMessage(
        loadingContainer,
        types.error.classes,
        error.message,
        types.error.icon
      );
    }
  };

  if (searchButton && searchInput) {
    searchButton.addEventListener("click", handleSearch);
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    });
  } else {
    throw new Error("Search button or input not found in the DOM");
  }

  async function getPosts(query) {
    try {
      const inputQuery = await fetchSearchPosts(query);
      return inputQuery.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }
}
