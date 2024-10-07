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

const LatestOfferBtn = document.querySelector('.Latest');
const SpecialDiscountsBtn = document.querySelector('.Special');
const allBtn = document.querySelector('.All');
const box = document.querySelectorAll('.box');

const select = (value) => {
  box.forEach((ele) => {
    ele.classList.contains(value)
      ? (ele.style.display = 'grid')
      : (ele.style.display = 'none');
  });
};
allBtn.addEventListener('click', () => select('box'));
LatestOfferBtn.addEventListener('click', () => select('boxLatest'));
SpecialDiscountsBtn.addEventListener('click', () => select('boxSpecial'));

let sec = 60;
let min = 60;
let hour = 24;
let days = 7;

const time = () => {
  const spe = document.querySelectorAll('.spn');
  if (sec > 0) {
    sec--;
  } else if (min > 0) {
    sec = 60;
    min--;
  } else if (hour > 0) {
    sec = 60;
    min = 60;
    hour--;
  } else {
    clearInterval(loop);
  }
  let time1 = `${hour}h  ${min}m  ${sec}s `;
  spe.forEach((ele) => {
    ele.innerHTML = time1;
  });
};

let loop = setInterval(() => {
  time();
}, 1000);

const time2 = () => {
  const anotherOffer = document.querySelector('.slide_offer');
  if (sec > 0) {
    sec--;
  } else if (min > 0) {
    sec = 60;
    min--;
  } else if (hour > 0) {
    sec = 60;
    min = 60;
    hour--;
  } else if (days > 0) {
    sec = 60;
    min = 60;
    hour = 24;
    days--;
  } else {
    clearInterval(loop2);
  }
  let time1 = `${days}d ${hour}h  ${min}m  ${sec}s `;
  anotherOffer.innerHTML = time1;
};
let loop2 = setInterval(() => {
  time2();
}, 1000);

const limited = document.querySelector('.limited');
setInterval(() => {
  limited.classList.toggle('limitAnimation');
}, 2000);

const slidersParent = document.querySelector('.box-parent');
const slideBoxes = document.querySelectorAll('.box-slider');
let sliderLength = slideBoxes.length;
let sliderCount = 0;

const sliderRun = () => {
  sliderCount += 100;
  if (sliderCount >= sliderLength * 100) {
    sliderCount = 0;
  }
  slideBoxes.forEach((ele) => {
    ele.style.transform = `translateX(-${sliderCount}%)`;
    ele.style.transition = 'all 2s';
  });
};

setInterval(() => {
  sliderRun();
}, 4000);
