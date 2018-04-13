(function($) {
  $(document).ready(function(){
    $(".TGIT-home_hero__slider .slick-slider__slides").slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      prevArrow: '<div class="slick-slider__arrow slick-slider__arrow--previous"><i class="fa fa-angle-left"></i></div>',
      nextArrow: '<div class="slick-slider__arrow slick-slider__arrow--next"><i class="fa fa-angle-right"></i></div>'
    });
  });
})(jQuery);