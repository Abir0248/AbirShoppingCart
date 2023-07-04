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

function displayCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";
  cart.forEach((item) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("cart-item");
    cartItemDiv.innerHTML = `
        <h5>${item.product.name}</h5>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: $${item.product.price}</p>
        <p>Total: $${item.product.price * item.quantity}</p>
        <button class="remove-from-cart btn btn-danger" data-id="${
          item.product.id
        }">Remove</button>
      `;
    cartDiv.appendChild(cartItemDiv);
  });
  const totalDiv = document.createElement("div");
  totalDiv.innerHTML = `<h4>Total: $${calculateTotal()}</h4>`;
  cartDiv.appendChild(totalDiv);
}

displayProducts();
displayCart();
