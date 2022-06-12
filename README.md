# Semester Project 2 - Berg Website shoes from Bergen, Norway

## Description

Berg Shoes is a E-commerce website that has both customer-facing and admin sections. <br>
The website will be populated by a Strapi API supplied by Noroff


### The Project:

- Admin page to edit, add and delete products
- Responsive on all devices
- includes home page, product list, product detail, contact, admin page.

#### Home page

- A hero banner with an image that is uploaded to Strapi. You can find this in the Home single type in the provided Strapi project.
- A list of featured products. On Strapi products can be marked as ‘featured’. When a product is marked as ‘featured’ it should be displayed on the homepage. You can find the products in the Products collection type.

#### Products page

- A list of all products added to Strapi. Each product must display its title, price and image. The product should link to its products detail page.
- A search text box. When searching (filtering), only the products that include the searched text in their title or description should be listed.

#### Product details page

This page is reached by a user clicking on a product on the product list page. The product details page must include:

- title
- description
- image
- price
- an add to cart button. This will toggle the product in and out of a cart array stored in local storage.

#### Cart/Basket page 

The cart/basket page must display a list of all products added to the cart. Load the items that have been added to local storage and display them on the page. If the cart is empty display a message indicating this.

- title
- price
- a link to the product view page
- image

#### Admin section

The admin section (apart from the log in form) must only be accessible to logged in admin users and must include the following features.

Login/Logout
Create an admin login form that allows administrator users to login. Use local storage to keep the user logged in.

When logged in, display a logout button in the layout that logs the user out. Logging out should not clear the cart.

Add/edit products
Create form(s) that allow products to be added and edited. The form must allow the user to toggle whether a product is featured.



### Built With

- HTML
- Css/Sass
- Javascript
- Bootstrap


### Getting Started

### Installing

1. Clone the repo:

```
git clone [git@github.com:NoroffFEU/portfolio-1-example.git](https://github.com/NukLaochaem/semester-project-2_berg)
```

2. Run locallly Strapi server: <a ahref="https://github.com/NoroffFEU/strapi-sp2"></a>
```
npm install

npm run develop
```
- email: admin@admin.com
- username: admin
- password: Pass1234

### Running

To run the project, run the following:

```bash
Install <a ahref="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Live Server</a> on VS code
```
