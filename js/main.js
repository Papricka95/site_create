const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  // direction: 'vertical',
  loop: true, //we can start the cycle again

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  // effect: "cube",
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  // direction: 'vertical',
  loop: true, //we can start the cycle again

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  // effect: "cube",
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});