import { postsUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../../logic/utils/createFetchOptions.js";

export async function fetchPosts() {
  const options = createFetchOptions("GET");

  const url = `${postsUrl}/?limit=10&page=1000`;

  // pot folosi limita per page, astfel incat sa nu incarc toate postarile deodata

  // pot folosi query string-ul pentru a sorta postarile, de exemplu dupa data

  // pot folosi page si limit ca sa fac paginare

  const response = await fetch(url, options);
  const json = await response.json();

  console.log(json);

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
  return json;
}
