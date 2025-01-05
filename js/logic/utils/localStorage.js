const TOKEN_KEY = "token";
const USERNAME_KEY = "username";

export function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  localStorage.getItem(TOKEN_KEY);
}

export function saveUsername(username) {
  localStorage.setItem(USERNAME_KEY, username);
}

export function getUsername() {
  localStorage.getItem(USERNAME_KEY);
}
