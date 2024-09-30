const img = document.querySelector('.img-change');
const images = ['./img/car1.png', './img/car2.png', './img/car3.png'];
let count = 0;

const func = () => {
  setInterval(() => {
    img.setAttribute('src', images[count]);
    count++;
    if (count === 3) {
      count = 0;
    }
  }, 2000);
};

func();
const span = document.querySelectorAll('[data-name]');
const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('.ul');

const changeHamburger = () => {
  ul.style.display === 'flex'
    ? (ul.style.display = 'none')
    : (ul.style.display = 'flex');
};

const changeArrow = (ele) => {
  if (ele.dataset.name === 'top') {
    ele.classList.toggle('span-top');
  }
  if (ele.dataset.name === 'center') {
    ele.classList.toggle('span-center');
  }
  if (ele.dataset.name === 'end') {
    ele.classList.toggle('span-end');
  }
};

span.forEach((ele) => {
  hamburger.addEventListener('click', () => changeArrow(ele));
});

hamburger.addEventListener('click', changeHamburger);

const box = document.querySelectorAll('.box');

// box.forEach((ele) => {
//   setInterval(() => {
//     ele.classList.toggle('translate');
//   }, 3000);
// });
