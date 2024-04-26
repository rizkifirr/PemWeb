window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window_scroll', window.scrollY > 0)
})


const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = " none"
})

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav)


document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  let currentSlide = 0;
  const slideWidth = images[0].clientWidth;

  function nextSlide() {
      currentSlide = (currentSlide + 1) % images.length;
      updateSlide();
  }

  function updateSlide() {
      slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  setInterval(nextSlide, 2000); 
});


window.addEventListener('scroll', function() {
  var scrollButton = document.getElementById('scroll-to-top');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollButton.style.display = 'block';
  } else {
      scrollButton.style.display = 'none';
  }
});

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
