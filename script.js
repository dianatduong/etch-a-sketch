const header = document.querySelector(".header");
const container = document.querySelector(".container");
const div = document.querySelector("div");

const btnClear = document.createElement("button");
const btnRed = document.createElement("button");
const btnRGB = document.createElement("button");
const btnSize = document.createElement("button");
const buttonsContainer = document.querySelector(".buttons")
btnClear.textContent = "Clear";
btnRed.textContent = "Red";
btnRGB.textContent = "RGB";
btnSize.textContent = "Size";
buttonsContainer.appendChild(btnClear)
buttonsContainer.appendChild(btnRed)
buttonsContainer.appendChild(btnRGB)
buttonsContainer.appendChild(btnSize)


container.style.display = "grid";
container.style.height = "20px";



const createGrid = (row, column) => {
    for(let i =0; i < (row * column); i++) {
        const div = document.createElement("div");
       
        div.style.border = "2px solid black";
       
        container.style.gridTemplateColumns = `repeat(${column}, 30px)`;
        container.style.gridTemplateRows = `repeat(${row}, 30px)`;
        container.appendChild(div).className = "grid";
    }
}



createGrid(16, 16)

