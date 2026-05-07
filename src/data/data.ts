import type { Icategoria } from "../types/categoria";
import type { Product } from "../types/product";

export const CATEGORIAS: Icategoria[] = [
  { id: 1, nombre: "Pizzas" },
  { id: 2, nombre: "Hamburguesas" },
  { id: 3, nombre: "Ensaladas" },
  { id: 4, nombre: "Bebidas" },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    nombre: "Pizza Muzzarella",
    precio: 2500,
    imagen: "https://media.ambito.com/p/e24c324a419cc678f936ac0cdda5209b/adjuntos/239/imagenes/040/952/0040952827/730x0/smart/santo-bar-pizzasjpg.jpg",
    categoria: { id: 1, nombre: "Pizzas" },
  },
  {
    id: 2,
    nombre: "Pizza Napolitana",
    precio: 2800,
    imagen: "https://media.elgourmet.com/article/8metlvp345_portada-pizza.jpg",
    categoria: { id: 1, nombre: "Pizzas" },
  },
  {
    id: 3,
    nombre: "Hamburguesa Clásica",
    precio: 3200,
    imagen: "https://cdn.shopify.com/s/files/1/0173/8181/8422/files/20250703195540-cheeseburger.jpg?v=1751572542&width=1600&height=900",
    categoria: { id: 2, nombre: "Hamburguesas" },
  },
  {
    id: 4,
    nombre: "Hamburguesa Doble",
    precio: 4100,
    imagen: "https://static.wixstatic.com/media/29cc8e_aaad1f9b690b4176a0cef213b971f787~mv2.jpg/v1/fill/w_1000,h_667,al_c,q_85,usm_0.66_1.00_0.01/29cc8e_aaad1f9b690b4176a0cef213b971f787~mv2.jpg",
    categoria: { id: 2, nombre: "Hamburguesas" },
  },
  {
    id: 5,
    nombre: "Ensalada César",
    precio: 1800,
    imagen: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/755f697272cbcdc6e5df2adb44b1b705.jpg",
    categoria: { id: 3, nombre: "Ensaladas" },
  },
  {
    id: 6,
    nombre: "Ensalada Mixta",
    precio: 1500,
    imagen: "https://imag.bonviveur.com/imagen-de-la-ensalada-mixta.jpg",
    categoria: { id: 3, nombre: "Ensaladas" },
  },
  {
    id: 7,
    nombre: "Coca Cola Zero",
    precio: 800,
    imagen: "https://acdn-us.mitiendanube.com/stores/001/147/879/products/34-cef365423c2249806217606316484937-1024-1024.webp",
    categoria: { id: 4, nombre: "Bebidas" },
  },
  {
    id: 8,
    nombre: "Agua Mineral",
    precio: 500,
    imagen: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3040004_f.jpg",
    categoria: { id: 4, nombre: "Bebidas" },
  },
];

export function getCategories(): Icategoria[] {
  return CATEGORIAS;
}