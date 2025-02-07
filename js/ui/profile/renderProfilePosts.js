export function renderProfilePosts(data, container) {
  // Create the section element

  const section = document.createElement("section");
  section.className = "grid grid-cols-3 grid-rows-2 gap-1 mb-4 p-2"; // Add grid class

  if (data.length === 0) {
    section.className = ""; // Remove grid class
    // Create a div element
    const div = document.createElement("div");
    div.className = "flex items-center justify-center h-96";

    // Create a p element
    const p = document.createElement("p");
    p.className = "text-2xl font-bold text-gray-500";
    p.textContent = "No posts found";

    // Append the p element to the div
    div.appendChild(p);

    // Append the div to the section
    section.appendChild(div);

    // Append the section to the container
    container.appendChild(section);

    return;
  }

  // Loop through the data array
  data.forEach((item) => {
    // Create the div element
    const div = document.createElement("div");
    div.className = "relative overflow-hidden group"; // Add group for hover effects

    // Create the anchor (a) element
    const a = document.createElement("a");
    a.href = `/post/?id=${item.id}&name=${item.author.name}`; // You can update this href dynamically if needed

    // Create the image (img) element
    const img = document.createElement("img");
    img.className =
      "w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"; // Zoom effect on hover with shadow
    img.src = item.media?.url ? item.media.url : `/images/no-image.png`; // Set src from data

    img.alt = item.media?.alt; // Set alt from data

    // Create an overlay div for additional hover effects
    const overlay = document.createElement("div");
    overlay.className =
      "absolute inset-0 bg-black opacity-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-50";

    // Create a text element inside the overlay (optional)
    const overlayText = document.createElement("p");
    overlayText.className =
      "text-white text-lg font-bold opacity-0 transform translate-y-4 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0";
    overlayText.textContent = "View Post"; // Custom text

    // Append the text to the overlay
    overlay.appendChild(overlayText);

    // Append the image and overlay to the anchor
    a.appendChild(img);
    a.appendChild(overlay);

    // Append the anchor to the div
    div.appendChild(a);

    // Append the div to the section
    section.appendChild(div);
  });

  // Append the section to the container
  container.appendChild(section);
}
