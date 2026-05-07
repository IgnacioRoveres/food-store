import type { Icategoria } from "./categoria";

export interface Product {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  categoria: Icategoria;
}

export interface CartItem {
  product: Product;
  cantidad: number;
}