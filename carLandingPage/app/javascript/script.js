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
const carLeft = document.querySelector('.car-left');
const carCenter = document.querySelector('.car-center');
const carRight = document.querySelector('.car-right');
const switchCar = ['./img/car1.png', './img/car2.png', './img/car3.png'];

let x = 0;
let y = 1;
let z = 2;
const createSrc = () => {
  setInterval(() => {
    carLeft.setAttribute('src', switchCar[x]);
    x++;
    if (x === 3) {
      x = 0;
    }
  }, 3000);

  setInterval(() => {
    carCenter.setAttribute('src', switchCar[y]);
    y++;
    if (y === 3) {
      y = 0;
    }
  }, 3000);

  setInterval(() => {
    carRight.setAttribute('src', switchCar[z]);
    z++;
    if (z === 3) {
      z = 0;
    }
  }, 3000);
};
createSrc();

// const abc = () => {
//   setInterval(() => {
//     carCenter;
//   });
// };
