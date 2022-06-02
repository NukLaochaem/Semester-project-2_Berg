const heroBannerContainer = document.querySelector(".hero-container");
const featuredContainer = document.querySelector(".featured-container");
const homeUrl = "http://localhost:1337/home";

(async function homeAPI() {
  try {
    const response = await fetch(homeUrl);
    const json = await response.json();
    const imageUrl = "http://localhost:1337" + json.hero_banner.url;

    heroBannerContainer.innerHTML = `<div class="hero-banner" style="background-image: url(${imageUrl});">
                                        <h1 class="banner-text text-center rounded">Shoes Made From Salmon Skin</h1>
                                      </div>`;
  } catch (error) {
    console.log(error);
  }
})();

const productUrl = "http://localhost:1337/products";
(async function api() {
  try {
    const response = await fetch(productUrl);
    const jsonRespon = await response.json();

    jsonRespon.forEach(function (product) {
      console.log(product);
      const featuredImageUrl = "http://localhost:1337" + product.image.url;

      if (product.featured === true) {
        featuredContainer.innerHTML += `
                                      <div class="featured-product-container row">
                                        <h2 class="text-center mt-4">${product.title}</h2>
                                        <div class="col-12 col-md-6 text-center my-5 px-5">
                                          <img class="featured-img img-fluid rounded text-center" src="${featuredImageUrl}" alt="featured products">
                                        </div>
                                        <div class="col-12 col-md-6 text-center my-5 px-5">
                                          <img class="featured-img img-fluid rounded text-center" src="${featuredImageUrl}" alt="featured products">
                                        </div>
                                      <div> 
                                      `;
      }
    });
  } catch (error) {
    console.log(error);
  }
})();
