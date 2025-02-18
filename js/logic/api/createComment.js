import { postsUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../utils/createFetchOptions.js";

export async function createComment(id, data) {
  const url = `${postsUrl}/${id}/comment`;

  const options = createFetchOptions("POST", data);

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }

  return json;
}
