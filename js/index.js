var slide = document.querySelectorAll('.slide');
var prev = document.querySelector('.prev-slide');
var next = document.querySelector('.next-slide');

function createSlides() {
  var sliderLength = 1;
  slide.forEach(function(el, idx) {
    el.style.backgroundImage = 'url(../img/work-' + (idx + 1) + '.jpg)';
    el.style.backgroundSize = 'cover';
    sliderLength = idx + 1;
  });
  return sliderLength;
}

function renderDots(params) {
  var dots = document.querySelector('#dots');

  for (var i = 0, max = slide.length; i < max; i += 1) {
    var dot = document.createElement('div');
    dot.className = 'dot';
    dots.appendChild(dot);
  }
  dots.firstChild.nextSibling.classList.add('active');
}

function prevSlide(params) {
  console.log('prevSlide click');
}
function nextSlide(params) {
  console.log('nextSlide click');
  var dot = document.querySelectorAll('.dot');
  for (let i = 0; i < dot.length; i++) {
    const element = dot[i];
    console.log(element.classList.contains('active'));
  }
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
