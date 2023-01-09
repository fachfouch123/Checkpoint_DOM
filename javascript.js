
// Add event listeners to the "plus" and "minus" buttons
var plusButtons = document.getElementsByClassName('plus-button');
for (var i = 0; i < plusButtons.length; i++) {
plusButtons[i].addEventListener('click', function() {
    var quantityField = this.previousElementSibling;
    var newQuantity = parseInt(quantityField.value) + 1;
    quantityField.value = newQuantity;
});
plusButtons[i].addEventListener('click', updateTotalPrice);
}


var minusButtons = document.getElementsByClassName('minus-button');
for (var i = 0; i < minusButtons.length; i++) {
minusButtons[i].addEventListener('click', function() {
    var quantityField = this.nextElementSibling;
    var newQuantity = Math.max(0, parseInt(quantityField.value) - 1);
    quantityField.value = newQuantity;
});
minusButtons[i].addEventListener('click', updateTotalPrice);
}

// Add event listeners to the "delete" buttons
var deleteButtons = document.getElementsByClassName('delete-button');
for (var i = 0; i < deleteButtons.length; i++) {
deleteButtons[i].addEventListener('click', function() {
    // Remove the item from the cart
    this.parentNode.parentNode.remove();
});
}

// Add event listeners to the "like" buttons
var likeButtons = document.getElementsByClassName('like-button');
for (var i = 0; i < likeButtons.length; i++) {
likeButtons[i].addEventListener('click', function() {
    // Toggle the "liked" class on the button
    this.classList.toggle('liked');
});
}

// Update the total price when the quantity of an item changes
var quantityFields = document.getElementsByClassName('quantity');
for (var i = 0; i < quantityFields.length; i++) {
quantityFields[i].addEventListener('change', updateTotalPrice);
}

// Update the total price when an item is deleted
var deleteButtons = document.getElementsByClassName('delete-button');
for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', updateTotalPrice);
}

// Calculate the total price based on the quantity and price of each item
function updateTotalPrice() {
var totalPrice = 0;
var cartItems = document.getElementsByClassName('cart-item');
for (var i = 0; i < cartItems.length; i++) {
    var price = parseFloat(cartItems[i].getAttribute('data-price'));
    var quantity = parseInt(cartItems[i].getElementsByClassName('quantity')[0].value);
    totalPrice += price * quantity;
}

// Update the total price element
document.getElementById('Tot').innerHTML = '$' + totalPrice.toFixed(2);
}
// alert after Purchase
Purchase.addEventListener('click', function(){ 
    if (confirm(" A R E  Y O U  S U R E  T O  P U R C H A S E")) {      
        document.write("  Now you will be directed to the Payment ,  Please prepare your PAYPAL Login");
        setTimeout(() => {  window.location = "https://www.paypal.com/signin" }, 2000); }
    else{ 
         document.write(`<div style="display: flex;justify-content: center; color: rgb(255, 106, 0);margin-top: 100 px;"><h1 >Thank you for your visit , you will be directed to google</h1></div>`);
         setTimeout(() => {  window.location = "http://google.com" }, 2000);
        };
    });