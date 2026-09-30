# Ejercicio 08 - Menú del Restaurante

## 🎯 ¿Qué he aprendido?
- **Renderizado de listas con `<FlatList />`**: Uso del componente nativo optimizado de React Native para pintar colecciones de datos con reciclaje de memoria.
- **Props de `FlatList`**:
  - `data`: El array de datos a representar.
  - `keyExtractor`: Función que define la clave única (`(item) => String(item.id)`).
  - `renderItem`: Función que retorna el elemento visual para cada objeto de la lista.
- **Tipado estricto en TypeScript**: Creación de tipos específicos (`type Producto = { id: number; nombre: string; precio: number; emoji: string }`) y tipado de estados de array (`useState<Producto[]>([])`).
- **Diseño de cartas de menú**: Estructuración visual de elementos gastronómicos con fondo `#EEF4FF`, bordes redondeados y alineación de textos y precios.

---

## 🛠️ ¿Qué se ha modificado / creado?
- `backend/src/productos/productos.service.ts`: Colección de platos con nombre, precio y emojis.
- `backend/src/productos/productos.controller.ts`: Endpoint `GET /productos`.
- `frontend/src/app/_layout.tsx`: Layout limpio.
- `frontend/src/app/index.tsx`: Pantalla con título "🍴 Food Lab", carga automática en `useEffect` y listado con `FlatList`.

---

## 🚀 ¿Cómo ha quedado el ejercicio?
Al abrir la app, se muestra una lista vertical estilizada con los productos del menú servidos directamente desde NestJS:
- 🍕 Pizza · 10 €
- 🍔 Hamburguesa · 8 €
- 🥗 Ensalada · 6 €
- 🍰 Tarta · 4 €

Cada producto aparece dentro de su propia tarjeta redondeada y separada uniformemente.
