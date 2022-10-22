const container = document.querySelector(".container");
container.style.display = "grid";
container.style.height = "20px";
container.style.gridTemplateColumns = "repeat(16,30px)";
container.style.gridTemplateRows = "repeat(16,30px)";


const createGrid = () => {

    for(let i =0; i < 256; i++) {
        const div = document.createElement("div");
        div.className = "grid";
        div.style.border = "2px solid black";
        container.append(div);
    }
}


createGrid()

const mouseOver = (event) => {
    event.target.style.backgroundColor = "red";
}

container.addEventListener("mouseover", mouseOver);



