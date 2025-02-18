import { postsUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../utils/createFetchOptions.js";

export async function editPost(id, user) {
  const url = `${postsUrl}/${id}`;

  const options = createFetchOptions("PUT", user);

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Something went wrong.");
  }

  return json;
}
