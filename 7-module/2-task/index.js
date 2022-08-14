import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  #parent = null

  constructor() {
    this.render()
  }
#html(){
  return `
  <!--Корневой элемент Modal-->
    <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
          </h3>
        </div>

        <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>

    </div>`
}
render(){
    this.#parent = document.querySelector('body')
    const elem = createElement(this.#html())
    this.#parent.append(elem)
    this.#parent.classList.add('is-modal-open')
    this.#parent.querySelector('.modal__close').addEventListener('click', () => this.close())
    this.#parent.addEventListener('keydown', this.escape)
}
open() {
    return this.#parent
}
setTitle (title){
  this.#parent.querySelector('.modal__title').innerHTML = title
}
setBody (node) {
  const child = this.#parent.querySelector('.modal__body').lastChild
  console.log(child)
  child.replaceWith(node)
  // this.#parent.querySelector('.modal__body').innerHTML= node.textContent
}
close(){
  if (this.#parent.querySelector('.modal')) {
    this.#parent.querySelector('.modal').remove()
  }
  this.#parent.classList.remove('is-modal-open')
}
escape = (event) => {
  if (event.code === 'Escape') {
    if (this.#parent.querySelector('.modal')) {
      this.#parent.querySelector('.modal').remove()
    }
    this.#parent.classList.remove('is-modal-open')
  }
}
}
