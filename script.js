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