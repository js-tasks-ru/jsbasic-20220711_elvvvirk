import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  position = 0
  #container = null
  stepsElem = ''
  sliderSteps = null
  thumb = null
  slider = null
  constructor({ steps, value = 0 }) {
    this.steps = steps
    this.value = value
    this.render()
  };

  get elem() {
    return this.#container
  };
  render(){
    this.#container = createElement(this.#html())
    this.thumb = this.#container.querySelector('.slider__thumb')
    this.thumb.ondragstart =  () => false
    this.thumb.addEventListener('pointerdown', this.moveSlider)
  };
  #html(){
    for (let i = 1; i <= this.steps; i++){
      this.stepsElem += `<span></span>`
    }
   return `
    <div class="slider">
      <!--Ползунок слайдера с активным значением-->
      <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">2</span>
      </div>

      <!--Заполненная часть слайдера-->
      <div class="slider__progress" style="width: 50%;"></div>

      <!--Шаги слайдера-->
      <div class="slider__steps">`+ this.stepsElem +`
      </div>
    </div>`
  };

  moveSlider = () => {
    const onMove = (event) => {
      this.#container.classList.add('slider_dragging')

      let left= event.clientX -this.#container.getBoundingClientRect().left
      let leftRelative = left / this.#container.offsetWidth

      if (leftRelative < 0) {
        leftRelative = 0
      }
      if (leftRelative > 1) {
        leftRelative = 1
      }
      let leftPercents = leftRelative *100
      this.#container.querySelector('.slider__thumb').style.left = `${leftPercents}%`
      this.#container.querySelector('.slider__progress').style.width = `${leftPercents}%`

      this.position = Math.round(leftRelative * (this.steps - 1))
      this.#container.querySelector('.slider__value').innerHTML = this.position

      this.sliderSteps = this.#container.querySelector('.slider__steps')
        if (!this.sliderSteps.querySelector('.slider__step-active')) {
          this.sliderSteps.childNodes[this.position].classList.add('slider__step-active')
        }
        else {
          this.sliderSteps.querySelector('.slider__step-active').classList.remove('slider__step-active')
          this.sliderSteps.childNodes[this.position].classList.add('slider__step-active')
        }
      const sliderChange = new CustomEvent('slider-change', {
        bubbles: true,
        detail: this.position
      })
      this.#container.dispatchEvent(sliderChange);
    }

    document.addEventListener('pointermove', onMove)
    document.addEventListener('pointerup', () => {
      document.removeEventListener('pointermove', onMove);
      this.#container.classList.remove('slider_dragging')
    }, { once: true})
  }

}
