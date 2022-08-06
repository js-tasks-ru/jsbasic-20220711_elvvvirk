function initCarousel() {
  // ваш код...
  let elem = document.querySelector(".carousel__inner")
  let rightButton = document.querySelector(".carousel__arrow_right")
  let leftButton = document.querySelector(".carousel__arrow_left")

  let position = 0
  let lenght = 4
  let count = lenght - 1
  let width = elem.offsetWidth
  leftButton.style.display = 'none'

  //right slider
  rightButton.addEventListener('click', () => {
    leftButton.style.display = ''
    position = Math.min(0, width*(count-lenght))
    elem.style.transform = 'translateX('+ position + 'px)'
    if (count > 1) count--
    else rightButton.style.display = 'none'
  })

 //left slider
  leftButton.addEventListener('click', () => { 
    rightButton.style.display = ''
    position = Math.min(0, width*((count+1)-lenght))
    elem.style.transform = 'translateX('+ position + 'px)'
    if (count < lenght - 1) count++
    else leftButton.style.display = 'none'
  })
}

