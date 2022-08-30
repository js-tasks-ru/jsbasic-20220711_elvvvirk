export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
  let cartItem  = {}
  if (product) {
  let newProduct = this.cartItems.find(item => item.product == product)
    if (newProduct){
      newProduct.count++
      cartItem = newProduct
    }
    else {
      cartItem  = {
        product: product,
        count: 1
      }
      this.cartItems.push(cartItem)
      }
    }
  this.onProductUpdate(cartItem)

}

  updateProductCount(productId, amount) {
    // ваш код
    let cartItem = {}
    let newProduct = this.cartItems.find(item => item.product.id == productId)
    if (newProduct){
      newProduct.count += amount
      cartItem = newProduct
    }
    if (cartItem.count == 0) {
      this.cartItems.pop(cartItem)
    }

    this.onProductUpdate(cartItem)
  }

  isEmpty() {
    // ваш код
    if (this.cartItems.length < 1) return true
    else return false
  }

  getTotalCount() {
    // ваш код
    let totalCount = 0
    for (let item of this.cartItems) {
      totalCount += item.count
    }
    return totalCount
  }

  getTotalPrice() {
    // ваш код
    let totalPrice = 0
    for (let item of this.cartItems) {
      totalPrice += item.count*item.product.price
    }
    return totalPrice
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

