function routeBasedOnWindowSize() {
    if (window.outerWidth >= 768) { 
      window.history.pushState(null, null, '/pc/search.html'); 
      window.location.href = '/pc/search.html';
    }
  }
  window.addEventListener('resize', routeBasedOnWindowSize);
  routeBasedOnWindowSize(); 

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.logo').addEventListener('click', function() {
        window.location.href = './index.html';
    });

    document.querySelector('.icon-shop').addEventListener('click', function() {
        window.location.href = './shoppingcart.html';
    });

    document.querySelectorAll('.wrap .item .img_photo').forEach(function(element) {
        element.addEventListener('click', function() {
            window.location.href = './detail.html';
        });
    });

    document.querySelector('.arrow-left').addEventListener('click', function() {
        window.history.go(-1);
    });

    document.querySelector('.shoppingcart').addEventListener('click', function() {
        window.location.href = './shoppingcart.html';
    });
});
