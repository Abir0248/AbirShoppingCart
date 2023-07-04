import {
  addToCart,
  removeFromCart,
  clearCart,
  calculateTotal,
  getCart,
} from "./cart.js";
import products from "./product.js";

const productsDiv = document.getElementById("product-list");
const cartDiv = document.getElementById("cart");
const clearCartButton = document.getElementById("clear-cart");

// Display products
function displayProducts() {
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

// Display cart items
function displayCart() {
  cartDiv.innerHTML = "";
  const cartItems = getCart();
  cartItems.forEach((item) => {
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
  const totalAmount = document.createElement("p");
  totalAmount.classList.add("total-amount");
  totalAmount.innerHTML = `Total: $${calculateTotal()}`;
  cartDiv.appendChild(totalAmount);
}

// Add to cart event listener
function handleAddToCartClick(event) {
  if (event.target.classList.contains("add-to-cart")) {
    const productId = parseInt(event.target.dataset.id);
    const product = products.find((item) => item.id === productId);
    addToCart(product);
    displayCart();
  }
}

// Remove from cart event listener
function handleRemoveFromCartClick(event) {
  if (event.target.classList.contains("remove-from-cart")) {
    const productId = parseInt(event.target.dataset.id);
    removeFromCart(productId);
    displayCart();
  }
}

// Clear cart event listener
function handleClearCartClick() {
  clearCart();
  displayCart();
}

// Initialize the app
function init() {
  displayProducts();
  displayCart();
  productsDiv.addEventListener("click", handleAddToCartClick);
  cartDiv.addEventListener("click", handleRemoveFromCartClick);
  clearCartButton.addEventListener("click", handleClearCartClick);
}

init();
