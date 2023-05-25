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
const carPositionVariantsSecondLevel = [
  {
    top: '70px',
    left: '70px',
    direction: 'vertically',
  },
  {
    top: '70px',
    left: '180px',
    direction: 'vertically',
  },
  {
    top: '70px',
    left: '290px',
    direction: 'vertically',
  },
  {
    top: '70px',
    left: '400px',
    direction: 'vertically',
  },
  {
    top: '70px',
    left: '500px',
    direction: 'vertically',
  },
  {
    top: '350px',
    left: '70px',
    direction: 'vertically-reverse',
  },
  {
    top: '350px',
    left: '180px',
    direction: 'vertically-reverse',
  },
  {
    top: '350px',
    left: '290px',
    direction: 'vertically-reverse',
  },
  {
    top: '350px',
    left: '400px',
    direction: 'vertically-reverse',
  },
  {
    top: '350px',
    left: '500px',
    direction: 'vertically-reverse',
  },
];
const carPositionVariantsThirdLevel = [
  {
    top: '45px',
    left: '450px',
    direction: 'horizontally-reverse',
  },
  {
    top: '130px',
    left: '450px',
    direction: 'horizontally-reversey',
  },
  {
    top: '215px',
    left: '450px',
    direction: 'horizontally-reverse',
  },
  {
    top: '300px',
    left: '450px',
    direction: 'horizontally-reverse',
  },
  {
    top: '385px',
    left: '450px',
    direction: 'horizontally-reverse',
  },

  {
    top: '7px',
    left: '80px',
    direction: 'corner',
  },
  {
    top: '98px',
    left: '80px',
    direction: 'corner',
  },
  {
    top: '189px',
    left: '80px',
    direction: 'corner',
  },
  {
    top: '280px',
    left: '80px',
    direction: 'corner',
  },
  {
    top: '371px',
    left: '80px',
    direction: 'corner',
  },
];

btnAdd.onclick = function (e) {
  e.preventDefault();
  const carNumbers = numbers.value;
  const carColor = color.value;
  const carType = type.value;
  const carPlace = place.value;
  const carPosition = getCarPosition(carPlace);

  createCar({
    carNumbers,
    carColor,
    carType,
    carPosition,
  });
  numbers.value = '';
};

buttons.forEach(button => {
  button.onclick = onLevelBtnClick;
});
carsBlockLevels.forEach(carsBlock => {
  if (carsBlock) {
    carsBlock.onclick = onCarsBlockLevelClick;
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
    }
  });
}
function onCarsBlockLevelClick(e) {
  const element = e.target;
  const parent = element.parentElement;
  const isCar = parent.classList.contains('car');
  if (isCar) {
    const approve = confirm('Do you realyy want to delete car from parking?');
    if (approve) {
      parent.remove();
    }
  }
}

function createCar({ carNumbers, carColor, carType, carPosition }) {
  const { top, left, direction } = carPosition;
  const activeLevelIndex = buttons.findIndex(button =>
    button.classList.contains('active'),
  );
  if (activeLevelIndex !== -1) {
    const activeCarsBlock = carsBlockLevels[activeLevelIndex];
    let carSkeleton = `<div class="car color-${carColor} type-${carType} ${direction} " style="top: ${top}; left: ${left}">
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
