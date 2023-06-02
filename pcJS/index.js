function routeBasedOnWindowSize() {
    if (window.outerWidth <= 768) { 
      window.history.pushState(null, null, '/mobile/index.html'); 
      window.location.href = '/mobile/index.html';
    }
  }
  window.addEventListener('resize', routeBasedOnWindowSize);
  routeBasedOnWindowSize(); 

  document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    document.getElementById('search').addEventListener('click', function() {
        window.location.href = './search.html';
    });

    document.querySelector('.shopping').addEventListener('click', function() {
        window.location.href = './shopping.html';
    });

    document.querySelectorAll('.nav .item').forEach(function(element) {
        element.addEventListener('click', function() {
            window.location.href = './more.html';
        });
    });

    document.querySelectorAll('.swiper-container .swiper-slide').forEach(function(element) {
        element.addEventListener('click', function() {
            window.location.href = './detail.html';
        });
    });

    document.querySelectorAll('.goods .item').forEach(function(element) {
        element.addEventListener('click', function() {
            window.location.href = './detail.html';
        });
    });
});
