const DEFAULT_GRID_SIZE = 16;

const container = document.querySelector('.container');
const btn = document.querySelector('button');

function createGrids() {
  container.innerHTML = ''; // clears grids
  
  const gridSize = prompt('Please set a new grid to generate from 1 to 100', DEFAULT_GRID_SIZE);

  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
  }
}

btn.addEventListener('click', createGrids);
