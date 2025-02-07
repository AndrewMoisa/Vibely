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
