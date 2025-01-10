export function renderLoginMessage(containerMsg) {
  // Create the div element
  const div = document.createElement("div");

  // Create the paragraph element
  const p = document.createElement("p");
  p.className = "text-center text-sm text-gray-400 pt-5";
  p.textContent = "You can now log in with your new account. ";

  // Create the anchor (a) element
  const a = document.createElement("a");
  a.className = "text-blue-500";
  a.href = "/";
  a.textContent = "Log in";

  // Append the anchor to the paragraph
  p.appendChild(a);

  // Append the paragraph to the div
  div.appendChild(p);

  // Append the div to the container
  containerMsg.appendChild(div);
}
