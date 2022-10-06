const container = document.querySelector("#container");
//const div = document.createElement("div");

for(let i =0; i < 256; i++) {
    const div = document.createElement("div");
    div.style.border = "2px solid black";
    div.style.width = "20px";
    div.style.height = "20px";
    container.append(div);

}


//container.append(div);

//borderColor()