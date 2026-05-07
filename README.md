# 🍕 Food Store

Aplicación frontend de tienda de comida online desarrollada como parte de la
Evaluación 1 de Programación III - Tecnicatura Universitaria en Programación
a Distancia (UTN).

---

## 📋 Descripción

Food Store es un catálogo de productos con carrito de compras persistente.
Permite buscar y filtrar productos, agregarlos al carrito, modificar cantidades
y finalizar la compra. Todo desarrollado sin frameworks, usando HTML, CSS,
TypeScript y Vite.

---

## ✅ Funcionalidades

- Catálogo de productos renderizado dinámicamente
- Búsqueda de productos en tiempo real por nombre
- Filtrado por categoría desde el menú lateral
- Carrito de compras persistente con localStorage
- Agregar productos al carrito con animación de confirmación
- Aumentar y disminuir cantidad de productos en el carrito
- Eliminar productos individuales del carrito
- Vaciar el carrito completo
- Cálculo automático del total de la compra
- Modal de confirmación al finalizar la compra

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- TypeScript
- Vite

> No se utilizaron frameworks (React, Angular, Vue, etc.)

---

## 📁 Estructura del proyecto
src/
├── pages/
│   └── store/
│       ├── home/
│       │   ├── home.html    ← catálogo de productos
│       │   ├── home.ts      ← lógica: render, búsqueda, filtros
│       │   └── home.css     ← estilos del catálogo
│       └── cart/
│           ├── cart.html    ← vista del carrito
│           ├── cart.ts      ← lógica: render, cantidades, total
│           └── cart.css     ← estilos del carrito
├── types/
│   ├── product.ts           ← interfaces Product y CartItem
│   └── categoria.ts         ← interface Icategoria
├── data/
│   └── data.ts              ← PRODUCTS y getCategories()
└── utils/
└── cart.ts              ← lógica del carrito y localStorage

---

## 🚀 Cómo ejecutarlo

### 1. Clonar el repositorio

```bash
git clone
cd food-store
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Levantar el servidor de desarrollo

```bash
npm run dev
```

### 4. Abrir en el navegador

Desde la pantalla de inicio hacé clic en **"Ir al catálogo"** para comenzar.

---

## 📦 Build para producción

```bash
npm run build
```

Los archivos compilados quedan en la carpeta `dist/`.

---

## 👤 Autor

Ignacio Roveres 
Tecnicatura Universitaria en Programación a Distancia - UTN  
Programación III — 2025