function generateMatrix() {
    
    const rows = document.getElementById("rows").value;
    const columns = document.getElementById("columns").value;
    const matrixContainer = document.getElementById("matrixContainer");
    
    // previous matrix
    matrixContainer.innerHTML = '';
    
    // Creating grid for the inputs
matrixContainer.style.gridTemplateColumns = `repeat(${columns}, auto)`;
    
    // Creating the  matrix
    if(rows=='' || columns=='')
        alert('enter the number of rows and coumns')
    else{
    for (let i=0; i<rows; i++) {
        for (let j=0; j<columns; j++) {
            const input = document.createElement("input");
            input.type = "number";
            input.id = `cell-${i}-${j}`;
            
            matrixContainer.appendChild(input);
        }
    }
}
}


//finding the max value
function findMaxElement() {
    const rows = parseInt(document.getElementById("rows").value);
    const columns = parseInt(document.getElementById("columns").value);
    let maxValue = -Infinity;
    let maxPosition = { row: 0, col: 0 };
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const cellValue = parseInt(document.getElementById(`cell-${i}-${j}`).value);
            if (cellValue > maxValue) {
                maxValue = cellValue;
                maxPosition = { row: i, col: j };
            }
        }
    }   
    
    //determining the neighbours of the max value
    let left = maxPosition.col > 0 ?
    (document.getElementById(`cell-${maxPosition.row}-${maxPosition.col - 1}`).value.trim() === '' ? 'Empty':
    document.getElementById(`cell-${maxPosition.row}-${maxPosition.col - 1}`).value) : "Not Avilable";

    let right = maxPosition.col < columns - 1 ? 
    (document.getElementById(`cell-${maxPosition.row}-${maxPosition.col + 1}`).value.trim() === '' ? 'Empty' :
    document.getElementById(`cell-${maxPosition.row}-${maxPosition.col + 1}`).value) : "Not Available";

    // Display the result
    document.getElementById("result").innerText = `Maximum Element: ${maxValue} , Left: ${left} , Right: ${right}`;
}

//reset all the data as initial
function reStart(){
    document.getElementById('rows').value = "";
    document.getElementById('columns').value = "";
    document.getElementById('matrixContainer').innerHTML='';
    document.getElementById('resut').innerHTML='';
}