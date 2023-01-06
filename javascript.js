// Add event listeners to the "plus" and "minus" buttons
var plusButtons = document.getElementsByClassName('plus-button');

for (var i = 0; i < plusButtons.length; i++) {
plusButtons[i].addEventListener('click', function() {
    var quantityField = this.previousElementSibling;
    var newQuantity = parseInt(quantityField.value) + 1;
    quantityField.value = newQuantity;
});
}


var plusButtons2 = document.getElementsByClassName('plus-button2');

for (var i = 0; i < plusButtons2.length; i++) {
plusButtons2[i].addEventListener('click', function() {
    var quantityField = this.previousElementSibling;
    var newQuantity = parseInt(quantityField.value) + 1;
    quantityField.value = newQuantity;
});
}


var minusButtons = document.getElementsByClassName('minus-button');
for (var i = 0; i < minusButtons.length; i++) {
minusButtons[i].addEventListener('click', function() {
    var quantityField = this.nextElementSibling;
    var newQuantity = Math.max(0, parseInt(quantityField.value) - 1);
    quantityField.value = newQuantity;
});
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

function updateTotalPrice() {
// Calculate the total price based on the quantity and price of each item
var totalPrice = 0;
var cartItems = document.getElementsByClassName('cart-item');
for (var i = 0; i < cartItems.length; i++) {
    var price = parseFloat(cartItems[i].getAttribute('data-price'));
    var quantity = parseInt(cartItems[i].getElementsByClassName('quantity')[0].value);
    totalPrice += price * quantity;
}

// Update the total price element
document.getElementById('total-price').innerHTML = '$' + totalPrice.toFixed(2);
}
