import { logOut } from "./components/logoutBtn.js";
import { getToken } from "./utility/localStorage.js";
import adminHTML from "./createHTML/adminHTML.js";

const productUrl = "http://localhost:1337/products";

const token = getToken();
if (!token) {
  location.href = "/login.html";
}

(async function api() {
  try {
    const response = await fetch(productUrl);
    const json = await response.json();

    adminHTML(json);
  } catch (error) {
    console.log(error);
  }
})();
logOut();
