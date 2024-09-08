let counter = 1;
setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000); // 5 seconds interval

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const radios = document.querySelectorAll('input[name="radio-btn"]');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  radios.forEach((radio, i) => {
    radio.checked = i === index;
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 4000); // Change slide every 4 seconds
