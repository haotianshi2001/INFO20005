function routeBasedOnWindowSize() {
    if (window.outerWidth <= 768) { 
      window.history.pushState(null, null, '/mobile/shoppingcart.html'); 
      window.location.href = '/mobile/shoppingcart.html';
    }
  }
  window.addEventListener('resize', routeBasedOnWindowSize);
  routeBasedOnWindowSize(); 

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.logo, .home').forEach(function(element) {
        element.addEventListener('click', function() {
            window.location.href = './index.html';
        });
    });

    document.querySelectorAll('.shopping').forEach(function(element) {
        element.addEventListener('click', function() {
            window.location.href = './shopping.html';
        });
    });

    document.querySelectorAll('.checkout').forEach(function(element) {
        element.addEventListener('click', function() {
            window.location.href = './payment.html';
        });
    });
});
