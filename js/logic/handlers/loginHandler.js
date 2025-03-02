/**
 * Initializes the login form handler by attaching an event listener to the form.
 * This function checks if the form with the ID `#loginForm` exists and adds a submit event listener.
 */
export function loginHandler() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", submitForm);
  }
}

/**
 * Handles form submission for user login.
 *
 * Prevents the default form submission, gathers form data, and attempts to log in the user.
 * Displays messages based on success or failure.
 *
 * @param {Event} event - The form submit event.
 */
async function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log(data);

  const containerMsg = document.querySelector("#message");
  const fieldset = form.querySelector("fieldset");
  const button = form.querySelector("button");

  try {
    fieldset.disabled = true;
    button.textContent = "Loading...";

    const response = await loginUser(data);
    console.log(response);
    const { data: userData } = response;

    console.log(userData);
    const { accessToken, name } = userData;

    saveToken(accessToken);
    saveUsername(name);

    // Redirect to profile page upon successful login
    window.location.href = "../../../profile/";
  } catch (error) {
    // Display error message if login fails
    displayMessage(
      containerMsg,
      types.error.classes,
      error.message,
      types.error.icon
    );
  } finally {
    // Re-enable form elements and reset button text
    fieldset.disabled = false;
    button.textContent = "Submit";
  }
}
