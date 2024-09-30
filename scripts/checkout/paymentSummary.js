import { cart, resetCart }  from '../../data/cart.js';
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import { products, getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js"
import { addOrder } from "../../data/orders.js";

// export function renderPaymentSummary() {
//   let cartQuantity = 0;
//   let productPriceCent = 0;
//   let deliveryPrice = 0;

//   cart.forEach((cartItem) => {
//     cartQuantity += cartItem.quantity;
//     const productId = cartItem.productId
//     products.forEach((product) => {
//       if (product.id === productId) {
//         productPriceCent += product.priceCents * cartItem.quantity;
//       }
//     })

//     const deliveryOptionId = cartItem.deliveryOptionId;
  
//     let deliveryOption;
    
//     deliveryOptions.forEach((option) => {
//       if (option.id === deliveryOptionId) {
//         deliveryOption = option;
//         deliveryPrice += deliveryOption.priceCents;
//       }
//     });
//   })

//   productPriceCent = (productPriceCent / 100).toFixed(2);
  
//   const deliveryPriceDollar = Number((deliveryPrice / 100).toFixed(2));

//   document.querySelector('.js-checkout-quantity').innerHTML = cartQuantity;

//   document.querySelector('.js-order-quantity').innerHTML = `Items (${cartQuantity}):`;

//   document.querySelector('.js-total-priceCent').innerHTML = `$${productPriceCent}`;

//   document.querySelector('.js-delivery-price').innerHTML = `$${deliveryPriceDollar}`;

//   const totalBeforeTax = Number(productPriceCent) + deliveryPriceDollar;

//   document.querySelector('.js-total-before-tax').innerHTML = `$${totalBeforeTax.toFixed(2)}`;

//   const tax = (((totalBeforeTax).toFixed(2) * 100) / 1000).toFixed(2);

//   document.querySelector('.js-payment-tax').innerHTML = `$${tax}`;

//   const totalAfterTax = document.querySelector('.js-total-after-tax').innerHTML = `$${(Number(totalBeforeTax) + Number(tax)).toFixed(2)}`;
// }

export function renderPaymentSummary () {
  let productPriceCents = 0;
  let shippingPriceCents = 0;
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;

    cartQuantity += cartItem.quantity;
  });

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents =  totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  const paymentSummaryHTML = 
  `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div class="js-order-quantity">Items (${cartQuantity}):</div>
      <div class="payment-summary-money js-total-priceCent">
        $${formatCurrency(productPriceCents)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money 
        js-payment-summary-shipping js-delivery-price">
        $${formatCurrency(shippingPriceCents)}
      </div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money js-total-before-tax">
        $${formatCurrency(totalBeforeTaxCents)}
      </div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money js-payment-tax">
        $${formatCurrency(taxCents)}
      </div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money
        js-payment-summary-total js-total-after-tax">
        $${formatCurrency(totalCents)}
      </div>
    </div>

    <button class="place-order-button button-primary
      js-place-order">
      Place your order
    </button>
  `;

  document.querySelector('.js-payment-summary')
    .innerHTML = paymentSummaryHTML;

  document.querySelector('.js-place-order')
    .addEventListener('click', async () => {
      try{
        const response = await fetch('https://supersimplebackend.dev/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            cart: cart
          })
        });
        const order = await response.json();
        addOrder(order);

      } catch(error) {
        console.log('unexpected error. Try again later');
      }
      
      resetCart();
      window.location.href = 'orders.html';
    });
}