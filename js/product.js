import itemSearch from "./utility/search.js";
import { productHTML } from "./createHTML/productHTML.js";
const productUrl = "http://localhost:1337/products";

(async function api() {
  try {
    const response = await fetch(productUrl);
    const json = await response.json();

    productHTML(json);
    itemSearch(json);
  } catch (error) {
    console.log(error);
  }
})();
