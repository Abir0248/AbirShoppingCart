import { products } from "./product.js";
import {
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  calculateTotal,
} from "./cart.js";

function displayProducts() {
  const productsDiv = document.getElementById("products");
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <h5>${product.name}</h5>
      <p>Price: $${product.price}</p>
      <button class="add-to-cart btn btn-primary" data-id="${product.id}">Add to Cart</button>
    `;
    productsDiv.appendChild(productDiv);
  });
}

displayProducts();
