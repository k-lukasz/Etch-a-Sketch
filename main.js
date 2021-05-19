const container = document.querySelector('.container');
const btn = document.querySelector('.btnClass');

const defaultGrid = () => {
    createGrid(16);
    columns(16);
}

const createGrid = (size) => {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList = 'grid-item';
        div.addEventListener('mouseover', changeColor);
        container.appendChild(div);
    }
}

const columns = (size) => {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

const initialGrid = () => {
    let gridSize = prompt('Enter the size of the grid');
    if (gridSize !== null) {
        gridSize = parseInt(gridSize);
        if (gridSize > 65 || gridSize < 1 || Number.isNaN(gridSize)) {
            alert('Enter a number between 1 and 64!');
            initialGrid();
        } else {
            reset();
            createGrid(gridSize);
            columns(gridSize);
        }
    }
}

const changeColor = (e) => {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
}

const reset = () => {
    document.querySelectorAll('.grid-item').forEach((element) => element.parentNode.removeChild(element))
}

window.addEventListener('load', defaultGrid());
btn.addEventListener('click', initialGrid);