import { postsUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../utils/createFetchOptions.js";

export async function fetchSinglePost(id) {
  if (!id) {
    throw new Error("No id provided, post not found");
  }

  const options = createFetchOptions("GET");

  const url = `${postsUrl}/${id}/?_author=true&_comments=true&_reactions=true`;

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
  return json;
}
