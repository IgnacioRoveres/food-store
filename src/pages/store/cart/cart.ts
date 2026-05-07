import type { CartItem } from "../../../types/product";
import {
  getCart,
  removeFromCart,
  calcularTotal,
  clearCart,
  aumentarCantidad,
  disminuirCantidad,
} from "../../../utils/cart";

const listaCarrito = document.getElementById("lista-carrito")!;
const carritoVacio = document.getElementById("carrito-vacio")!;
const seccionTotal = document.getElementById("seccion-total")!;
const totalPrecio = document.getElementById("total-precio")!;
const btnVaciar = document.getElementById("btn-vaciar")!;
const btnFinalizar = document.getElementById("btn-finalizar")!;
const modalOverlay = document.getElementById("modal-overlay")!;
const modalTotal = document.getElementById("modal-total")!;
const btnModalCerrar = document.getElementById("btn-modal-cerrar")!;

function renderTotal(): void {
  const total = calcularTotal();
  totalPrecio.textContent = `$${total.toLocaleString("es-AR")}`;
}

function renderCarrito(): void {
  const cart: CartItem[] = getCart();
  listaCarrito.innerHTML = "";

  if (cart.length === 0) {
    carritoVacio.classList.remove("oculto");
    seccionTotal.classList.add("oculto");
    return;
  }

  carritoVacio.classList.add("oculto");
  seccionTotal.classList.remove("oculto");

  cart.forEach((item) => {
    const subtotal = item.product.precio * item.cantidad;

    const fila = document.createElement("div");
    fila.classList.add("item-carrito");
    fila.innerHTML = `
      <img src="${item.product.imagen}" alt="${item.product.nombre}" />
      <div class="item-info">
        <h3>${item.product.nombre}</h3>
        <p class="item-categoria">${item.product.categoria.nombre}</p>
        <p class="item-precio">$${item.product.precio.toLocaleString("es-AR")} por unidad</p>
        <p class="item-subtotal">Subtotal: $${subtotal.toLocaleString("es-AR")}</p>
      </div>
      <div class="item-cantidad">
        <button class="btn-disminuir" data-id="${item.product.id}">−</button>
        <span>${item.cantidad}</span>
        <button class="btn-aumentar" data-id="${item.product.id}">+</button>
      </div>
      <button class="btn-eliminar" data-id="${item.product.id}">✕</button>
    `;

    fila.querySelector(".btn-aumentar")!.addEventListener("click", () => {
      aumentarCantidad(item.product.id);
      renderCarrito();
    });

    fila.querySelector(".btn-disminuir")!.addEventListener("click", () => {
      disminuirCantidad(item.product.id);
      renderCarrito();
    });

    fila.querySelector(".btn-eliminar")!.addEventListener("click", () => {
      removeFromCart(item.product.id);
      renderCarrito();
    });

    listaCarrito.appendChild(fila);
  });

  renderTotal();
}

// Vaciar carrito
btnVaciar.addEventListener("click", () => {
  if (confirm("¿Seguro que querés vaciar el carrito?")) {
    clearCart();
    renderCarrito();
  }
});

// Finalizar compra
btnFinalizar.addEventListener("click", () => {
  const total = calcularTotal();
  modalTotal.textContent = `Total abonado: $${total.toLocaleString("es-AR")}`;
  modalOverlay.classList.remove("oculto");
  clearCart();
  renderCarrito();
});

// Cerrar modal y volver al catálogo
btnModalCerrar.addEventListener("click", () => {
  window.location.href = "../home/home.html";
});

renderCarrito();