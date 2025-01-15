import { apiKey } from "../../constants/constants.js";
import { getToken } from "./storage.js";

export function createFetchOptions(method = "GET", user) {
  const token = getToken();

  if (!token) {
    console.log("No token, please log in");
    throw new Error("No token provided");
  }

  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": apiKey,
    },
    body: JSON.stringify(user),
  };
}
