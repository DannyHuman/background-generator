const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const randomButton = document.querySelector('.randomButton');

const setGradient = function () {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background + ';';
};
color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

window.addEventListener('load', setGradient);

const randomNumber = function () {
  return Math.trunc(Math.random() * 255) + 1;
};

const setRandomGradient = function () {
  body.style.background = `linear-gradient(to right, rgb(${randomNumber()},${randomNumber()},${randomNumber()}),rgb(${randomNumber()},${randomNumber()},${randomNumber()}))`;
  css.textContent = body.style.background + ';';
};

randomButton.addEventListener('click', setRandomGradient);
