function highlight(table) {
  for (let item of table.rows){
    //check attr data-availabel
        let attr = item.querySelector('[data-available]')
        console.log(attr)
    console.log(item.textContent)
    if (attr != null){
        let cellValue = (attr.dataset.available)
        if (cellValue == "true"){ 
            item.classList.add('available')
        } 
        else if (cellValue == "false")
        item.classList.add('unavailable')
    }
    else {
        if (item.rowIndex != 0) item.hidden = true
        }
    //check attr male
    for (let key of item.cells){
            if (key.textContent == 'm') item.classList.add('male')
            if (key.textContent == 'f') item.classList.add('female')
    //add attr style
            if(+key.textContent < 18) item.style.textDecoration = "line-through"
        }
    
    }
}


