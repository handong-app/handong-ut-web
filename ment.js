const saTriggerMargin = 200;
const saElementList = document.querySelectorAll('.move');

const saFunc = function() {
  for (const element of saElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');    
      }
    }
  }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);