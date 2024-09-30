import { cart } from "../../data/cart.js";

function renderCheckoutHeader() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const quantityHeaderHTML = 
  `
    Checkout (<a class="return-to-home-link"
    href="amazon.html">${cartQuantity} items</a>)
  `;

  document.querySelector('.js-checkout-quantity')
    .innerHTML = quantityHeaderHTML;
}

export default renderCheckoutHeader