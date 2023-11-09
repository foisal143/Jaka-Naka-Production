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

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById('navbar').style.backgroundColor = 'white';
    document.getElementById('navbar').style.color = 'black';
  } else {
    document.getElementById('navbar').style.backgroundColor = 'transparent';
    document.getElementById('navbar').style.color = 'white';
  }
}
