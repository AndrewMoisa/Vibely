export function renderCreatePost(action) {
  // Create the section element
  const section = document.createElement("section");
  section.classList.add(
    "max-w-xl",
    "mx-2",
    "sm:mx-auto",
    "mt-10",
    "p-5",
    "bg-white",
    "rounded-lg",
    "shadow-md"
  );

  // Create the heading
  const heading = document.createElement("h2");
  heading.classList.add("text-xl", "md:text-2xl", "font-semibold", "mb-4");
  heading.textContent = `${action} post`;

  // Create the message div
  const messageDiv = document.createElement("div");
  messageDiv.id = "message";

  // Create the form element
  const form = document.createElement("form");
  form.id = "createPost";
  form.classList.add("mt-5");

  // Create the fieldset
  const fieldset = document.createElement("fieldset");

  // Create the title input group
  const titleGroup = document.createElement("div");
  titleGroup.classList.add("mb-2");

  const titleLabel = document.createElement("label");
  titleLabel.setAttribute("for", "postTitle");
  titleLabel.classList.add(
    "block",
    "text-sm",
    "font-medium",
    "text-gray-700",
    "md:text-base",
    "lg:text-lg",
    "xl:text-xl"
  );
  titleLabel.textContent = "Title";

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "postTitle";
  titleInput.name = "title";
  titleInput.classList.add(
    "mt-1",
    "block",
    "w-full",
    "p-2",
    "border",
    "border-gray-300",
    "rounded-md",
    "shadow-xs",
    "focus:ring-blue-500",
    "focus:border-blue-500",
    "sm:text-sm"
  );
  titleInput.required = true;

  // Create the description textarea group
  const descriptionLabel = document.createElement("label");
  descriptionLabel.setAttribute("for", "postContent");
  descriptionLabel.classList.add(
    "block",
    "text-sm",
    "font-medium",
    "text-gray-700",
    "md:text-base",
    "lg:text-lg",
    "xl:text-xl"
  );
  descriptionLabel.textContent = "Description";

  const descriptionTextarea = document.createElement("textarea");
  descriptionTextarea.id = "postContent";
  descriptionTextarea.name = "body";
  descriptionTextarea.rows = 4;
  descriptionTextarea.classList.add(
    "mt-1",
    "block",
    "w-full",
    "p-2",
    "border",
    "border-gray-300",
    "rounded-md",
    "shadow-xs",
    "focus:ring-blue-500",
    "focus:border-blue-500",
    "sm:text-sm"
  );
  descriptionTextarea.required = true;

  // Append title and description elements to the title group
  titleGroup.appendChild(titleLabel);
  titleGroup.appendChild(titleInput);
  titleGroup.appendChild(descriptionLabel);
  titleGroup.appendChild(descriptionTextarea);

  // Create the image input group
  const imageGroup = document.createElement("div");
  imageGroup.classList.add("mb-5");

  const imageUrlLabel = document.createElement("label");
  imageUrlLabel.setAttribute("for", "postImageUrl");
  imageUrlLabel.classList.add(
    "block",
    "text-sm",
    "font-medium",
    "text-gray-700",
    "md:text-base",
    "lg:text-lg",
    "xl:text-xl"
  );
  imageUrlLabel.textContent = "Image";

  const imageUrlInput = document.createElement("input");
  imageUrlInput.type = "url";
  imageUrlInput.id = "postImageUrl";
  imageUrlInput.name = "mediaUrl";
  imageUrlInput.classList.add(
    "mt-1",
    "block",
    "w-full",
    "p-2",
    "border",
    "border-gray-300",
    "rounded-md",
    "shadow-xs",
    "focus:ring-blue-500",
    "focus:border-blue-500",
    "sm:text-sm"
  );
  imageUrlInput.placeholder = "Image URL";

  const imageAltLabel = document.createElement("label");
  imageAltLabel.setAttribute("for", "postImageAlt");
  imageAltLabel.classList.add(
    "block",
    "text-sm",
    "font-medium",
    "text-gray-700",
    "md:text-base",
    "lg:text-lg",
    "xl:text-xl",
    "mt-4"
  );

  const imageAltInput = document.createElement("input");
  imageAltInput.type = "text";
  imageAltInput.id = "postImageAlt";
  imageAltInput.name = "mediaAlt";
  imageAltInput.classList.add(
    "mt-1",
    "block",
    "w-full",
    "p-2",
    "border",
    "border-gray-300",
    "rounded-md",
    "shadow-xs",
    "focus:ring-blue-500",
    "focus:border-blue-500",
    "sm:text-sm"
  );
  imageAltInput.placeholder = "Image Description (Optional)";

  // Append image elements to the image group
  imageGroup.appendChild(imageUrlLabel);
  imageGroup.appendChild(imageUrlInput);
  imageGroup.appendChild(imageAltLabel);
  imageGroup.appendChild(imageAltInput);

  // Create the submit button group
  const submitGroup = document.createElement("div");
  submitGroup.classList.add("flex", "justify-end", "mb-10");

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add(
    "px-4",
    "py-2",
    "bg-blue-600",
    "text-white",
    "rounded-md",
    "shadow-xs",
    "hover:bg-blue-700",
    "focus:outline-hidden",
    "focus:ring-2",
    "focus:ring-offset-2",
    "focus:ring-blue-500",
    "md:text-base",
    "lg:text-lg",
    "xl:text-xl"
  );
  submitButton.textContent = `${action} post`;

  // Append the submit button to the submit group
  submitGroup.appendChild(submitButton);

  // Append all groups to the fieldset
  fieldset.appendChild(titleGroup);
  fieldset.appendChild(imageGroup);
  fieldset.appendChild(submitGroup);

  // Append the fieldset to the form
  form.appendChild(fieldset);

  // Append the heading, message div, and form to the section
  section.appendChild(heading);
  section.appendChild(messageDiv);
  section.appendChild(form);

  // Append the section to the main element
  const mainElement = document.querySelector("main");
  if (mainElement) {
    mainElement.appendChild(section);
  } else {
    console.error("Main element not found");
  }
}
