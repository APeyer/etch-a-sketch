const gridContainer = document.querySelector('#container');
let gridElement = 16;
function makeRow (){
    for(let i = 0; i < Math.pow(gridElement, 2); i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }
}

makeRow();
