import { loginHandler } from "./logic/handlers/loginHandler.js";
import { registerHandler } from "./logic/handlers/registerHandlers.js";
import { fetchProfile } from "./logic/api/profile.js";

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
      fetchProfile();
      break;
  }
}

router();
