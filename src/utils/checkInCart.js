export function chekInCart(cart, product) {
  return cart.find((c) => c.name === product.name);
}
