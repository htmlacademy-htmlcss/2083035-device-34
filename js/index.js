const servicesButtons = document.querySelectorAll('.services-button');
const advantagesItems = document.querySelectorAll('.advantages-item');

servicesButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.services-button.is-active').classList.remove('is-active');
    document.querySelector('.advantages-item.is-active').classList.remove('is-active');
    button.classList.add('is-active');
    advantagesItems[index].classList.add('is-active');
  });
})

const sliderButtons = document.querySelectorAll('.slider-pagination-button');
const sliderCards = document.querySelectorAll('.slider-card');

const sliderButtonNext = document.querySelector('.next-slide');
const sliderButtonPrev = document.querySelector('.previous-slide');

let index = 0;

sliderButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.slider-pagination-button.is-active').classList.remove('is-active');
    document.querySelector('.slider-card.is-active').classList.remove('is-active');
    button.classList.add('is-active');
    sliderCards[index].classList.add('is-active');
  });
})

sliderButtonNext.addEventListener('click', (evt) => {
  evt.preventDefault();
  sliderButtons[index].classList.remove('is-active');
  sliderCards[index].classList.remove('is-active');
  if (index === sliderButtons.length - 1) {
    index = 0;
  } else {
    index = index + 1;
  }
  sliderButtons[index].classList.add('is-active');
  sliderCards[index].classList.add('is-active');
});

sliderButtonPrev.addEventListener('click', (evt) => {
  evt.preventDefault();
  sliderButtons[index].classList.remove('is-active');
  sliderCards[index].classList.remove('is-active');
  if (!index) {
    index = sliderButtons.length - 1;
  } else {
    index = index - 1;
  }
  sliderButtons[index].classList.add('is-active');
  sliderCards[index].classList.add('is-active');
});
