function routeBasedOnWindowSize() {
    if (window.outerWidth >= 768) { 
      window.history.pushState(null, null, '/pc/payment.html'); 
      window.location.href = '/pc/payment.html';
    }
  }
  window.addEventListener('resize', routeBasedOnWindowSize);
  routeBasedOnWindowSize(); 

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.logo').addEventListener('click', function() {
        window.location.href = './index.html';
    });

    document.querySelector('.arrow-left').addEventListener('click', function() {
        window.history.go(-1);
    });

    document.querySelector('.shoppingcart').addEventListener('click', function() {
        window.location.href = './shoppingcart.html';
    });
});
