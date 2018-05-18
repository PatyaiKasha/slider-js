var slider = document.querySelector('.slider');
console.log('slider ', slider);
var slide = document.querySelectorAll('.slide');
console.log('slide ', slide);
var prev = document.querySelector('.prev-slide');
var next = document.querySelector('.next-slide');
var x = 0;
slider.style.left = x + 'px';
prev.hidden = true;
next.hidden = true;

function createSlides() {
  var sliderLength = 1;
  slide.forEach(function(el, idx) {
    el.style.backgroundImage = 'url(../img/work-' + (idx + 1) + '.jpg)';
    el.style.backgroundSize = 'cover';
    sliderLength = idx + 1;
  });
  return sliderLength;
}

function renderDots() {
  var dots = document.querySelector('#dots');
  for (var i = 0, max = slide.length; i < max; i += 1) {
    var dot = document.createElement('div');
    dot.className = 'dot';
    dots.appendChild(dot);
  }
  dots.firstChild.nextSibling.classList.add('active');
}

function prevSlide() {
  if (x >= 0) {
    x = 0;
    prev.style.display = 'none';
  } else {
    x += 700;
    slider.style.left = x + 'px';
    slider.style.display = 'none';
  }
}
function nextSlide() {
  if (x <= -1400) {
    x = -1400;
    next.style.display = 'none';
  }
  x -= 700;
  slider.style.left = x + 'px';
}

function eventListeners() {
  prev.addEventListener('click', prevSlide);
  next.addEventListener('click', nextSlide);
}

function main() {
  createSlides();
  renderDots();
  eventListeners();
}

main();

// (function () {
//   'use strict';

//   var sliderWidth;
//   var prevNav;
//   var nextNav;
//   var slider;
//   var slideCount;
//   var dots;

//   var currentSlide;
//   var numSlider;

//   document.addEventListener('DOMContentLoaded', onDomContentLoaded);
//   /**
//    * On content loaded
//    */

//   function onDomContentLoaded() {
//     sliderWidth = document.getElementById('slider-container').clientWidth;
//     prevNav = document.querySelector('.prev-slide');
//     nextNav = document.querySelector('.next-slide');
//     slider = document.querySelector('.slider');
//     slideCount = slider.children.length;
//     // console.log('slideCount ', slideCount);
//     dots = document.querySelectorAll('.ddot');

//     currentSlide = 0;
//     // console.log('currentSlide ', currentSlide);
//     numSlider = 0;

//     prevNav.classList.add('hidden');

//     addEventListenersForNav();
//   }

//   function addEventListenersForNav() {
//     prevNav.addEventListener('click', moveToPrevSlide);
//     nextNav.addEventListener('click', moveToNextSlide);
//   }

//   /**
//    * Sweeps the slider to the left
//    */

//   function moveToPrevSlide() {
//     if (currentSlide >= 0) {
//       prevNav.classList.add('hidden');
//     } else {
//       currentSlide += sliderWidth;
//       console.log('currentSlide ', currentSlide);
//       slider.style.left = currentSlide + 'px';
//       numSlider -= 1;
//       console.log('numSlider ', numSlider);

//       // disableNav();
//       // setTimeout(function () {
//       //     enableNav();
//       // }, 1000);
//       renderNav();
//       renderDot();
//     }
//   }

//   /**
//    * Sweeps the slider to the right
//    */

//   function moveToNextSlide() {
//     if (currentSlide <= -(sliderWidth * (slideCount - 1))) {
//       currentSlide = -(sliderWidth * (slideCount - 1));
//       return;
//     } else {
//       currentSlide -= sliderWidth;
//       console.log('currentSlide ', currentSlide);
//       slider.style.left = currentSlide + 'px';
//       numSlider += 1;
//       console.log('numSlider ', numSlider);

//       // disableNav();
//       // setTimeout(function () {
//       //     enableNav();
//       // }, 1000);
//       renderNav();
//       renderDot();
//     }
//   }

//   /**
//    * Render the bottom navigation bar: Forward / back buttons
//    */

//   function renderNav() {
//     if (numSlider <= 0) {
//       disableNav();
//       setTimeout(function () {
//         prevNav.classList.add('hidden');
//         enableNav();
//       }, 1000);
//     } else if (numSlider >= slideCount - 1) {
//       disableNav();
//       setTimeout(function () {
//         nextNav.classList.add('hidden');
//         enableNav();
//       }, 1000);
//     } else if (numSlider > 0 && numSlider < slideCount - 1) {
//       disableNav();
//       setTimeout(function () {
//         prevNav.classList.remove('hidden');
//         nextNav.classList.remove('hidden');
//         enableNav();
//       }, 1000);
//     }
//   }

//   /**
//    * Render the bottom navigation bar: dots
//    */

//   function renderDot() {
//     dots.forEach(function (el, idx) {
//       el.classList.remove('active');
//     });
//     dots[numSlider].classList.add('active');
//   }

//   function disableNav() {
//     nextNav.classList.add('disabled');
//     prevNav.classList.add('disabled');
//   }

//   function enableNav() {
//     nextNav.classList.add('clickable');
//     prevNav.classList.add('clickable');
//   }
// })();
