document.addEventListener("DOMContentLoaded", () => {
  jQuery(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      width: window.innerHeight,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    function swiperPositionSet(el, Xposition, index) {
      $(el).attr("style", "transform:translate3d(" + Xposition[index] + "px ,0px,0px); transition-duration: 300ms;");
    }
    function mainSlideChangeStart() {
      var swiper_position_X = [0, -190, -380, -520];
      swiperPositionSet(".swiper-container-vertical", swiper_position_X, swiper.realIndex);
    }
    swiper.on("slideChangeTransitionStart", mainSlideChangeStart);
  });
});
