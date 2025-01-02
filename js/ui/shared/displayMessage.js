export function displayMessage(container, messageType, message, icon) {
  let parent = container;

  if (typeof container === "string") {
    parent = document.querySelector(container);
  }

  parent.innerHTML = `<div class="${messageType}" role="alert">${message} <span>${icon}</span>  </div>`;
}
