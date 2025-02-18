import { postsUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../utils/createFetchOptions.js";

export async function deleteComment(postId, commentId) {
  const url = `${postsUrl}/${postId}/comment/${commentId}`;

  const options = createFetchOptions("DELETE");

  const response = await fetch(url, options);

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(
      errorResponse.errors?.[0]?.message || "Something went wrong."
    );
  }

  return response;
}
