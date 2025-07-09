import products from "./database/product.js";
import { createProductCart } from "./createProductCart.js";
import { findproductInCart } from "./findProductInCard.js";
const productContainer = document.getElementById("products")
let cart = []

productContainer.addEventListener("click", (event) => {
    // Only handle clicks on the cart button
    if (event.target.closest("button.cart-btn")) {
        const cartButton = event.target.closest("button.cart-btn");
        const prodId = cartButton.dataset.id;
        // Always get the latest cart from localStorage
        const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
        const isproductInCart = findproductInCart(currentCart, prodId);
        if (!isproductInCart) {
            const productToAddToCart = products.filter(({ _id }) => _id === prodId);
            const newCart = [...currentCart, ...productToAddToCart];
            localStorage.setItem("cart", JSON.stringify(newCart));
            cartButton.innerHTML =
                "Go To Cart <span class='material-icons-outlined'>shopping_cart</span>";
        } else {
            location.href = "cart.html";
        }
    }
});

createProductCart(products, productContainer, findproductInCart, "products")