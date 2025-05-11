const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.right-arrow');
const prevBtn = document.querySelector('.left-arrow');
let index = 0;

function showSlide(newIndex) {
  slides[index].classList.remove('active');
  index = (newIndex + slides.length) % slides.length;
  slides[index].classList.add('active');
}

function showNextSlide() {
  showSlide(index + 1);
}

function showPrevSlide() {
  showSlide(index - 1);
}

nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);

// Auto-slide
setInterval(showNextSlide, 5000);
