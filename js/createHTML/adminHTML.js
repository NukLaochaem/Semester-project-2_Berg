export default function adminHTML(json) {
  const adminMenuContainer = document.querySelector(".admin-product-menu");

  json.forEach(function (product) {
    console.log(json);
    const productImage = "http://localhost:1337" + product.image.url;

    adminMenuContainer.innerHTML += `<div class="admin-item-container col-lg-4 col-md-12 my-4">
                                      <a href="edit.html?id=${product.id}"><img class="admin-images rounded" src="${productImage}" alt="${product.title}"></a>
                                      <h4 class="text-center mt-4">${product.title} -
                                      <span><a href="edit.html?id=${product.id}">Edit</a></span
                                      </h4>
                                    </div>`;
  });
}
