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
    console.log(count);
  }, 2000);
};

func();
