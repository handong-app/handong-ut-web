var height = document.getElementById('main_page').offsetHeight;
const saE = document.querySelectorAll('.download');

const Func = function() {
  for (const element of saE) {
    if (!element.classList.contains('show_d')) {
      if (window.scrollY > height/5) {
        element.classList.add('show_d');    
      }
    }
  }
}

window.addEventListener('load', Func);
window.addEventListener('scroll', Func);