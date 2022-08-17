import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  position = 0
  #container = null
  stepsElem = ''
  spanCount = 0
  sliderSteps = null
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
    this.#container.addEventListener('click', this.#onSlider)
    console.log(this.#container.querySelector('.slider__steps').childNodes[1])
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

  #onSlider = (event) => {
    const width = this.#container.offsetWidth
    const segmentsLenght = width/(this.steps-1)
    let point= event.clientX -this.#container.getBoundingClientRect().left
    this.position = Math.round(point/segmentsLenght)
    let perc = this.position/(this.steps-1)*100
    this.spanCount = this.position + 1

    this.#container.querySelector('.slider__value').innerHTML = this.position

    this.#container.querySelector('.slider__thumb').style.left = `${perc}%`
    this.#container.querySelector('.slider__progress').style.width = `${perc}%`
    this.sliderSteps = this.#container.querySelector('.slider__steps')
    if (!this.sliderSteps.querySelector('.slider__step-active')) {
      this.sliderSteps.childNodes[this.spanCount].classList.add('slider__step-active')
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

}
