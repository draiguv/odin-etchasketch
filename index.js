const DEFAULT_GRID_SIZE = 16;

const container = document.querySelector('.container');

let divs = '';

for (let i = 0; i < DEFAULT_GRID_SIZE; i++) {
  divs += '<div class="grid"></div>';
}
divs += '<div class="grid"></div>';

container.innerHTML = divs;