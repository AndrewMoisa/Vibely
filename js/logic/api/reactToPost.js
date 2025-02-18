import { postsUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../utils/createFetchOptions.js";

export async function reactToPost(id) {
  const url = `${postsUrl}/${id}/react/👍`;

  const options = createFetchOptions("PUT", null, false);

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Something went wrong.");
  }

  return json;
}
