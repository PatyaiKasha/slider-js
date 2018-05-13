var slide = document.querySelectorAll('.slide');
function createSlides() {
  slide.forEach(function(el, idx) {
    el.style.backgroundImage = 'url(../img/work-' + (idx + 1) + '.jpg)';
    el.style.backgroundSize = 'cover';
  });
}

function renderDots() {
  var dots = document.querySelector('#dots');

  for (var i = 0, max = slide.length; i < max; i += 1) {
    var dot = document.createElement('div');
    dot.className = 'dot';
    dots.appendChild(dot);
  }
  dots.firstChild.nextSibling.classList.add('active');
  console.log('dots.firstChild.nextSibling ', dots.firstChild.nextSibling);
}

createSlides();
renderDots();
