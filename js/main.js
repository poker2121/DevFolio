// header section (animate words)
var typed = new Typed(".type", {
  strings: ["Designer", "Developer","Freelancer","Photographer"],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true,
  startDelay: 300,
  backDelay: 1400,
  smartBackspace: true,
});

// testimonials Section
const swiper = new Swiper('.testimonials-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});