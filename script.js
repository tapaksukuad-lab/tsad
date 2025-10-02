let slides = document.querySelectorAll('.hero-slideshow img');
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 5000); // ganti gambar tiap 5 detik