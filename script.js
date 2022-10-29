const header = document.querySelector(".header");
const container = document.querySelector(".container");
const btnEraser = document.createElement("button");
const btnRed = document.createElement("button");
const btnRGB = document.createElement("button");
const btnSize = document.createElement("button");
const buttonsContainer = document.querySelector(".buttons")
btnEraser.textContent = "Eraser";
btnRed.textContent = "Red";
btnRGB.textContent = "RGB";
btnSize.textContent = "Size";

buttonsContainer.appendChild(btnRed)
buttonsContainer.appendChild(btnRGB)
buttonsContainer.appendChild(btnSize)
buttonsContainer.appendChild(btnEraser)






const createGrid = (row, column) => {

    for(let i =0; i < (row * column); i++) {

        const div = document.createElement("div");
        div.style.border = "2px solid black";

        container.style.display = "grid";
        container.style.height = "20px";
        container.style.gridTemplateColumns = `repeat(${column}, 30px)`;
        container.style.gridTemplateRows = `repeat(${row}, 30px)`;

        container.appendChild(div).className = "grid";
    }
}


createGrid(16, 16)


//Red Button
const redColor = () => {
    const red = (event) => {
        event.target.style.backgroundColor = "red";
    }
    container.addEventListener("mouseover", red); 
}
btnRed.addEventListener("click", redColor);



//Eraser Button
const clearGrid = () => {
    const eraser = (event) => {
        event.target.style.backgroundColor = "white";
    }
    container.addEventListener("mouseover", eraser);
}
btnEraser.addEventListener("click", clearGrid);

//Random color generator
const randomColor = () => {
    const generateColor = (event) => {
        const a = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
       const c =  Math.floor(Math.random() * 255);
        event.target.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    }
        container.addEventListener("mouseover", generateColor);
    }
    btnRGB.addEventListener("click", randomColor);
        