function routeBasedOnWindowSize() {
    if (window.outerWidth >= 768) { 
      window.history.pushState(null, null, '/pc/detail.html'); 
      window.location.href = '/pc/detail.html';
    }
  }
  window.addEventListener('resize', routeBasedOnWindowSize);
  routeBasedOnWindowSize(); 
  
  document.addEventListener('DOMContentLoaded', function() {
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        direction: 'horizontal',
        loop: true
    });

    document.querySelector('.logo').addEventListener('click', function() {
        window.location.href = './index.html';
    });

    document.querySelector('#search').addEventListener('click', function() {
        window.location.href = './search.html';
    });

    document.querySelector('#home').addEventListener('click', function() {
        window.location.href = './index.html';
    });

    document.querySelector('#type').addEventListener('click', function() {
        window.location.href = './search.html';
    });

    document.querySelector('.submit .buy').addEventListener('click', function() {
        window.location.href = './payment.html';
    });

    document.querySelector('.submit .cart').addEventListener('click', function() {
        window.location.href = './shoppingcart.html';
    });
});
