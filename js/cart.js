'use strict';
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
const yourcart = document.querySelector('tbody');
const footcart = document.querySelector('tfoot');
let cart = [];
function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart'));
  if(cartItems){
    cart=cartItems;
  }
  console.log(cart);
}
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}
// TODO: Remove all of the rows (tr) in the cart table (tbody)
let button = document.createElement('button');
button.textContent = "Clear Cart";
footcart.appendChild(button);
function clearCart() {
yourcart.innerHTML = '';
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  for (let i = 0; i < cart.length; i++){
    let button = document.createElement('button');
    button.textContent = "X";
    let tr = document.createElement('tr');
    yourcart.appendChild(tr);
    tr.appendChild(button);
    let td2 =document.createElement('td');
    td2.id = 'quantity';
    td2.textContent = cart[i].quantity;
    tr.appendChild(td2);
    let td = document.createElement('td');
    td.id = 'product';
    td.textContent = cart[i].product;
    tr.appendChild(td);
  }
  // DONE: Iterate over the items in the cart
  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR
}
function removeItemFromCart(event) {
  event.preventDefault();
  let buttonClick = event.target
  // cart.removeItem
  let item = document.getElementById('product');
  let name = item.textContent;
  console.log(name);
  Cart.prototype.removeItem(name);
  let stringifyvalue = JSON.stringify(cart);
  localStorage.setItem('cart', stringifyvalue);
  renderCart();
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}
yourcart.addEventListener('click', removeItemFromCart);
// This will initialize the page and draw the cart on screen
renderCart();