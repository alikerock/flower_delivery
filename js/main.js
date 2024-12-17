const review_slides = new Swiper('.review_slides', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

$('.review_slides .left').click(function(){
  review_slides.slidePrev()
});

$('.review_slides .right').click(function(){
  review_slides.slideNext()
});

$('#cart').click(function(){
  $('body').addClass('cart_active');
});
$('#shopping_cart .close').click(function(){
  $('body').removeClass('cart_active');
});