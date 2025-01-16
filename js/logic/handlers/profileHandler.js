import { renderProfile } from "../../ui/profile/renderProfile.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchProfile } from "../api/profile.js";
import { loadingContainer } from "../../constants/constants.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { fetchProfilePosts } from "../api/profilePosts.js";
import { renderProfilePosts } from "../../ui/profile/renderProfilePosts.js";

export async function profileHandler() {
  try {
    const mainContainer = document.querySelector("main");

    // Clear the container
    document.querySelector("#loadingContainer").innerHTML = "";

    const profileDetails = await fetchProfile();
    renderProfile(profileDetails.data, mainContainer);

    const profilePosts = await fetchProfilePosts();
    renderProfilePosts(profilePosts.data, mainContainer);
  } catch (error) {
    displayMessage(
      console.log(error),
      loadingContainer,
      types.error.classes,
      error.message,
      types.error.icon
    );
  } finally {
  }
}
