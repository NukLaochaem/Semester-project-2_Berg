import { saveToken } from "./utility/localStorage.js";
import { saveUser } from "./utility/localStorage.js";
import { displayMessage } from "./components/message.js";

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const messageContainer = document.querySelector(".log-ing-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  messageContainer.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue === 0) {
    return displayMessage(
      "form-error",
      "Username and Password requires",
      ".log-ing-container"
    );
  }
  adminUser(usernameValue, passwordValue);
}

const url = "http://localhost:1337/auth/local";

async function adminUser(username, password) {
  const userData = JSON.stringify({
    identifier: username,
    password: password,
  });

  const options = {
    method: "POST",
    body: userData,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);

      location.href = "/admin.html";
    }
    if (json.error) {
      return displayMessage(
        "form-error",
        "Invalid username/password",
        ".log-ing-container"
      );
    }
  } catch (error) {
    console.log(error);
  }
}
