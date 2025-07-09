import { createProductCart } from "./createProductCart.js";
import { findproductInCart } from "./findProductInCard.js";
const cartContainer = document.getElementById("cart")

let cart = [];
try {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
} catch (e) {
  cart = [];
}

if (cart.length === 0) {
  cartContainer.innerHTML = `
    <div style="width:100%;text-align:center;">
      <h3>You haven't added any products to the cart yet!</h3>
      <button id="go-to-products" style="margin-top:1rem;padding:0.75rem 2rem;font-size:1rem;background:#334155;color:#fff;border:none;border-radius:4px;cursor:pointer;">Add Products</button>
    </div>
  `;
  const btn = document.getElementById("go-to-products");
  if (btn) {
    btn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
} else {
  createProductCart(cart, cartContainer, findproductInCart, "cart");
}

cartContainer.addEventListener("click", (event) => {
  if (event.target.closest("button.cart-btn")) {
    const cartButton = event.target.closest("button.cart-btn");
    const prodId = cartButton.dataset.id;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(({ _id }) => _id !== prodId);
    localStorage.setItem("cart", JSON.stringify(cart));
    cartButton.closest(".card-vertical").remove();
    // Show empty message if cart is now empty
    if (cart.length === 0) {
      cartContainer.innerHTML = `
        <div style="width:100%;text-align:center;">
          <h3>You haven't added any products to the cart yet!</h3>
          <button id="go-to-products" style="margin-top:1rem;padding:0.75rem 2rem;font-size:1rem;background:#334155;color:#fff;border:none;border-radius:4px;cursor:pointer;">Add Products</button>
        </div>
      `;
      const btn = document.getElementById("go-to-products");
      if (btn) {
        btn.addEventListener("click", () => {
          window.location.href = "index.html";
        });
      }
    }
  }
});