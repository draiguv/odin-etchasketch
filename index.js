const DEFAULT_GRID_SIZE = 16;
const DEFAULT_COLOR = '#22CC80';

let userGridSize;

const container = document.querySelector('.container');
const btn = document.querySelector('button');

function createGrids() {
  container.innerHTML = ''; // clears grids
  
  const gridSize = getNewSize();

  for (let i = 0; i < gridSize ** 2; i++) {
    const div = document.createElement('div');
    
    div.classList.add('grid');
    
    // div.style.height = `${container.clientHeight / gridSize}px`;
    div.style.width = `${container.clientWidth / gridSize}px`;
    
    container.appendChild(div);
    divListener();
  }
}

function getNewSize() {
  userGridSize = prompt('Please set a new grid to generate from 1 to 100', DEFAULT_GRID_SIZE);

  if (userGridSize > 100) {
    alert('Please input again that won\'t exceed to 100.');
    getNewSize();
  }

  userGridSize = userGridSize == null || userGridSize == '' || userGridSize == 0 ? DEFAULT_GRID_SIZE : userGridSize;

  return userGridSize;
}

function divListener() {
  const divs = document.querySelectorAll('.grid');

  divs.forEach(div => {
    div.addEventListener('mouseenter', fillColor);
  });
}

function fillColor(e) {
  e.target.style.backgroundColor = DEFAULT_COLOR;
}

btn.addEventListener('click', createGrids);