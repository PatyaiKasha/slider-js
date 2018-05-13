function createSlides() {
  var slide = document.querySelectorAll('.slide');
  for (var i = 0, max = slide.length; i <= max; i += 1) {
    var element = slide[i];
    element.style.backgroundImage = 'url(../img/work-' + (i + 1) + '.jpg)';
    element.style.backgroundSize = 'cover';
  }
}

function renderDots() {
  var dots = document.querySelector('#dots');
  console.log('dots ', dots);
  var dot = document.createElement('div').className('dot');
  dots.insertAdjacentHTML('afterbegin', dot);

  //   var dot = document.createElement('div').className('dot');

  //   for (var i = 0, max = quantity.length; i <= max; i += 1) {
  //     // var element = dot[i];
  //     out += dot;
  //   }
  //   dots.appendChild(dot);
}

createSlides();
renderDots();
