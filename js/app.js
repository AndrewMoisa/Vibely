import { registerHandler } from "./logic/handlers/registerHandlers.js";

function router() {
  const pathname = window.location.pathname;
  console.log(pathname);

  switch (pathname) {
    case "/":
    case "/register/":
      registerHandler();
      break;
  }
}

router();
