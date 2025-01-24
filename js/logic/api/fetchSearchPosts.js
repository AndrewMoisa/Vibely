// ?q=<query>\
import { searchUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../../logic/utils/createFetchOptions.js";

export async function fetchSearchPosts(query) {
  const options = createFetchOptions("GET");

  const url = `${searchUrl}?q=${query}&_author=true`;

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
  return json;
}
