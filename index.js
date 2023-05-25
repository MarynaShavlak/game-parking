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
  let info =
    carNumbers + ', color ' + carColor + ', type ' + carType + ' , ' + carPlace;
  createCar({ carNumbers, carColor, carType, carPlace });
};

function createCar({ carNumbers, carColor, carType, carPlace }) {
  let carSkeleton = `<div class="car color-${carColor} type-${carType}" style="top: 20px; left: 80px">
            <div class="header">
            </div>
            <div class="middle"></div>
            <div class="footer"></div>
          </div>`;
  carsBlock.innerHTML += carSkeleton;
}
