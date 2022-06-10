const gridScreen = document.querySelector(".grid-screen");
const grid = document.querySelector(".grid");

window.addEventListener("load", (event) => {
  const scrn = document.querySelector(".grid-screen")

  for (x = 0; x < 64; x++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    scrn.appendChild(gridItem);
  }

})
gridScreen.addEventListener("mouseover", (event) => {

  if (event.target.classList.contains("grid-item")) {
    event.target.classList.add("grid-color");
  }
})
grid.addEventListener("click", (event) => {
  if (event.target.classList.contains("size-btn")) {
    if (event.target.getAttribute("id") === "8") {
      gridScreen.style.gridTemplateColumns = "repeat(8, 1fr)";
      removeAll(gridScreen);
      setGrid(64);

    } else if (event.target.getAttribute("id") === "16") {
      gridScreen.style.gridTemplateColumns = "repeat(16, 1fr)";
      removeAll(gridScreen);
      setGrid(256);
    } else {
      gridScreen.style.gridTemplateColumns = "repeat(32, 1fr)";
      removeAll(gridScreen);
      setGrid(1024);
    }

  }
})

function setGrid(area) {
  const scrn = document.querySelector(".grid-screen")

  for (x = 0; x < area; x++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    scrn.appendChild(gridItem);
  }
}

function removeAll(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
