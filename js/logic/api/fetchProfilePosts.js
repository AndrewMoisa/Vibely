import { profileUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../utils/createFetchOptions.js";

export async function fetchProfilePosts(name) {
  if (!name) {
    throw new Error("No username in local storage");
  }

  const url = `${profileUrl}${name}/posts?_author=true`;

  const options = createFetchOptions("GET");

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
  return json;
}
