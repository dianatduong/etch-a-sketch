const container = document.querySelector(".container");
container.style.display = "grid";
container.style.height = "20px";


for(let i =0; i < 256; i++) {
    const div = document.createElement("div");
    div.style.border = "2px solid black";
    container.append(div);
}

