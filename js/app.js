import { loginHandler } from "./logic/handlers/loginHandler.js";
import { registerHandler } from "./logic/handlers/registerHandlers.js";
import { profileHandler } from "./logic/handlers/profileHandler.js";
import { renderMenu } from "./ui/shared/renderMenu.js";
import { renderHeader } from "./ui/shared/renderHeader.js";

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
      document.addEventListener("DOMContentLoaded", renderMenu);
      document.addEventListener("DOMContentLoaded", profileHandler);

      break;

    case "/posts/index.html":
    case "/posts/":
      document.addEventListener("DOMContentLoaded", renderHeader);
      document.addEventListener("DOMContentLoaded", renderMenu);
  }
}

router();
