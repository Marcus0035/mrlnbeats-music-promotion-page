// JavaScript pro detekci scrollování a skrytí/zobrazení navigace
let posledniScroll = 0;
const navigace = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  const aktualniScroll = window.pageYOffset;

  if (aktualniScroll > posledniScroll && aktualniScroll > navigace.offsetHeight) {
    navigace.classList.add('skryt');
  } else {
    navigace.classList.remove('skryt');
  }

  posledniScroll = aktualniScroll;
});