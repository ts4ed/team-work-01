new Swiper(".mySwiper", {
  slidesPerGroup: 1,
  slidesPerView: 3,
  autoHeight: true,
//   spaceBetween: 32,
  initialSlide: 1,
  centeredSlides: true,
  // touchAngle: 50,
  slideToClickedSlide: true,
  loop: true,
        breakpoints: {
          150: {
                  slidesPerView: 1,
          },  
          768: {
                  slidesPerView: 3,
                }
          },
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});