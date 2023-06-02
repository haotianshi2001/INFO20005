function routeBasedOnWindowSize() {
    if (window.outerWidth >= 768) { 
      window.history.pushState(null, null, '/pc/shopping.html'); 
      window.location.href = '/pc/shopping.html';
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

    document.querySelector('.checkout').addEventListener('click', function() {
        window.location.href = './payment.html';
    });

    document.querySelector('.shoppingcart').addEventListener('click', function() {
        window.location.href = './shoppingcart.html';
    });
});
