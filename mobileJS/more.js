function routeBasedOnWindowSize() {
    if (window.outerWidth >= 768) { 
      window.history.pushState(null, null, '/pc/more.html'); 
      window.location.href = '/pc/more.html';
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

    var imgPhotos = document.querySelectorAll('.wrap .item .img_photo');
    for (var i = 0; i < imgPhotos.length; i++) {
        imgPhotos[i].addEventListener('click', function() {
            window.location.href = './detail.html';
        });
    }

    document.querySelector('#search').addEventListener('click', function() {
        window.location.href = './search.html';
    });

    document.querySelector('.shoppingcart').addEventListener('click', function() {
        window.location.href = './shoppingcart.html';
    });
});
