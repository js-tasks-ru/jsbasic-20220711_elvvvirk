'use strict'
function ucFirst(str){
    if (str === '') return str
    let newFirstSymbol = "";
    newFirstSymbol = str[0].toUpperCase();
    str = str.slice(1);
    str = newFirstSymbol + str;
    return str
}

alert (ucFirst(''))