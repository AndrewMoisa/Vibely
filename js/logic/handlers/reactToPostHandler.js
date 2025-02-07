import { reactToPost } from "../api/reactToPost.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { types } from "../../ui/shared/errorsStyles.js";

export async function reactToPostHandler(
  post,
  heartContainer,
  heartIcon,
  username
) {
  try {
    const { data } = await reactToPost(post.id);

    const likeCount = data.reactions?.[0]?.count ?? 0;

    const reacted = getReactedUser(data);

    if (reacted === username) {
      heartIcon.src = "/images/heart-full.png";
    } else {
      heartIcon.src = "/images/fi-rr-heart.png";
    }

    heartContainer.innerHTML = `${likeCount} likes`;
  } catch (error) {
    displayMessage(
      loadingContainer,
      types.error.classes,
      error.message,
      types.error.icon
    );
  }
}

export const getReactedUser = (data) => {
  return (
    data.reactions?.find((reaction) => {
      return reaction.reactors && reaction.reactors[0];
    })?.reactors[0] ?? ""
  );
};
