function routeBasedOnWindowSize() {
    if (window.outerWidth <= 768) { 
      window.history.pushState(null, null, '/mobile/detail.html'); 
      window.location.href = '/mobile/detail.html';
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

    document.querySelectorAll('.logo, .home').forEach(function(element) {
        element.addEventListener('click', function() {
            window.location.href = './index.html';
        });
    });

    document.querySelectorAll('.shopping, .but, .pickup').forEach(function(element) {
        element.addEventListener('click', function() {
            window.location.href = './shopping.html';
        });
    });
});
