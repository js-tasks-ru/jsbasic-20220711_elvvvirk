function isEmpty(obj) {
  // ваш код...
  for (let i in obj){
    if (obj.hasOwnProperty(i)){
        return false
    }
}
return true
}
