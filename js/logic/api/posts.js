import { postsUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../../logic/utils/createFetchOptions.js";

export async function fetchPosts() {
  const options = createFetchOptions("GET");

  const url = `${postsUrl}/?limit=10&page=1&_author=true`;

  const response = await fetch(url, options);
  const json = await response.json();

  console.log(json);

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
  return json;
}
