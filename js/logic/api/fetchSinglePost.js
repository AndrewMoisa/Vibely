/**
 * Fetches a single post by its ID, including author, comments, and reactions.
 *
 * @param {string} id - The ID of the post to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the fetched post data.
 * @throws {Error} - Throws an error if no ID is provided or if the request fails.
 *
 * @example
 * try {
 *   const post = await fetchSinglePost("123");
 *   console.log(post);
 * } catch (error) {
 *   console.error(error.message);
 * }
 */
import { postsUrl } from "../../constants/constants.js";
import { createFetchOptions } from "../utils/createFetchOptions.js";

export async function fetchSinglePost(id) {
  if (!id) {
    throw new Error("No id provided, post not found");
  }

  const options = createFetchOptions("GET");
  const url = `${postsUrl}/${id}/?_author=true&_comments=true&_reactions=true`;

  const response = await fetch(url, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
  return json;
}
