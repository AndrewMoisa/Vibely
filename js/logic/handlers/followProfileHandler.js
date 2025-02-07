import { isFollowingProfile } from "../api/followProfile.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { types } from "../../ui/shared/errorsStyles.js";
import { loadingContainer } from "../../constants/constants.js";

export async function followProfileHandler(container) {
  const followBtn = container.querySelector("#followButton");
  if (!followBtn) {
    console.error("Follow button not found");
    return;
  }

  const user = followBtn.dataset.user;
  if (!user) {
    console.error("User data not found on follow button");
    return;
  }

  followBtn.addEventListener("click", async () => {
    try {
      if (followBtn.textContent === "Unfollow") {
        await unfollowProfile();
        followBtn.textContent = "Follow";
      } else {
        await followProfile();
        followBtn.textContent = "Unfollow";
      }
    } catch (error) {
      console.error("Error toggling follow state:", error);
      displayMessage(
        loadingContainer,
        types.error.classes,
        error.message,
        types.error.icon
      );
    }
  });

  async function followProfile() {
    const response = await isFollowingProfile(user, "follow");
    console.log("Followed profile:", response);
  }

  async function unfollowProfile() {
    const response = await isFollowingProfile(user, "unfollow");
    console.log("Unfollowed profile:", response);
  }
}
