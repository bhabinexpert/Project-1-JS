import { findproductInCart } from "./findProductInCard.js";
import { createHorizontalProductCard } from "./createHorizontalProductCard.js";
const cartContainer = document.getElementById("cart")

const emptyCartHTML = `
  <div style="width:100%;text-align:center;">
    <h3>Your Cart is empty! continue Adding some products..</h3>
    <button id="go-to-products" style="margin-top:1rem;padding:0.75rem 2rem;font-size:1rem;background:#334155;color:#fff;border:none;border-radius:4px;cursor:pointer;">Add Products</button>
  </div>
`;

let cart = [];
try {
  cart = JSON.parse(localStorage.getItem("cart")) || [];
} catch (e) {
  cart = [];
}

if (cart.length === 0) {
  cartContainer.innerHTML = emptyCartHTML;
  const btn = document.getElementById("go-to-products");
  if (btn) {
    btn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
} else {
  // createProductCart(cart, cartContainer, findproductInCart, "cart");
  createHorizontalProductCard(cart, cartContainer, findproductInCart, "cart");
}

cartContainer.addEventListener("click", (event) => {
  if (event.target.closest("button.cart-btn")) {
    const cartButton = event.target.closest("button.cart-btn");
    const prodId = cartButton.dataset.id;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(({ _id }) => _id !== prodId);
    localStorage.setItem("cart", JSON.stringify(cart));
    // Re-render the cart container
    if (cart.length === 0) {
      cartContainer.innerHTML = emptyCartHTML;
      const btn = document.getElementById("go-to-products");
      if (btn) {
        btn.addEventListener("click", () => {
          window.location.href = "index.html";
        });
      }
    } else {
      cartContainer.innerHTML = "";
      createHorizontalProductCard(cart, cartContainer, findproductInCart, "cart");
    }
  }
});

const itemCount = document.querySelector(".item-count")
itemCount.innerText = JSON.parse(localStorage.getItem("cart")).length

const itemCost = document.querySelector(".item-cost")
itemCost.innerText = JSON.parse(localStorage.getItem("cart")).reduce((acc, curr)=> acc + curr.oldprice,0)

const fixPrice = JSON.parse(localStorage.getItem("cart")).reduce((acc,curr)=> acc + curr.oldprice,0)

const discountedPrice = JSON.parse(localStorage.getItem("cart")).reduce((acc,curr)=> acc + curr.price,0)

const offerPrice = document.querySelector(".offerprice")
offerPrice.innerText = `Rs. ${discountedPrice}`

const Discount = fixPrice - discountedPrice

const finalDiscount = document.querySelector(".finalDiscount")
finalDiscount.innerText = Discount

const deliveryCharge = document.querySelector(".delivery-charge")
const deliveryChargeAmnt = JSON.parse(localStorage.getItem("cart")).length * 100 
deliveryCharge.innerText = deliveryChargeAmnt

const totalBillAmnt = discountedPrice + deliveryChargeAmnt
console.log(totalBillAmnt)
const totalAmnt = document.querySelector(".total")
totalAmnt.innerText = discountedPrice + deliveryChargeAmnt

const savings = document.querySelector(".savings")
savings.innerText = Discount

console.log(Discount)
console.log(fixPrice)
console.log(discountedPrice)