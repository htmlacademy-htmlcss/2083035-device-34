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

let slideIndex = 0;

sliderButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    slideIndex = index;
    document.querySelector('.slider-pagination-button.is-active').classList.remove('is-active');
    document.querySelector('.slider-card.is-active').classList.remove('is-active');
    button.classList.add('is-active');
    sliderCards[index].classList.add('is-active');
  });
})

sliderButtonNext.addEventListener('click', (evt) => {
  evt.preventDefault();
  sliderButtons[slideIndex].classList.remove('is-active');
  sliderCards[slideIndex].classList.remove('is-active');
  if (slideIndex === sliderButtons.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex = slideIndex + 1;
  }
  sliderButtons[slideIndex].classList.add('is-active');
  sliderCards[slideIndex].classList.add('is-active');
});

sliderButtonPrev.addEventListener('click', (evt) => {
  evt.preventDefault();
  sliderButtons[slideIndex].classList.remove('is-active');
  sliderCards[slideIndex].classList.remove('is-active');
  if (!slideIndex) {
    slideIndex = sliderButtons.length - 1;
  } else {
    slideIndex = slideIndex - 1;
  }
  sliderButtons[slideIndex].classList.add('is-active');
  sliderCards[slideIndex].classList.add('is-active');
});


const rareProductLink = document.querySelector('.rare-product-link');
const modalCloseButton = document.querySelector('.modal-close-button');
const modal = document.querySelector('.modal-container');

rareProductLink.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('is-open');
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('is-open');
});

document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    modal.classList.remove('is-open');
  }
});
