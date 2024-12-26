// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = '/'
})




//----Project Scroll----

// const carousel = document.querySelector('.projects-wrapper');
// const carouselItems = document.querySelectorAll('.project');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');
// let currentIndex = 0;
// const totalItems = carouselItems.length;

// function updateCarousel() {
//     carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// function showNext() {
//     currentIndex = (currentIndex + 1) % totalItems;
//     updateCarousel();
// }

// function showPrev() {
//     currentIndex = (currentIndex - 1 + totalItems) % totalItems;
//     updateCarousel();
// }

// nextButton.addEventListener('click', showNext);
// prevButton.addEventListener('click', showPrev);

// setInterval(showNext, 3000);













          
          
//------------------------------------------------------------------
// const typedElement = document.querySelector(".typed");
          
// if (typedElement) {
//   const typedStrings = typedElement.getAttribute("data-typed-items").split(",");
//   new Typed(".typed", {
//     strings: typedStrings,
//     loop: true,
//     typeSpeed: 100,
//     backSpeed: 50,
//     backDelay: 2000,
//   });
// }