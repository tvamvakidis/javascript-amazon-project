import { cart, getCartQuantity } from "./cart.js";

export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

try {
  document.querySelector('.js-cart-quantity').innerHTML = getCartQuantity();
} catch(error) {
  console.log(error);
}