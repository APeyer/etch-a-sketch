const gridContainer = document.querySelector('#container');
let gridElement = 16;
let cell = '';


function makeGrid (){
    for(let i = 0; i < Math.pow(gridElement, 2); i++){
        cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }
}

makeGrid();

let cells = document.querySelectorAll('.cell');

cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.setProperty("background-color","black");
    });
});

