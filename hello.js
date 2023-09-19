let ope = document.querySelector('.icon2');
let close = document.querySelector('.icon');
let responsiveNav = document.querySelector('.respo');

ope.addEventListener('click', () => {
  responsiveNav.style.left = '0vw';
  ope.style.visibility = 'hidden';
});
close.addEventListener('click', () => {
  responsiveNav.style.left = '-100vw';
  ope.style.visibility = 'visible';
});
