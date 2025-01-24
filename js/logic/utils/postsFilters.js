export function sortPostsByOldestFirst(posts) {
  return posts.sort((a, b) => {
    const dateA = new Date(a.created).getTime();
    const dateB = new Date(b.created).getTime();
    return dateA - dateB; // Sort in ascending order (oldest first)
  });
}

export function sortPostsByNewestFirst(posts) {
  return posts.sort((a, b) => {
    const dateA = new Date(a.created).getTime();
    const dateB = new Date(b.created).getTime();
    return dateB - dateA; // Sort in descending order (newest first)
  });
}
