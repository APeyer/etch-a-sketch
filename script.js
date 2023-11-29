const gridContainer = document.querySelector('#container');

let cell = '';
let size = 16;

let cells = document.querySelectorAll('.cell');


function makeGrid (){
    for(let i = 0; i < Math.pow(size, 2); i++){
        cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }
    cellToBlack();
}

makeGrid();

document.querySelector('#gridSize').addEventListener('click', () => {
    size = prompt('Choose grid size');
    if (size <= 100){
        reset();
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        makeGrid(size);
        cellToBlack();
    } else {
        alert('The maximum amount of cells are 100, try less')
    }
    
});

function cellToBlack (){
    cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.setProperty("background-color","black");
        });
    });
}

function reset() {
    cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        gridContainer.removeChild(cell);
    });
}