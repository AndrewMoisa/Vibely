import { apikey, profileUrl } from "../../constants/constants.js";
import { getToken, getUsername } from "../utils/storage.js";

export async function fetchProfile() {
  const token = getToken();
  const name = getUsername();

  const url = `${profileUrl}${name}`;

  console.log(name);

  console.log(token);

  if (!token) {
    console.log("No token, please log in");
    return;
  }

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": apikey,
    },
  };

  const response = await fetch(url, options);
  const json = await response.json();

  console.log(json);

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
  return json;
}
