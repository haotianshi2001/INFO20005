function routeBasedOnWindowSize() {
    if (window.outerWidth >= 768) { 
      window.history.pushState(null, null, '/pc/index.html'); 
      window.location.href = '/pc/index.html';
    }
  }
  window.addEventListener('resize', routeBasedOnWindowSize);
  routeBasedOnWindowSize(); 

  document.addEventListener('DOMContentLoaded', function() {
    var mySwiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        }
    });

    document.querySelector('.submit').addEventListener('click', function() {
        window.location.href = './more.html';
    });

    document.querySelector('.swiper').addEventListener('click', function() {
        window.location.href = './detail.html';
    });

    document.querySelector('.shoppingcart').addEventListener('click', function() {
        window.location.href = './shoppingcart.html';
    });

    document.querySelector('#search').addEventListener('click', function() {
        window.location.href = './search.html';
    });
});
