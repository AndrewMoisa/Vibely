export function renderPost(container, user, post, postDate) {
  // Create the section element
  const section = document.createElement("section");
  section.className = "flex flex-col items-center justify-center";

  // Create the "Back to profile" link div
  const backLinkDiv = document.createElement("div");
  backLinkDiv.className = "flex justify-start w-full p-1";

  const backLink = document.createElement("a");
  backLink.href = "/profile";
  backLink.className =
    "underline decoration-violet-800 text-violet-800 sm:text-sm";
  backLink.textContent = "< Back to profile";

  backLinkDiv.appendChild(backLink);

  // Create the article element
  const article = document.createElement("article");
  article.className = "mt-3 w-full";

  // Create the user name paragraph
  const userNameDiv = document.createElement("div");
  const userNamePara = document.createElement("p");
  userNamePara.className = "text-sm md:text-xl";
  userNamePara.innerHTML = `<b>${user}</b>`;
  userNameDiv.appendChild(userNamePara);

  // Create the post image div
  const imageDiv = document.createElement("div");
  const image = document.createElement("img");
  image.className = "object-cover rounded-xs w-full max-h-96";
  image.src = post.media?.url ? post.media.url : "/images/noimg.png";
  image.alt = "User avatar";
  imageDiv.appendChild(image);

  // Create the action icons div
  const iconsDiv = document.createElement("div");
  iconsDiv.className = "flex gap-2 m-2";

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

  iconsDiv.appendChild(heartIcon);
  iconsDiv.appendChild(commentIcon);
  iconsDiv.appendChild(sendIcon);

  // Create the likes and comments div
  const statsDiv = document.createElement("div");
  statsDiv.className = "flex justify-between p-2";

  const likesPara = document.createElement("p");
  likesPara.className = "text-xs text-gray-400";
  likesPara.textContent = "2 likes";

  const commentsPara = document.createElement("p");
  commentsPara.className = "text-xs text-gray-400";
  commentsPara.textContent = "1 comment";

  statsDiv.appendChild(likesPara);
  statsDiv.appendChild(commentsPara);

  // Create the post body and date div
  const postBodyDiv = document.createElement("div");
  const postBodyPara = document.createElement("p");
  postBodyPara.className = "text-md px-1 text-left";
  postBodyPara.textContent = post.body;

  const postDatePara = document.createElement("p");
  postDatePara.className = "text-xs italic text-gray-400 px-1 md:text-sm";
  postDatePara.textContent = postDate;

  postBodyDiv.appendChild(postBodyPara);
  postBodyDiv.appendChild(postDatePara);

  // Create the comment preview div
  const commentPreviewDiv = document.createElement("div");
  const commentPreviewPara = document.createElement("p");
  commentPreviewPara.className = "text-xs p-1 md:text-sm";
  commentPreviewPara.textContent =
    "I really like this post! Keep up the good work!";
  commentPreviewDiv.appendChild(commentPreviewPara);

  // Create the comment input div
  const commentInputDiv = document.createElement("div");
  commentInputDiv.className = "px-2";

  const commentInput = document.createElement("input");
  commentInput.className =
    "text-xs p-1 w-full md:placeholder:text-xl md:text-base lg:p-3 lg:text-xl";
  commentInput.type = "text";
  commentInput.placeholder = "Add a comment";

  commentInputDiv.appendChild(commentInput);

  // Create the horizontal rule
  const hr = document.createElement("hr");

  // Create the buttons div
  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "flex justify-end gap-2 mt-2";

  const editButton = document.createElement("button");
  editButton.className =
    "bg-blue-500 text-white px-3 py-1 rounded-sm hover:bg-blue-700";
  editButton.textContent = "Edit";
  editButton.id = "editButton";
  editButton.addEventListener("click", () => {
    window.location.href = `/edit/?id=${post.id}`;
  });

  const deleteButton = document.createElement("button");
  deleteButton.className =
    "bg-red-500 text-white px-3 py-1 rounded-sm hover:bg-red-700";
  deleteButton.textContent = "Delete";
  deleteButton.id = "deleteButton";

  buttonsDiv.appendChild(editButton);
  buttonsDiv.appendChild(deleteButton);

  // Append all elements to the article
  article.appendChild(userNameDiv);
  article.appendChild(imageDiv);
  article.appendChild(iconsDiv);
  article.appendChild(statsDiv);
  article.appendChild(postBodyDiv);
  article.appendChild(commentPreviewDiv);
  article.appendChild(commentInputDiv);
  article.appendChild(hr);
  article.appendChild(buttonsDiv);

  // Append the back link div and article to the section
  section.appendChild(backLinkDiv);
  section.appendChild(article);

  // Append the section to the container
  container.appendChild(section);
}
