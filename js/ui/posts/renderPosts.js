import { submitForm } from "../../logic/handlers/createCommentsHandler.js";
import { renderComment } from "./renderComment.js";

export function renderPosts(container, posts) {
  posts.forEach((post) => {
    const imageUrl = post.media?.url ?? "../../../images/no-image.png";
    const bio = post.body ?? "No bio available";
    const author = post.name ?? post.author.name ?? "No author available";
    const hashTags = post.tags?.map((tag) => `#${tag}`).join(" ") ?? "";

    // Create the main section element
    const section = document.createElement("section");
    section.className =
      "mb-3 mx-2 lg:grid lg:grid-cols-1 gap-5 rounded-lg border-1 border-gray-200";

    section.id = "postContainer";

    // Create the image container
    const image = document.createElement("img");
    image.className = "object-fit rounded-xs mx-auto w-full";
    image.src = imageUrl;
    image.alt = "User avatar";

    // Create the action icons container
    const actionsContainer = document.createElement("div");
    actionsContainer.className = "flex gap-2 p-2 border-b-1 border-gray-200";

    const heartIcon = document.createElement("img");
    heartIcon.className = "w-3 h-4 md:w-6 md:h-6";
    heartIcon.src = "/images/fi-rr-heart.png";
    heartIcon.alt = "heart icon";

    const commentIcon = document.createElement("img");
    commentIcon.className = "w-5 h-5 md:w-6 md:h-6";
    commentIcon.src = "/images/comment.png";
    commentIcon.alt = "comment icon";

    const sendIcon = document.createElement("img");
    sendIcon.className = "w-5 h-5 md:w-6 md:h-6";
    sendIcon.src = "/images/fi-rr-paper-plane.png";
    sendIcon.alt = "send icon";

    actionsContainer.appendChild(heartIcon);
    actionsContainer.appendChild(commentIcon);
    actionsContainer.appendChild(sendIcon);

    // Create the bio container
    const bioContainer = document.createElement("div");
    const bioText = document.createElement("p");
    bioText.className = "text-sm px-2 md:text-base";
    bioText.innerHTML = `<b>${author}</b> ${bio}`;
    bioContainer.appendChild(bioText);

    // Create a hash tag container
    const hashTagContainer = document.createElement("div");
    hashTagContainer.className = "px-2";
    const hashTag = document.createElement("span");
    hashTag.className = "text-xs text-gray-500 md:text-sm";
    hashTag.innerHTML = `${hashTags}`;
    hashTagContainer.appendChild(hashTag);
    bioContainer.appendChild(hashTagContainer);

    // Create the comments
    renderComment(post, bioContainer);

    // Create the comment input container
    const commentContainer = document.createElement("form");
    commentContainer.className =
      "flex mx-auto border-1  mx-1 rounded-lg w-full my-2";

    const commentInput = document.createElement("input");
    commentInput.id = "comment";
    commentInput.className =
      "text-xs w-full p-1 md:placeholder:text-sm md:text-md lg:p-2 lg:text-base ";
    commentInput.name = "body";
    commentInput.type = "text";
    commentInput.placeholder = "Add a comment";

    commentInput.autocomplete = "off";

    const label = document.createElement("label");
    label.htmlFor = "comment";
    label.className = "hidden ";
    label.innerText = "Add a comment";

    // Create the send button
    const sendButton = document.createElement("button");
    sendButton.id = post.id;
    sendButton.type = "submit";
    sendButton.className =
      "bg-blue-500 text-white text-xs md:text-md px-3 py-1 rounded-lg hover:bg-blue-600 transition-all lg:text-base lg:px-4 ";
    sendButton.innerText = "Send";
    commentContainer.addEventListener("submit", async (event) => {
      event.preventDefault();
      await submitForm(event);
    });

    // Append elements to the container
    commentContainer.appendChild(commentInput);
    commentContainer.appendChild(sendButton);

    // Append all elements to the post container
    section.appendChild(image);
    section.appendChild(actionsContainer);
    section.appendChild(bioContainer);
    section.appendChild(commentContainer);

    container.appendChild(section);
  });
}
