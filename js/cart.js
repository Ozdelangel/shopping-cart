/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
const yourCart = document.querySelector('tbody');
table.addEventListener('click', removeItemFromCart);
let cart = [];

function loadCart() {
//   const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//   cart = new Cart(cartItems);
  const cartItems = JSON.parse(localStorage.getItem('cart'));
  if (cartItems){
      cart = cartItems;
  }
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
    yourCart.innerHTML = '';
    // target the tbody and use innerHTML = ''
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  
  for (let i = 0; i < cart.length; i++){
    let button = document.createElement('button');
    button.textContent = 'X';
   
     let tr = document.createElement('tr');
      yourCart.appendChild(tr);
      tr.appendChild(button); 
     let td2 = document.createElement('td');
     td2.id = 'quantity';
      td2.textContent = cart[i].quantity;
      tr.appendChild(td2);
     let td = document.createElement('td');
     td.id = cart[i].product;
      td.textContent = cart[i].product;
      tr.appendChild(td); 
  }

  

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
event.preventDefault();
let buttonClick = event.target;
let itemCart = document.getElementById('quantity', 'product');
itemCart.innerHTML = '';

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  // .slice() remove specific index from the cart items array maybe render?

}
yourCart.addEventListener('click', removeItemFromCart);
// This will initialize the page and draw the cart on screen
renderCart();