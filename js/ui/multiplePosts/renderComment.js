import { deleteCommentHandler } from "../../logic/handlers/deleteCommentHandler.js";
import { getUsername } from "../../logic/utils/storage.js";

const user = getUsername();

export function renderComment(post, container) {
  const comments = post.comments ?? [];
  const commentsContainer = document.createElement("div");
  commentsContainer.id = "commentsContainer";
  commentsContainer.dataset.id = post.id;
  commentsContainer.className = "px-2 ";
  comments.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.dataset.id = comment.id;
    commentElement.id = "comment";

    commentElement.className = "text-xs md:text-md";
    commentElement.innerHTML = `<b>${comment.author.name}:</b> ${comment.body}`;

    if (comment.author.name === user) {
      createDeleteButton(comment, commentElement);
    }

    commentsContainer.appendChild(commentElement);
  });

  container.appendChild(commentsContainer);
}

export function renderInstantComment(comment, form) {
  const commentsContainer = form.previousElementSibling;
  console.log(commentsContainer);
  const commentElement = document.createElement("div");
  commentElement.id = "comment";

  commentElement.className = "text-xs md:text-md px-2";
  commentElement.innerHTML = `<b>${comment.owner}:</b> ${comment.body}`;

  commentsContainer.appendChild(commentElement);

  if (comment.owner === user) {
    createDeleteButton(comment, commentElement);
  }
}

export function createDeleteButton(comment, commentElement) {
  const deletePostButton = document.createElement("button");
  deletePostButton.dataset.id = comment.id;
  deletePostButton.dataset.post = comment.postId;
  deletePostButton.id = "deleteButton";
  deletePostButton.className =
    "text-xs md:text-md text-gray-500 hover:text-red-500 cursor-pointer block";
  deletePostButton.innerText = "delete";

  commentElement.appendChild(deletePostButton);

  deleteCommentHandler(deletePostButton);
}
