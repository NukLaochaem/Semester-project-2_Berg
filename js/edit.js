import { getToken } from "./utility/localStorage.js";
import { displayMessage } from "./components/message.js";
import { logOut } from "./components/logoutBtn.js";
import deleteButton from "./utility/deleteProduct.js";

const productTitle = document.querySelector("#product-title");
const productPrice = document.querySelector("#product-price");
const productImg = document.querySelector("#uploadFile");
const featured = document.querySelector("#featured-product");
const description = document.querySelector("#description");
const form = document.querySelector("form");
const messageContainer = document.querySelector(".message-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const productUrl = "http://localhost:1337/products/" + id;

const token = getToken();

if (!token) {
  location.href = "/login.html";
}
logOut();

(async function editDetails() {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    productTitle.value = details.title;
    productPrice.value = details.price;
    //productImg.value = details.image;
    featured.checked = details.featured;
    description.value = details.description;

    deleteButton(details.id);

    console.log(details);
  } catch (error) {
    console.log(error);
  }
})();

form.addEventListener("submit", editForm);

function editForm() {
  event.preventDefault();

  messageContainer.innerHTML = "";

  const titleValue = productTitle.value.trim();
  const priceValue = parseFloat(productPrice.value);
  const productImageValue = productImg.value;
  const featuredProduct = featured.checked;
  const descriptionValue = description.value.trim();

  if (
    titleValue.length === 0 ||
    priceValue.length === 0 ||
    isNaN(priceValue) ||
    descriptionValue.length === 0 ||
    productImageValue.length === null
  ) {
    return displayMessage("form-error", "Input invalid", ".message-container");
  }
  editProduct(
    titleValue,
    priceValue,
    productImageValue,
    featuredProduct,
    descriptionValue
  );
}

async function editProduct(title, price, image, featured, description) {
  const data = JSON.stringify({
    title: title,
    price: price,
    image: image,
    featured: featured,
    description: description,
  });

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(productUrl, options);
    const json = await response.json();

    if (json.updated_at) {
      displayMessage(
        "form-success",
        "Product has been updated",
        ".message-container"
      );
      window.scrollTo(0, 0);
    }

    if (json.error) {
      displayMessage(
        "form-error",
        "Please log in to continue",
        ".message-container"
      );
    }
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
