import { postsUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../utils/createFetchOptions.js";

export async function deletePost(id) {
  const url = `${postsUrl}/${id}`;

  const options = createFetchOptions("DELETE");

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Something went wrong.");
  }

  return response;
}
