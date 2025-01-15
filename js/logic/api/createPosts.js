import { postsUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../utils/createFetchOptions.js";

export async function createPost(user) {
  const url = postsUrl;

  const options = createFetchOptions("POST", user);

  const response = await fetch(url, options);
  const json = await response.json();

  console.log(json);

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
  return json;
}
