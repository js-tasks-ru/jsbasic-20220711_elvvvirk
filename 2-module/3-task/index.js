let sum = 0;
let mul = 1;
let calculator = {
  // ваш код
  a: null,
  b: null,
  read(){
    this.a = +prompt('enter a:', 0)
    this.b = +prompt('enter b:', 0)
  },
  sum() {
      return sum = this.a + this.b
  },
  mul(){
      return mul = this.a * this.b
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
