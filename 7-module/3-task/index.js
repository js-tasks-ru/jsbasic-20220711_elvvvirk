import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  #container = null
  stepsElem = ''
  perc = 0
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
    this.#changeValue()
    this.#container.addEventListener('click', this.#onSlider)
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

  #changeValue = () =>{
  this.perc = this.value/(this.steps-1)*100
  this.#container.querySelector('.slider__value').innerHTML = this.value
  this.#container.querySelector('.slider__thumb').style.left = `${this.perc}%`
  this.#container.querySelector('.slider__progress').style.width = `${this.perc}%`
  this.sliderSteps = this.#container.querySelector('.slider__steps')
  if (!this.sliderSteps.querySelector('.slider__step-active')) {
    this.sliderSteps.childNodes[this.value].classList.add('slider__step-active')
    }
  else {
    this.sliderSteps.querySelector('.slider__step-active').classList.remove('slider__step-active')
    this.sliderSteps.childNodes[this.value].classList.add('slider__step-active')
    }
  }
  #onSlider = (event) => {
    const width = this.#container.offsetWidth
    const segmentsLenght = width/(this.steps-1)
    let point= event.clientX -this.#container.getBoundingClientRect().left
    this.value = Math.round(point/segmentsLenght)
    this.#changeValue()

    const sliderChange = new CustomEvent('slider-change', {
      bubbles: true,
      detail: this.value
    })
    this.#container.dispatchEvent(sliderChange);
  }

}
