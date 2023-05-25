/**
 * 1. Створити візуал (HTML, CSS):
 *  1.1 Форма для створення авто
 *  1.2.Поле для відображення парковки
 *  1.3. Створити авто
 * - Обробити форму додавання авто
 * - Створити блок автівки
 * - Додати авто на сторінку в потрібні координати
 *  1.4. Розмістити автівки на парковці
 *
 *
 * 2. Реалізувати створення нвоого авто та додавання його на парковку
 * 3. Реалізувати декілька рівнів парковки
 * 4. Реалізувати видалення авто із парковки
 */

const numbers = document.querySelector('input[name=car-numbers]');
const color = document.querySelector('select[name=color]');
const type = document.querySelector('select[name=type]');
const place = document.querySelector('select[name=place]');
const btnAdd = document.querySelector('.add-new-car-btn');
const carsBlock = document.querySelector('#cars');

btnAdd.onclick = function (e) {
  e.preventDefault();
  let carNumbers = numbers.value;
  let carColor = color.value;
  let carType = type.value;
  let carPlace = place.value;
  let carPosition = {
    top: '20px',
    left: '80px',
    direction: 'horizontally',
  };
  let carPositionVariants = [
    {
      top: '-16px',
      left: '120px',
      direction: 'horizontally',
    },
    {
      top: '80px',
      left: '120px',
      direction: 'horizontally',
    },
    {
      top: '190px',
      left: '120px',
      direction: 'horizontally',
    },
    {
      top: '295px',
      left: '120px',
      direction: 'horizontally',
    },
    {
      top: '395px',
      left: '120px',
      direction: 'horizontally',
    },
    {
      top: '-16px',
      left: '350px',
      direction: 'horizontally',
    },
    {
      top: '80px',
      left: '350px',
      direction: 'horizontally',
    },
    {
      top: '190px',
      left: '350px',
      direction: 'horizontally',
    },
    {
      top: '295px',
      left: '350px',
      direction: 'horizontally',
    },
    {
      top: '395px',
      left: '350px',
      direction: 'horizontally',
    },
  ];
  let info =
    carNumbers +
    ', color ' +
    carColor +
    ', type ' +
    carType +
    ' , ' +
    carPosition;
  createCar({
    carNumbers,
    carColor,
    carType,
    carPosition: carPositionVariants[carPlace],
  });
};
carsBlock.onclick = function (e) {
  const element = e.target;
  const parent = element.parentElement;
  const isCar = parent.classList.contains('car');
  if (isCar) {
    const approve = confirm('Do you realyy want to delete car from parking?');
    if (approve) {
      parent.remove();
    }
  }
};

function createCar({ carNumbers, carColor, carType, carPosition }) {
  const { top, left, direction } = carPosition;
  let carSkeleton = `<div class="car color-${carColor} type-${carType} ${direction} " style="top: ${top}; left: ${left}">
            <div class="header">
            </div>
            <div class="middle"><div class ="car-number">${carNumbers}</div></div>
            <div class="footer"></div>
          </div>`;
  carsBlock.innerHTML += carSkeleton;
}
