import { getToken } from "./utility/localStorage.js";
import { displayMessage } from "./components/message.js";
import { logOut } from "./components/logoutBtn.js";
logOut();
const productTitle = document.querySelector("#product-title");
const productPrice = document.querySelector("#product-price");
const featured = document.querySelector("#featured-product");
const imgValue = document.querySelector("#uploadFile");
const description = document.querySelector("#description");
const form = document.querySelector("form");
const messageContainer = document.querySelector(".message-container");

const token = getToken();
if (!token) {
  location.href = "/login.html";
}

form.addEventListener("submit", formSubmit);

//      Get product details from id display in input
function formSubmit(event) {
  event.preventDefault();

  messageContainer.innerHTML = "";
  const formData = new FormData();
  const formElements = form.elements;
  const imgCheck = imgValue.value;
  const titleValue = productTitle.value.trim();
  const priceValue = parseFloat(productPrice.value);
  const featuredProduct = featured.checked;
  const descriptionValue = description.value.trim();

  if (
    titleValue.length === 0 ||
    priceValue.length === 0 ||
    imgCheck.length === 0 ||
    isNaN(priceValue) ||
    descriptionValue.length === 0
  ) {
    return displayMessage("form-error", "Input invalid", ".message-container");
  } else {
    const data = {
      title: titleValue,
      price: priceValue,
      featured: featuredProduct,
      description: descriptionValue,
    };

    for (let i = 0; i < formElements.length; i++) {
      const currentElement = formElements[i];

      if (!["submit", "file"].includes(currentElement.type)) {
        data[currentElement.name] = currentElement.value;
      } else if (currentElement.type === "file") {
        if (currentElement.files.length === 1) {
          const file = currentElement.files[0];
          formData.append(`files.${currentElement.name}`, file, file.name);
        } else {
          for (let i = 0; i < currentElement.files.length; i++) {
            const file = currentElement.files[i];
            formData.append(`files.${currentElement.name}`, file, file.name);
          }
        }
      }
    }
    formData.append("data", JSON.stringify(data));
    addProduct(formData);
  }
}
// Update product via POST
async function addProduct(data) {
  const productUrl = "http://localhost:1337/products";

  const options = {
    method: "POST",
    body: data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(productUrl, options);
    const json = await response.json();

    if (json.created_at) {
      form.reset();
      return displayMessage(
        "form-success",
        "Product has been added",
        ".message-container"
      );
    }

    if (json.error) {
      return displayMessage(
        "form-error",
        "Login requires",
        ".message-container"
      );
    }
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
