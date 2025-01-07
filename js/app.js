import { loginHandler } from "./logic/handlers/loginHandler.js";
import { registerHandler } from "./logic/handlers/registerHandlers.js";
import { fetchProfile } from "./logic/posts/create.js";

function router() {
  const pathname = window.location.pathname;
  console.log(pathname);

  switch (pathname) {
    case "/":
      loginHandler();
      break;
    case "/index.html":
      loginHandler();
      break;

    case "/register/":
      registerHandler();
      break;

    case "/profile/":
      fetchProfile();
      break;
  }
}

router();
