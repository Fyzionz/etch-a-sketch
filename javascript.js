// Sets important constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
const div = document.createElement('div');

// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);

    // Adds the onHover effect to created cells

    const selectCells = document.querySelectorAll('div.cell');

    selectCells.forEach((cell) =>{
        cell.addEventListener('mouseover', mouseHoverToggle);
        cell.addEventListener('mouseout', mouseHoverToggle);
    })

    // The function for toggling a cell black

    function mouseHoverToggle(){
        this.classList.toggle('cellHover')
    }

}

// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {

    // Creates rows
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

// Adds the prompt function to the button

const selectButton = document.querySelector('button');
selectButton.addEventListener('click', promptFunction);

    function promptFunction(){

    
    var numberOfSquares = window.prompt("How many squares?");
    if (numberOfSquares > 0 && numberOfSquares < 100){
    defaultGrid();
}}


