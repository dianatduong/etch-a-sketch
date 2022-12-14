const header = document.querySelector(".header");
const container = document.querySelector(".container");
const btnEraser = document.createElement("button");
const btnRed = document.createElement("button");
const btnRGB = document.createElement("button");
const btnSize = document.createElement("button");
const btnReset = document.createElement("button");
const buttonsContainer = document.querySelector(".buttons")
btnEraser.textContent = "Eraser";
btnRed.textContent = "Red";
btnRGB.textContent = "Rainbow";
btnReset.textContent = "Reset";

buttonsContainer.appendChild(btnRed)
buttonsContainer.appendChild(btnRGB)
buttonsContainer.appendChild(btnEraser)
buttonsContainer.appendChild(btnReset)



const createGrid = (column, row) => {

    for(let i =0; i < (column * row); i++) {

        const div = document.createElement("div");

        div.style.border = "0 solid white";
        container.style.display = "grid";

        container.style.gridTemplateRows = `repeat(${row}, 30px)`;
        container.style.gridTemplateColumns = `repeat(${column}, 30px)`;

        container.appendChild(div).className = "grid";
    }
}


createGrid(25, 16)


//Red Button
const redColor = () => {
    const red = (event) => {
        event.target.style.backgroundColor = "rgb(255,0,0)";
    }
    container.addEventListener("mouseover", red); 
}
btnRed.addEventListener("click", redColor);



//Eraser Button
const clearGrid = () => {
    const eraser = (event) => {
        event.target.style.backgroundColor = "rgb(255,255,255)";
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
        


//Reset Button
const reset = () => {
    document.querySelectorAll('.grid').forEach(element =>
        element.style.backgroundColor = "transparent"
    )
}
btnReset.addEventListener("click", reset);


//footer
const footer = document.querySelector(".footer");
const footerInfo = document.createElement("p");
const date = new Date().getFullYear();
footerInfo.textContent = "?? Diana Duong " + date;
footer.appendChild(footerInfo)


