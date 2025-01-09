import { renderProfile } from "../../ui/profile/renderProfile.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { fetchProfile } from "../api/profile.js";
import { loadingContainer } from "../../constants/constants.js";
import { types } from "../../ui/shared/errorsStyles.js";

export async function profileHandler() {
  try {
    const profileDetails = await fetchProfile();
    renderProfile(profileDetails.data);

    console.log(profileDetails);
  } catch (error) {
    displayMessage(
      loadingContainer,
      types.error.classes,
      error.message,
      types.error.icon
    );
  } finally {
  }
}
