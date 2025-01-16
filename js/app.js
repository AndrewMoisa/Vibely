import { loginHandler } from "./logic/handlers/loginHandler.js";
import { registerHandler } from "./logic/handlers/registerHandlers.js";
import { profileHandler } from "./logic/handlers/profileHandler.js";
import { renderMenu } from "./ui/shared/renderMenu.js";
import { renderHeader } from "./ui/shared/renderHeader.js";
import { createPostHandler } from "./logic/handlers/createPostHandler.js";
import { postHandler } from "./logic/handlers/postHandler.js";
import { editPostHandler } from "./logic/handlers/editPostHandler.js";

function router() {
  const pathname = window.location.pathname;

  switch (pathname) {
    case "/":
    case "/index.html":
      loginHandler();
      break;

    case "/register/index.html":
    case "/register/":
      registerHandler();
      break;

    case "/profile/index.html":
    case "/profile/":
      document.addEventListener("DOMContentLoaded", renderHeader);
      document.addEventListener("DOMContentLoaded", profileHandler);
      document.addEventListener("DOMContentLoaded", renderMenu);

      break;

    case "/posts/index.html":
    case "/posts/":
      document.addEventListener("DOMContentLoaded", renderHeader);
      document.addEventListener("DOMContentLoaded", renderMenu);
      document.addEventListener("DOMContentLoaded", createPostHandler);
      break;

    case "/post/index.html":
    case "/post/":
      document.addEventListener("DOMContentLoaded", renderHeader);
      document.addEventListener("DOMContentLoaded", renderMenu);
      document.addEventListener("DOMContentLoaded", postHandler);

      break;

    case "/edit/index.html":
    case "/edit/":
      document.addEventListener("DOMContentLoaded", renderHeader);
      document.addEventListener("DOMContentLoaded", renderMenu);
      document.addEventListener("DOMContentLoaded", editPostHandler);

      break;
  }
}

router();
