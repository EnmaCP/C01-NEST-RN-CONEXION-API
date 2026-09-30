# Ejercicio 12 - Creature Lab

## 🎯 ¿Qué he aprendido?
- **Arquitectura interactiva completa (Full Stack)**: Combinación de consultas (`GET`), detalles parametrizados (`GET /:id`) y mutaciones (`PATCH /:id/like`).
- **Carruseles horizontales con `FlatList`**: Configuración de la prop `horizontal` en `<FlatList />` para construir barras de selección deslizables estilo carrusel.
- **Componente `<Pressable />`**: Uso de `Pressable` frente a `TouchableOpacity` para capturar toques de selección de elementos de la lista.
- **Gestión de estado compuesto**:
  - `criaturas`: Array con todas las criaturas disponibles.
  - `seleccionada`: Objeto con la criatura actualmente destacada en la tarjeta superior.
- **Sincronización bidireccional**: Al pulsar el botón de like en la criatura destacada, se ejecuta el `PATCH`, se actualiza la tarjeta principal y se recarga el carrusel horizontal para mantener los datos en perfecta sincronía.

---

## 🛠️ ¿Qué se ha modificado / creado?
- `backend/src/criaturas/criaturas.service.ts`: Colección de criaturas (Draco 🐲, Foxy 🦊, Panda-X 🐼) con nivel, poder, likes y métodos `findAll()`, `findOne(id)` y `darLike(id)`.
- `backend/src/criaturas/criaturas.controller.ts`: Endpoints `GET /criaturas`, `GET /criaturas/:id` y `PATCH /criaturas/:id/like`.
- `backend/src/main.ts`: Configuración del servidor con `app.enableCors()`.
- `frontend/src/app/_layout.tsx`: Layout limpio sin pestañas sobrantes.
- `frontend/src/app/index.tsx`: Pantalla completa con tarjeta héroe superior (emoji gigante, estadísticas de combate, likes y botón) y carrusel horizontal inferior para seleccionar criatura.

---

## 🚀 ¿Cómo ha quedado el ejercicio?
1. **Carrusel inferior**: Muestra a las criaturas en tarjetas cuadradas con sus emojis y nombres (Draco 🐲, Foxy 🦊, Panda-X 🐼).
2. **Selección**: Al pulsar sobre cualquier criatura, se carga en la tarjeta superior destacada mostrando su nivel, poder y likes actuales.
3. **Interacción con likes**: Al presionar el botón "❤️ Me gusta", se envía la petición `PATCH` a NestJS y el contador de likes de esa criatura sube en tiempo real en la pantalla.
