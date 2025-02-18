export function initialPost(mainContainer, name) {
  // Create the "Back to profile" link div
  const backLinkDiv = document.createElement("div");
  backLinkDiv.className = "flex justify-start w-full p-1";

  const backLink = document.createElement("a");
  backLink.href = `/profile/?name=${name}`;
  backLink.className =
    "underline decoration-violet-800 text-violet-800 sm:text-sm md:text-base lg:text-lg";
  backLink.textContent = "< Back to profile";

  backLinkDiv.appendChild(backLink);
  mainContainer.appendChild(backLinkDiv);
}
