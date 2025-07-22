document.addEventListener("DOMContentLoaded", () => {
  // Slide preview logic (optional if it only applies to index.html)
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".nav ul");

  if (burger && navList) {
    burger.addEventListener("click", () => {
      navList.classList.toggle("open");
    });
    // console.log("✅ Burger Menu Connected");
  } else {
    // console.warn("⚠️ Burger menu elements not found");
  }

  // Lightbox preview logic
  const images = document.querySelectorAll('.project-gallery img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  let currentIndex = 0;

  if (images.length && lightbox && lightboxImg) {
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

    document.querySelector('.close')?.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });

    document.querySelector('.prev')?.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    });

    document.querySelector('.next')?.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        lightbox.style.display = 'none';
      }
    });
  } else {
    // console.log("ℹ️ Lightbox not initialized (maybe not on this page)");
  }
});
