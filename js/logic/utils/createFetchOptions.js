import { apiKey } from "../../constants/constants.js";

export function createFetchOptions(token) {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-API-Key": apiKey,
    },
  };
}
