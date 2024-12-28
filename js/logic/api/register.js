import { registerUrl } from "../../constants/constants.js";

export async function registerUser(user) {
  const url = registerUrl;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json);

    if (!response.ok) {
      throw new Error(json.errors?.[0].message || "Registration failed");
    }
    return json;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}
