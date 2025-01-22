export function renderPosts(container, posts) {
  posts.forEach((post) => {
    const imageUrl = post.media?.url ?? "../../../images/no-image.png";
    const bio = post.body ?? "No bio available";

    // Create the main section element
    const section = document.createElement("section");
    section.className = "lg:grid lg:grid-cols-1 gap-5";

    // Create the post container
    const postContainer = document.createElement("div");
    postContainer.className = "mb-3";

    // Create the image container
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");
    image.className = "object-cover rounded-sm w-full max-h-96";
    image.src = imageUrl;
    image.alt = "User avatar";
    imageContainer.appendChild(image);

    // Create the action icons container
    const actionsContainer = document.createElement("div");
    actionsContainer.className = "flex gap-2 m-2";

    const heartIcon = document.createElement("img");
    heartIcon.className = "w-5 h-5 md:w-7 md:h-7";
    heartIcon.src = "/images/fi-rr-heart.png";
    heartIcon.alt = "heart icon";

    const commentIcon = document.createElement("img");
    commentIcon.className = "w-5 h-5 md:w-7 md:h-7";
    commentIcon.src = "/images/comment.png";
    commentIcon.alt = "comment icon";

    const sendIcon = document.createElement("img");
    sendIcon.className = "w-5 h-5 md:w-7 md:h-7";
    sendIcon.src = "/images/fi-rr-paper-plane.png";
    sendIcon.alt = "send icon";

    actionsContainer.appendChild(heartIcon);
    actionsContainer.appendChild(commentIcon);
    actionsContainer.appendChild(sendIcon);

    // Create the bio container
    const bioContainer = document.createElement("div");
    const bioText = document.createElement("p");
    bioText.className = "text-sm p-2 md:text-xl";
    bioText.innerHTML = `<b>${post.author.name}</b> ${bio}`;
    bioContainer.appendChild(bioText);

    // Create the comment input container
    const commentContainer = document.createElement("div");
    commentContainer.className = "px-2";
    const commentInput = document.createElement("input");
    commentInput.className =
      "text-xs p-1 w-full md:placeholder:text-xl md:text-base lg:p-3 lg:text-xl";
    commentInput.name = "comment";
    commentInput.type = "text";
    commentInput.placeholder = "Add a comment";
    commentContainer.appendChild(commentInput);

    // Create the horizontal rule
    const hr = document.createElement("hr");

    // Append all elements to the post container
    postContainer.appendChild(imageContainer);
    postContainer.appendChild(actionsContainer);
    postContainer.appendChild(bioContainer);
    postContainer.appendChild(commentContainer);
    postContainer.appendChild(hr);

    // Append the post container to the section
    section.appendChild(postContainer);

    // Append the section to the main container
    container.appendChild(section);
  });
}
