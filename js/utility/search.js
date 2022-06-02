import { productHTML } from "../createHTML/productHTML.js";

export default function itemSearch(json) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProducts = json.filter((product) => {
      if (product.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });
    productHTML(filteredProducts);
  };
}
