// slide logic

let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlide(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      let i;
      const slides = document.getElementsByClassName("slide");
      const dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }
      slides[slideIndex-1].classList.add("active");
      dots[slideIndex-1].classList.add("active");
    }

    // Optional: Auto slide every 7 seconds
    setInterval(() => { plusSlide(1); }, 7000);


    //Preview Window
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.project-gallery img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  let currentIndex = 0;

  function showImage() {
    lightboxImg.src = images[currentIndex].src;
    lightbox.style.display = 'flex';
  }

  images.forEach((img, i) => {
    img.addEventListener('click', () => {
      currentIndex = i;
      showImage();
    });
  });

  document.querySelector('.close').addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  });

  document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  });

  // Optional: Close on Esc key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      lightbox.style.display = 'none';
    }
  });
});


