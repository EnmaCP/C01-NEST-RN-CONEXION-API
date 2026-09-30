# Ejercicio 11 - Mini Tienda

## 🎯 ¿Qué he aprendido?
- **Creación de recursos mediante `POST`**: Envío de nuevos datos desde el cliente hacia el servidor para persistirlos.
- **Cabeceras y serialización en peticiones HTTP**:
  - Especificación de `'Content-Type': 'application/json'`.
  - Conversión de objetos de JavaScript a cadenas JSON con `JSON.stringify()`.
- **Formularios con múltiples inputs en React Native**: Gestión simultánea de los campos de texto `nombre` y `precio`.
- **Flujo completo de mutación y refresco**:
  1. Enviar el `POST` al servidor.
  2. Limpiar los campos del formulario (`setNombre('')`, `setPrecio('')`).
  3. Re-ejecutar `cargarProductos()` para que la lista refleje inmediatamente el nuevo elemento insertado.

---

## 🛠️ ¿Qué se ha modificado / creado?
- `backend/src/productos/productos.service.ts`: Métodos `findAll()` y `create(producto)` que agrega un nuevo producto con su nuevo ID autoincremental.
- `backend/src/productos/productos.controller.ts`: Endpoints `GET /productos` y `POST /productos` usando `@Body()`.
- `frontend/src/app/_layout.tsx`: Layout limpio.
- `frontend/src/app/index.tsx`: Pantalla con título "🛒 Mini tienda", formulario para introducir nombre y precio, botón "Añadir producto" y `FlatList` con el catálogo existente.

---

## 🚀 ¿Cómo ha quedado el ejercicio?
- La aplicación carga la lista inicial de productos de la tienda.
- En la parte superior, el usuario puede rellenar:
  - **Nombre**: "Teclado mecánico"
  - **Precio**: "45"
- Al pulsar **"Añadir producto"**:
  - Se envía la petición `POST` al backend de NestJS.
  - Los campos de texto se resetean.
  - La lista inferior se refresca al instante mostrando la nueva tarjeta del teclado mecánico con su precio.
