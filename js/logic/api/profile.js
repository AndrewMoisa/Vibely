import { profileUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../utils/createFetchOptions.js";
import { getUsername } from "../utils/storage.js";

export async function fetchProfile() {
  const name = getUsername();

  if (!name) {
    throw new Error("No username in local storage");
  }

  const url = `${profileUrl}${name}`;

  const options = createFetchOptions("GET");

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
  return json;
}
