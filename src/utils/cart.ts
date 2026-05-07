import type { CartItem, Product } from "../types/product";

const CART_KEY = "food_store_cart";

export function getCart(): CartItem[] {
  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

function saveCart(cart: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(product: Product): void {
  const cart = getCart();
  const itemExistente = cart.find((item) => item.product.id === product.id);

  if (itemExistente) {
    itemExistente.cantidad += 1;
  } else {
    cart.push({ product, cantidad: 1 });
  }

  saveCart(cart);
}

export function aumentarCantidad(productId: number): void {
  const cart = getCart();
  const item = cart.find((i) => i.product.id === productId);
  if (item) {
    item.cantidad += 1;
    saveCart(cart);
  }
}

export function disminuirCantidad(productId: number): void {
  const cart = getCart();
  const item = cart.find((i) => i.product.id === productId);
  if (item) {
    if (item.cantidad > 1) {
      item.cantidad -= 1;
    } else {
      // Si cantidad llega a 0 lo elimina
      removeFromCart(productId);
      return;
    }
    saveCart(cart);
  }
}

export function removeFromCart(productId: number): void {
  const cart = getCart().filter((item) => item.product.id !== productId);
  saveCart(cart);
}

export function calcularTotal(): number {
  return getCart().reduce((total, item) => {
    return total + item.product.precio * item.cantidad;
  }, 0);
}

export function clearCart(): void {
  localStorage.removeItem(CART_KEY);
}

export function getCantidadTotal(): number {
  return getCart().reduce((total, item) => total + item.cantidad, 0);
}