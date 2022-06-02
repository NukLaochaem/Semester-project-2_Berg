export function productHTML(json) {
  const productsContainer = document.querySelector(".products-list");
  productsContainer.innerHTML = "";

  json.forEach(function (product) {
    const productImageUrl = "http://localhost:1337" + product.image.url;

    if (product.featured === false) {
      productsContainer.innerHTML += `
                                    <div class="row">
                                      <div class="col-12 col-md-4 text-center my-5 gap-3">
                                        <a href="details.html?id=${product.id}"><img class="featured-img img-fluid rounded text-center" src="${productImageUrl}" alt="${product.title}"></a>
                                        <h3 class="text-center mt-4"><a href="details.html?id=${product.id}">${product.title}</a></h3>
                                        <a href="details.html?id=${product.id}" class="text-center mt-4">${product.price}</a>
                                      </div>

                                      <div class="col-12 col-md-4 text-center my-5 gap-3">
                                        <a href="details.html?id=${product.id}"><img class="featured-img img-fluid rounded text-center" src="${productImageUrl}" alt="${product.title}"></a>
                                        <h3 class="text-center mt-4"><a href="details.html?id=${product.id}">${product.title}</a></h3>
                                        <a href="details.html?id=${product.id}" class="text-center mt-4">${product.price}</a>
                                      </div>

                                      <div class="col-12 col-md-4 text-center my-5 gap-3">
                                        <a href="details.html?id=${product.id}"><img class="featured-img img-fluid rounded text-center" src="${productImageUrl}" alt="${product.title}"></a>
                                        <h3 class="text-center mt-4"><a href="details.html?id=${product.id}">${product.title}</a></h3>
                                        <a href="details.html?id=${product.id}" class="text-center mt-4">${product.price}</a>
                                      </div>
                                    <div> `;
    }
  });
}
