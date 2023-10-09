function createGrid() {
    let container = document.querySelector(".container");

    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            let square = document.createElement('div');
            container.appendChild(square);
            square.style.flexBasis = `${100 / dimension}%`;
            square.addEventListener('mouseover', (e) => {
                if (e.buttons == 1)
                    e.target.style.background = 'black';
            });
            square.addEventListener('mousedown', (e) => {
                e.preventDefault();
                if (e.buttons == 1)
                    e.target.style.background = 'black';
            });
        }
    }
}

function removeGrid() {
    let container = document.querySelector(".container");
    while (container.hasChildNodes())
        container.firstChild.remove();
}

let dimension = 25;

createGrid();

let clearButton = document.querySelector(".clear-btn");
clearButton.addEventListener('click', (e) => {
    removeGrid();
    createGrid();
});


let changeGridButton = document.querySelector(".grid-size-btn");
changeGridButton.addEventListener('click', (e) => {
    let size = prompt("Change the dimensions of the grid. \nMust be between 1 and 100.");
    if (size < 1 || size > 100)
        alert("Invalid size!");
    else {
        dimension = size;
        removeGrid();
        createGrid();
    }
})
