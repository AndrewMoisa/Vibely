/**
 * Handles fetching and rendering a user profile along with their posts.
 *
 * This function retrieves the profile details and posts based on the username
 * and updates the UI accordingly. It also manages the follow button functionality.
 *
 * @returns {Promise<void>} - A promise that resolves when the profile and posts are rendered.
 * @throws {Error} - Throws an error if no username is found or if the request fails.
 *
 * @example
 * try {
 *   await profileHandler();
 * } catch (error) {
 *   console.error(error.message);
 * }
 */
import { renderProfile } from "../../ui/profile/renderProfile.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchProfileDetails } from "../api/fetchProfileDetails.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { fetchProfilePosts } from "../api/fetchProfilePosts.js";
import { renderProfilePosts } from "../../ui/profile/renderProfilePosts.js";
import { getUsername } from "../utils/storage.js";
import { getQueryParam } from "../shared/getQueryParam.js";
import { followProfileHandler } from "./followProfileHandler.js";

export async function profileHandler() {
  try {
    const mainContainer = document.querySelector("#feedContainer");
    mainContainer.innerHTML = "";

    const loadingElement = document.querySelector("#loadingContainer");
    let name = getUsername();
    const username = getUsername();
    if (!name) {
      throw new Error("No username in local storage");
    }

    const newname = getQueryParam("name");
    if (newname) {
      name = newname;
    }

    // Clear the container
    loadingElement.innerHTML = "";

    const profileDetails = await fetchProfileDetails(name);
    const section = renderProfile(profileDetails.data, mainContainer, username);

    const profilePosts = await fetchProfilePosts(name);
    renderProfilePosts(profilePosts.data, mainContainer);

    // Follow button
    followProfileHandler(section);
  } catch (error) {
    console.log(error);
    const loadingElement = document.querySelector("#loadingContainer");
    displayMessage(
      loadingElement,
      types.error.classes,
      error.message,
      types.error.icon
    );
  }
}
