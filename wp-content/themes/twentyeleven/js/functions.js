(function($) {
  $(document).ready(function(){
    $(".TGIT-home_hero__slider .slick-slider__slides").slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      fade: true,
      cssEase: 'linear'
    });
  });
})(jQuery);