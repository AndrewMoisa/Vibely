/**
 * Updates the follow status of a user profile.
 *
 * @param {string} user - The username of the profile to follow or unfollow.
 * @param {string} isFollowing - The action to take (e.g., "follow" or "unfollow").
 * @returns {Promise<Object>} - A promise that resolves to the updated follow status.
 * @throws {Error} - Throws an error if the request fails.
 *
 * @example
 * try {
 *   const response = await isFollowingProfile("john_doe", "follow");
 *   console.log(response);
 * } catch (error) {
 *   console.error(error.message);
 * }
 */
import { profileUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../utils/createFetchOptions.js";

export async function isFollowingProfile(user, isFollowing) {
  const url = `${profileUrl}${user}/${isFollowing}`;

  const options = createFetchOptions("PUT", "", false);

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Something went wrong.");
  }

  return json;
}
