export function createDetails(details) {
  const productDetailsContainer = document.querySelector(".detail-container");
  const productImageUrl = "http://localhost:1337" + details.image.url;
  productDetailsContainer.innerHTML += `
                                  <div class="container">
                                    <div class="details-product my-5">
                                      <img class="product-detail-img rounded img-fluid mx-auto d-block" src="${productImageUrl}" alt="${details.title}">
                                      <h4 class="text-center mt-4">${details.title}</h4>
                                      <h4 class="text-center mt-4">${details.price}</h4>
                                      <p class="">${details.description}</p>

                                      <div class="text-center">
                                        <button class="bg-dark add-cart-btn rounded" 
                                          data-id="${details.id}" 
                                          data-title="${details.title}"
                                          data-price="${details.price}"
                                          data-img="${details.image.url}"
                                          data-quantity="1"
                                          >Add to cart
                                      </button></div>
                                    </div>
                                    
                                  <div>`;
}
