import { getToken } from "./localStorage.js";

export default function deleteButton(id) {
  const buttonContainer = document.querySelector(".button-container");

  buttonContainer.innerHTML += `<button type="button" class="delete-btn rounded">Delete</button>`;

  const deleteBtn = document.querySelector(".delete-btn");

  deleteBtn.onclick = async function () {
    console.log(id);

    const deleteConfirm = confirm(
      "Are you sure you want to delete the product?"
    );

    if (deleteConfirm) {
      const productUrl = "http://localhost:1337/products/" + id;

      const token = getToken();

      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      location.href = "/admin.html";
      try {
        const response = await fetch(productUrl, options);
        const json = await response.JSON();

        console.log(json);
      } catch (error) {
        console.log(error);
      }
    }
  };
}
