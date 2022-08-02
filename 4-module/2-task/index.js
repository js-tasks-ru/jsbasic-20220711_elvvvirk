function makeDiagonalRed(table) {
  for (let item of table.rows){
    for (let key of item.cells)
        if (key.cellIndex == item.rowIndex) 
        table.rows[key.cellIndex].cells[item.rowIndex].style.backgroundColor = 'red'
}
}
