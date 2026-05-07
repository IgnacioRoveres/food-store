import { PRODUCTS, getCategories } from "../../../data/data";
import type { Product } from "../../../types/product";
import { addToCart, getCantidadTotal } from "../../../utils/cart";

let categoriaActiva: number | null = null;
let textoBusqueda: string = "";

const grillaProductos = document.getElementById("grilla-productos")!;
const listaCategorias = document.getElementById("lista-categorias")!;
const inputBusqueda = document.getElementById("input-busqueda") as HTMLInputElement;
const sinResultados = document.getElementById("sin-resultados")!;
const carritoCount = document.getElementById("carrito-count")!;
const toast = document.getElementById("toast")!;

function actualizarContadorCarrito(): void {
  carritoCount.textContent = getCantidadTotal().toString();
}

// Toast con animación
function mostrarToast(): void {
  toast.classList.add("visible");
  setTimeout(() => toast.classList.remove("visible"), 2000);
}

function renderCategorias(): void {
  const categorias = getCategories();

  const liTodas = document.createElement("li");
  liTodas.textContent = "Todas";
  liTodas.classList.add("categoria-item", "activa");
  liTodas.addEventListener("click", () => {
    categoriaActiva = null;
    document.querySelectorAll(".categoria-item").forEach((el) => el.classList.remove("activa"));
    liTodas.classList.add("activa");
    renderProductos();
  });
  listaCategorias.appendChild(liTodas);

  categorias.forEach((cat) => {
    const li = document.createElement("li");
    li.textContent = cat.nombre;
    li.classList.add("categoria-item");
    li.addEventListener("click", () => {
      categoriaActiva = cat.id;
      document.querySelectorAll(".categoria-item").forEach((el) => el.classList.remove("activa"));
      li.classList.add("activa");
      renderProductos();
    });
    listaCategorias.appendChild(li);
  });
}

function renderProductos(): void {
  let productosFiltrados: Product[] = PRODUCTS;

  if (categoriaActiva !== null) {
    productosFiltrados = productosFiltrados.filter(
      (p) => p.categoria.id === categoriaActiva
    );
  }

  if (textoBusqueda.trim() !== "") {
    productosFiltrados = productosFiltrados.filter((p) =>
      p.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
    );
  }

  grillaProductos.innerHTML = "";

  if (productosFiltrados.length === 0) {
    sinResultados.classList.remove("oculto");
    return;
  }

  sinResultados.classList.add("oculto");

  productosFiltrados.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("card-producto");
    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <h3>${producto.nombre}</h3>
      <p class="categoria-badge">${producto.categoria.nombre}</p>
      <p class="precio">$${producto.precio.toLocaleString("es-AR")}</p>
      <button class="btn-agregar" data-id="${producto.id}">
        🛒 Agregar al carrito
      </button>
    `;

    const btnAgregar = card.querySelector(".btn-agregar")!;
    btnAgregar.addEventListener("click", () => {
      addToCart(producto);
      actualizarContadorCarrito();
      mostrarToast();
    });

    grillaProductos.appendChild(card);
  });
}

inputBusqueda.addEventListener("input", () => {
  textoBusqueda = inputBusqueda.value;
  renderProductos();
});

actualizarContadorCarrito();
renderCategorias();
renderProductos();