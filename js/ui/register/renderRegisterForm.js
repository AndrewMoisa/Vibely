export function renderRegisterForm() {
  // Create the section element
  const headerSection = document.createElement("section");

  // Create the image element
  const logoImg = document.createElement("img");
  logoImg.classList.add("w-full");
  logoImg.src = "../images/logo.svg"; // Path to the logo image
  logoImg.alt = "Vibely"; // Alt text for accessibility

  // Append the image to the section
  headerSection.appendChild(logoImg);

  const header = document.querySelector("header"); // Select the header
  header.appendChild(headerSection); // Append the section to the header

  // Create the main section element
  const section = document.createElement("section");
  section.classList.add("pt-12");

  // Create the flex container div
  const flexDiv = document.createElement("div");
  flexDiv.classList.add("flex");

  // Create the form element
  const form = document.createElement("form");
  form.id = "registerForm";

  // Create the heading
  const heading = document.createElement("h1");
  heading.classList.add("text-sm", "text-left", "font-semibold", "my-2");
  heading.textContent = "Register into Vibely";

  // Create the message div
  const messageDiv = document.createElement("div");
  messageDiv.id = "message";

  // Create the fieldset
  const fieldset = document.createElement("fieldset");

  // Create the name input field
  const nameDiv = document.createElement("div");
  nameDiv.classList.add("my-2");
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");
  const nameInput = document.createElement("input");
  nameInput.classList.add(
    "bg-gray-100",
    "border",
    "border-gray-400",
    "rounded-sm",
    "p-2",
    "w-80",
    "placeholder:text-xs"
  );
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "name";
  nameInput.placeholder = "Name";
  nameInput.setAttribute("aria-describedby", "nameHelp");
  nameInput.required = true;
  nameDiv.appendChild(nameLabel);
  nameDiv.appendChild(nameInput);

  // Create the email input field
  const emailDiv = document.createElement("div");
  emailDiv.classList.add("my-2");
  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  const emailInput = document.createElement("input");
  emailInput.classList.add(
    "bg-gray-100",
    "border",
    "border-gray-400",
    "rounded-sm",
    "p-2",
    "w-80",
    "placeholder:text-xs"
  );
  emailInput.type = "text";
  emailInput.id = "email";
  emailInput.name = "email";
  emailInput.placeholder = "Email";
  emailInput.pattern = "^[^@]+@(stud\\.|)(noroff\\.no)$";
  emailInput.title = "Please use a valid Noroff email address";
  emailInput.setAttribute("aria-describedby", "emailHelp");
  emailInput.required = true;
  emailDiv.appendChild(emailLabel);
  emailDiv.appendChild(emailInput);

  // Create the password input field
  const passwordDiv = document.createElement("div");
  passwordDiv.classList.add("my-2");
  const passwordLabel = document.createElement("label");
  passwordLabel.setAttribute("for", "password");
  const passwordInput = document.createElement("input");
  passwordInput.classList.add(
    "bg-gray-100",
    "border",
    "border-gray-400",
    "rounded-sm",
    "p-2",
    "w-80",
    "placeholder:text-xs"
  );
  passwordInput.type = "password";
  passwordInput.id = "password";
  passwordInput.name = "password";
  passwordInput.placeholder = "Password";
  passwordInput.minLength = 8;
  passwordInput.required = true;
  passwordDiv.appendChild(passwordLabel);
  passwordDiv.appendChild(passwordInput);

  // Create the bio textarea
  const bioDiv = document.createElement("div");
  bioDiv.classList.add("my-2");
  const bioLabel = document.createElement("label");
  bioLabel.setAttribute("for", "bio");
  const bioTextarea = document.createElement("textarea");
  bioTextarea.classList.add(
    "bg-gray-100",
    "border",
    "border-gray-400",
    "rounded-sm",
    "p-2",
    "w-80",
    "placeholder:text-xs"
  );
  bioTextarea.id = "bio";
  bioTextarea.name = "bio";
  bioTextarea.placeholder = "Bio";
  bioTextarea.rows = 3;
  bioDiv.appendChild(bioLabel);
  bioDiv.appendChild(bioTextarea);

  // Create the profile image URL input field
  const profileImageDiv = document.createElement("div");
  profileImageDiv.classList.add("my-2");
  const profileImageLabel = document.createElement("label");
  profileImageLabel.setAttribute("for", "profileImage");
  const profileImageInput = document.createElement("input");
  profileImageInput.classList.add(
    "bg-gray-100",
    "border",
    "border-gray-400",
    "rounded-sm",
    "p-2",
    "w-80",
    "placeholder:text-xs"
  );
  profileImageInput.type = "url";
  profileImageInput.id = "profileImage";
  profileImageInput.name = "profileImage";
  profileImageInput.setAttribute("aria-describedby", "profileImageHelp");
  profileImageInput.placeholder = "Profile Image URL";
  profileImageDiv.appendChild(profileImageLabel);
  profileImageDiv.appendChild(profileImageInput);

  // Append all input fields to the fieldset
  fieldset.appendChild(nameDiv);
  fieldset.appendChild(emailDiv);
  fieldset.appendChild(passwordDiv);
  fieldset.appendChild(bioDiv);
  fieldset.appendChild(profileImageDiv);

  // Create the submit button
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("my-5");
  const submitButton = document.createElement("button");
  submitButton.classList.add(
    "flex",
    "justify-center",
    "w-full",
    "bg-blue-500",
    "text-white",
    "p-2",
    "rounded-md",
    "text-sm",
    "hover:bg-blue-600"
  );
  submitButton.type = "submit";
  submitButton.textContent = "Register";
  buttonDiv.appendChild(submitButton);

  // Append all elements to the form
  form.appendChild(heading);
  form.appendChild(messageDiv);
  form.appendChild(fieldset);
  form.appendChild(buttonDiv);

  // Append the form to the flex container
  flexDiv.appendChild(form);

  // Append the flex container to the section
  section.appendChild(flexDiv);

  // Return the section element
  const main = document.querySelector("main");
  main.appendChild(section);
}
