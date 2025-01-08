import { profileUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../utils/createFetchOptions.js";
import { getToken, getUsername } from "../utils/storage.js";

export async function fetchProfile() {
  const token = getToken();
  const name = getUsername();

  const url = `${profileUrl}${name}`;

  if (!token) {
    console.log("No token, please log in");
    throw new Error("No token provided");
  }

  const options = createFetchOptions(token);

  console.log(options);

  const response = await fetch(url, options);
  const json = await response.json();

  console.log(json);

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
  return json;
}
