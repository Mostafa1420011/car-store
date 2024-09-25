// offer animation
const offer = document.querySelector('.offer');
setInterval(() => {
  offer.classList.toggle('offer');
}, 3000);
// change Display
const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('.ul');
const display = ['flex', 'none'];
let count = 0;
const changeDisplay = () => {
  ul.style.display = display[count];
  if (count === 1) {
    count = 0;
  } else {
    count = 1;
  }
};
hamburger.addEventListener('click', changeDisplay);
