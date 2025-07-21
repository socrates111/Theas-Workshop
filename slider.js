document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 1;

  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  // Exit if there are no slides
  if (slides.length === 0) return;

  showSlides(slideIndex);

  function plusSlide(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].classList.add("active");
    if (dots.length > 0) {
      dots[slideIndex - 1].classList.add("active");
    }
  }

  // Auto slide every 7 seconds
  setInterval(() => { plusSlide(1); }, 4000);

  // Make functions globally accessible (for onclick handlers in HTML)
  window.plusSlide = plusSlide;
  window.currentSlide = currentSlide;
});
