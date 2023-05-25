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
const carsBlock = document.querySelector('.cars');
const parkingImg = document.querySelector('.parking-area-img');
const buttons = [
  document.querySelector('#level-1'),
  document.querySelector('#level-2'),
  document.querySelector('#level-3'),
];
const carsBlockLevels = [
  document.querySelector('#cars-1'),
  document.querySelector('#cars-2'),
  document.querySelector('#cars-3'),
];
const carPositionVariantsFirstLevel = [
  {
    pos: 0,
    top: '-16px',
    left: '120px',
    direction: 'horizontally',
  },
  {
    pos: 1,
    top: '80px',
    left: '120px',
    direction: 'horizontally',
  },
  {
    pos: 2,
    top: '190px',
    left: '120px',
    direction: 'horizontally',
  },
  {
    pos: 3,
    top: '295px',
    left: '120px',
    direction: 'horizontally',
  },
  {
    pos: 4,
    top: '395px',
    left: '120px',
    direction: 'horizontally',
  },
  {
    pos: 5,
    top: '-16px',
    left: '350px',
    direction: 'horizontally',
  },
  {
    pos: 6,
    top: '80px',
    left: '350px',
    direction: 'horizontally',
  },
  {
    pos: 7,
    top: '190px',
    left: '350px',
    direction: 'horizontally',
  },
  {
    pos: 8,
    top: '295px',
    left: '350px',
    direction: 'horizontally',
  },
  {
    pos: 9,
    top: '395px',
    left: '350px',
    direction: 'horizontally',
  },
];

const carPositionVariantsSecondLevel = [
  {
    pos: 0,
    top: '70px',
    left: '70px',
    direction: 'vertically',
  },
  {
    pos: 1,
    top: '70px',
    left: '180px',
    direction: 'vertically',
  },
  {
    pos: 2,
    top: '70px',
    left: '290px',
    direction: 'vertically',
  },
  {
    pos: 3,
    top: '70px',
    left: '400px',
    direction: 'vertically',
  },
  {
    pos: 4,
    top: '70px',
    left: '500px',
    direction: 'vertically',
  },
  {
    pos: 5,
    top: '350px',
    left: '70px',
    direction: 'vertically-reverse',
  },
  {
    pos: 6,
    top: '350px',
    left: '180px',
    direction: 'vertically-reverse',
  },
  {
    pos: 7,
    top: '350px',
    left: '290px',
    direction: 'vertically-reverse',
  },
  {
    pos: 8,
    top: '350px',
    left: '400px',
    direction: 'vertically-reverse',
  },
  {
    pos: 9,
    top: '350px',
    left: '500px',
    direction: 'vertically-reverse',
  },
];

const carPositionVariantsThirdLevel = [
  {
    pos: 0,
    top: '45px',
    left: '450px',
    direction: 'horizontally-reverse',
  },
  {
    pos: 1,
    top: '130px',
    left: '450px',
    direction: 'horizontally-reversey',
  },
  {
    pos: 2,
    top: '215px',
    left: '450px',
    direction: 'horizontally-reverse',
  },
  {
    pos: 3,
    top: '300px',
    left: '450px',
    direction: 'horizontally-reverse',
  },
  {
    pos: 4,
    top: '385px',
    left: '450px',
    direction: 'horizontally-reverse',
  },
  {
    pos: 5,
    top: '7px',
    left: '80px',
    direction: 'corner',
  },
  {
    pos: 6,
    top: '98px',
    left: '80px',
    direction: 'corner',
  },
  {
    pos: 7,
    top: '189px',
    left: '80px',
    direction: 'corner',
  },
  {
    pos: 8,
    top: '280px',
    left: '80px',
    direction: 'corner',
  },
  {
    pos: 9,
    top: '371px',
    left: '80px',
    direction: 'corner',
  },
];
const parkingPlacesQuantity = [10, 10, 10];

btnAdd.onclick = onAddNewCarBtnClick;
buttons.forEach(button => {
  button.onclick = onLevelBtnClick;
});
carsBlockLevels.forEach(carsBlock => {
  if (carsBlock) {
    carsBlock.onclick = onCarClick;
  }
});

function onLevelBtnClick(e) {
  const clickedButton = e.target;
  if (clickedButton.classList.contains('active')) return;
  buttons.forEach(button => {
    if (button === clickedButton) {
      const id = button.id;
      button.classList.add('active');
      parkingImg.src = `./images/${id}.jpg`;
      setCarsBlockDisplay(id);
    } else {
      button.classList.remove('active');
      const activeLevelIndex = buttons.findIndex(button =>
        button.classList.contains('active'),
      );
      const levelIndex = activeLevelIndex;
      if (parkingPlacesQuantity[levelIndex] === 0) {
        alert('There are no free places on this parking level');
        return;
      }
    }
  });
}
function onCarClick(e) {
  const element = e.target;
  const parentCar = element.closest('.car');
  if (parentCar) {
    const approve = confirm('Do you really want to delete car from parking?');
    if (approve) {
      parentCar.remove();
      updateParkingPlacesQuantityOnLevel(1);
      const activeCarsBlock = carsBlockLevels.find(
        block => block.style.display !== 'none',
      );
    }
  }
}
function onAddNewCarBtnClick(e) {
  e.preventDefault();
  const activeLevelIndex = buttons.findIndex(button =>
    button.classList.contains('active'),
  );
  const levelIndex = activeLevelIndex;
  if (parkingPlacesQuantity[levelIndex] === 0) {
    alert('There are no free places on this parking level');
    return;
  }
  const carNumbers = numbers.value;
  const carColor = color.value;
  const carType = type.value;
  const carPlace = place.value;
  const carPosition = getCarPosition(carPlace);
  if (isPlaceOccupied(activeLevelIndex, carPlace)) {
    alert('Selected place is already occupied. Please choose another place.');
    return;
  }
  createCar({
    carNumbers,
    carColor,
    carType,
    carPosition,
  });
  numbers.value = '';
  updateParkingPlacesQuantityOnLevel(-1);
}
function createCar({ carNumbers, carColor, carType, carPosition }) {
  const { top, left, direction, pos } = carPosition;
  const activeLevelIndex = buttons.findIndex(button =>
    button.classList.contains('active'),
  );
  if (activeLevelIndex !== -1) {
    const activeCarsBlock = carsBlockLevels[activeLevelIndex];
    let carSkeleton = `<div class="car color-${carColor} type-${carType} ${direction} " style="top: ${top}; left: ${left}" data-pos=${pos}>
            <div class="header">
            </div>
            <div class="middle"><div class ="car-number">${carNumbers}</div></div>
            <div class="footer"></div>
          </div>`;
    activeCarsBlock.innerHTML += carSkeleton;
  }
}
function setCarsBlockDisplay(id) {
  if (id === 'level-1') {
    carsBlockLevels[0].style.display = 'block';
    carsBlockLevels[1].style.display = 'none';
    carsBlockLevels[2].style.display = 'none';
  } else if (id === 'level-2') {
    carsBlockLevels[0].style.display = 'none';
    carsBlockLevels[1].style.display = 'block';
    carsBlockLevels[2].style.display = 'none';
  } else if (id === 'level-3') {
    carsBlockLevels[0].style.display = 'none';
    carsBlockLevels[1].style.display = 'none';
    carsBlockLevels[2].style.display = 'block';
  }
}
function getCarPosition(carPlace) {
  const activeLevelIndex = buttons.findIndex(button =>
    button.classList.contains('active'),
  );

  if (activeLevelIndex === 0) {
    return carPositionVariantsFirstLevel[carPlace];
  } else if (activeLevelIndex === 1) {
    return carPositionVariantsSecondLevel[carPlace];
  } else if (activeLevelIndex === 2) {
    return carPositionVariantsThirdLevel[carPlace];
  }
}
function updateParkingPlacesQuantityOnLevel(value) {
  const activeLevelIndex = buttons.findIndex(button =>
    button.classList.contains('active'),
  );
  const freeParkingPlaces = parkingPlacesQuantity[activeLevelIndex] + value;
  parkingPlacesQuantity[activeLevelIndex] = freeParkingPlaces;
}
function isPlaceOccupied(levelIndex, carPlace) {
  const activeCarsBlock = carsBlockLevels[levelIndex];
  const cars = activeCarsBlock.querySelectorAll('.car');
  const occupiedPlaces = Array.from(cars).map(car => car.dataset.pos);
  const hasCar = occupiedPlaces.includes(carPlace);
  return hasCar;
}
function disableOccupiedPlaces(occupiedPlaces) {
  const placeOptions = document.querySelectorAll('select[name=place] option');
  placeOptions.forEach(option => {
    const placeValue = option.value;
    if (occupiedPlaces.includes(placeValue)) {
      option.disabled = true;
    } else {
      option.disabled = false;
    }
  });
}
