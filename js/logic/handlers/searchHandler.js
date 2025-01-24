import { fetchSearchPosts } from "../api/fetchSearchPosts.js";
import { renderPosts } from "../../ui/posts/renderPosts.js";
import { renderChunk } from "../../ui/posts/renderChunk.js";
import {
  sortPostsByNewestFirst,
  sortPostsByOldestFirst,
} from "..//utils/postsFilters.js";

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
  };

  searchButton.addEventListener("click", handleSearch);
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });

  async function getPosts(query) {
    const inputQuery = await fetchSearchPosts(query);
    return inputQuery.data;
  }
}
