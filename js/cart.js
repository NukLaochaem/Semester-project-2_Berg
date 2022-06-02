import { currentLocalStorage } from "./utility/localStorage.js";

const itemContainer = document.querySelector(".item_container");
const priceTotal = document.querySelector(".total-amount");
const cartItem = currentLocalStorage();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const productUrl = "http://localhost:1337/products/" + id;

if (cartItem.length === 0) {
  itemContainer.innerHTML += `<div class="mt-4">
                                  <h4 class="emptry_cart"> Your cart is emptry, more products <a href="product.html">Here</a></h4>
                                </div>`;
}

cartItem.forEach((product) => {
  const productImageUrl = "http://localhost:1337" + product.image;
  const productPrice = `${product.price * product.quantity}`;

  itemContainer.innerHTML += `<div class="cart-item d-flex justify-content-between align-items-center my-3">
                                  <div class="image-box">
                                    <a href="details.html?id=${product.id}">
                                      <img src="${productImageUrl}" alt="${product.title}">
                                    </a>
                                  </div>
                                  <div class="about">
                                    <h2 class="cart-title d-none d-sm-block">
                                    <a href="details.html?id=${product.id}">${product.title}</a></h2>
                                  </div>
                                  <div class="counter d-flex justify-content-between align-items-center">
                                    <div class="count-btn minus d-flex justify-content-center align-items-center">-</div>
                                    <div class="count px-2">${product.quantity}</div>
                                    <div class="count-btn plus d-flex justify-content-center align-items-center">+</div>
                                  </div>
                                  <div class="prices text-right p-1">
                                    <div class="amount">${productPrice} $</div>
                                    <div class="remove-item"><u>Remove</u></div>
                                  </div>
                              </div>`;
  (function getTotalSumOfLocalStorage() {
    let currentStorage = localStorage.getItem("cart");

    let localStorageObject = JSON.parse(currentStorage);
    let total = 0;

    localStorageObject.map((item) => {
      total = total + parseInt(item.price);
    });
    priceTotal.innerHTML = ` ${total} $ `;
  })();

  const removeBtn = document.querySelectorAll(".delete-all");
  removeBtn.forEach((button) => {
    button.addEventListener("click", clearProduct);
  });

  function clearProduct() {
    if (confirm("Remove all products?")) {
      localStorage.removeItem("cart");
      itemContainer.innerHTML = `<div class="mt-4">
                                    <h4 class="emptry_cart"> Your cart is emptry, more products <a href="product.html">Here</a></h4>
                                  </div>`;
      priceTotal.innerHTML = "";
    }
  }

  //--------------------------    remove singel product           ---------------------------------//
  /*const removeBtn = document.querySelectorAll(".remove-item");
  removeBtn.forEach((button) => {
    button.addEventListener("click", clearProduct);
  });

  function clearProduct() {
    let currentStorage = localStorage.getItem("cart");
    let localStorageObject = JSON.parse(currentStorage);
    if (confirm("Remove item from cart?")) {
      let currentCartProduct = 0;
      localStorageObject.map((item) => {
        currentCartProduct =
          currentCartProduct + localStorage.removeItem(item.id);
      });
    }
  }*/
});
