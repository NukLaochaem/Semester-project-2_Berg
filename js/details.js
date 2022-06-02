import { createDetails } from "./createHTML/detailsHTML.js";
import { currentLocalStorage } from "./utility/localStorage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const productUrl = "http://localhost:1337/products/" + id;

(async function api() {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    document.title = details.title;

    createDetails(details);

    const cartBtn = document.querySelector(".add-cart-btn");

    cartBtn.addEventListener("click", addCartBtn);

    function addCartBtn() {
      const messageContainer = document.querySelector(".cart-msg-container");
      messageContainer.innerHTML += `<h4 class="form-success">
                                      Item has been added to <a href="cart.html">Cart</a>
                                    </h4>`;
      window.scrollTo(0, 0);

      const productId = this.dataset.id;
      const productTitle = this.dataset.title;
      const productPrice = this.dataset.price;
      const productImg = this.dataset.img;
      const productQuantity = this.dataset.quantity;

      const currentCart = currentLocalStorage();

      const productExists = currentCart.find(function (cartProducts) {
        return cartProducts.id === id;
      });

      if (productExists === undefined) {
        const product = {
          id: productId,
          title: productTitle,
          price: productPrice,
          image: productImg,
          quantity: productQuantity,
        };
        currentCart.push(product);
        saveToCart(currentCart);
      } else {
        const newCart = currentCart.filter(
          (cartProducts) => cartProducts.id !== id
        );
        saveToCart(newCart);
      }
    }
  } catch (error) {
    console.log(error);
  }
})();

function saveToCart(cartProducts) {
  localStorage.setItem("cart", JSON.stringify(cartProducts));
}
