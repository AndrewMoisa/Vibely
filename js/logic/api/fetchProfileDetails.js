import { profileUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../utils/createFetchOptions.js";

export async function fetchProfileDetails(name) {
  const url = `${profileUrl}${name}?&_following=true&_followers=true`;

  const options = createFetchOptions("GET");

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
  return json;
}
