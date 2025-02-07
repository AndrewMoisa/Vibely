import { apiKey } from "../../constants/constants.js";
import { getToken } from "./storage.js";

export function createFetchOptions(
  method = "GET",
  data,
  setContentType = true
) {
  const token = getToken();

  if (!token) {
    console.log("No token, please log in");
    throw new Error("No token provided");
  }

  const options = {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`,
      // spell-checker: disable-next-line
      "X-Noroff-API-Key": apiKey,
    },
    body: JSON.stringify(data),
  };

  if (setContentType) {
    options.headers["Content-Type"] = "application/json";
  }

  return options;
}
