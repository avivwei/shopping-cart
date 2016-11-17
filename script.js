// an array with all of our cart items
var cart = [];
var $cart = $('.cart-list');
var $total = $('.total');

var updateCart = function () {
  
  var total = 0;
  var $total = $('.total');
  
  var $cart = $('.cart-list');
  $cart.empty();
  
  for(var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var stickerHTML = $("#cart-template").html();
    var template = Handlebars.compile(stickerHTML);
    var sticker = template(item);
    $cart.append(sticker);
    total += item.price;
  };
  $total.text(total);

};


var addItem = function (item) {
  cart.push(item);
};

var clearCart = function () {

  cart = [];
  $total.text(0);
  $cart.empty();

};

$('.view-cart').on('click', function () {
  $('.shopping-cart').toggle();

  
});



$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.item').data();
  console.log(item);
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();