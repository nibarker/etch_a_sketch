const gridContainer = document.getElementById('grid');
const drawing = {
    colorful(e) {
        e.target.style.background = (Math.random()*0xFFFFFF|0).toString(16).padStart(7,"#000000");
        e.target.style.border = "0px";
    },
    pencil(e) {
        e.target.style.backgroundColor = 'black';
        e.target.style.opacity += 0.1;
    },
    black(e) { e.target.style.backgroundColor = 'black' },
};
setUpButton(newGridButton, "black");
setUpButton(pencilButton, "pencil");
setUpButton(colorfulButton, "colorful");
createGrid("black");

function setUpButton(button, name) {
    button.addEventListener('click', () => createGrid(name, prompt('New Grid Size:')))
}

function createGrid(name, size = 16) {
    var count = size ** 2;
    while (gridContainer.firstChild) { gridContainer.removeChild(gridContainer.firstChild) }
    while (count--) {
        const cell = Object.assign(document.createElement("div"), {className : "newSquare"});
        gridContainer.appendChild(cell);
        cell.addEventListener("mouseover", drawing[name]);
    }
    ["--rowNum","--colNum"].forEach(p => document.documentElement.style.setProperty(p, size));
}

