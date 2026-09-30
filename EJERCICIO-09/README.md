# Ejercicio 09 - Busca Superhéroe

## 🎯 ¿Qué he aprendido?
- **Entrada de usuario con `<TextInput />`**: Captura de texto introducido por el usuario mediante las propiedades `value` y `onChangeText`.
- **Configuración de teclado**: Ajuste de `keyboardType="numeric"` para forzar la apertura del teclado numérico en dispositivos móviles.
- **Peticiones HTTP con parámetros dinámicos**: Concatenación de valores de entrada en la URL:
  ```typescript
  fetch(API_URL + '/heroes/' + id)
  ```
- **Renderizado condicional**: Mostrar el bloque de resultados únicamente cuando existe un héroe cargado (`{heroe && <Text>...</Text>}`).
- **Manejo de estados con valor inicial nulo**: `useState<Heroe | null>(null)`.

---

## 🛠️ ¿Qué se ha modificado / creado?
- `backend/src/heroes/heroes.service.ts`: Base de datos en memoria de superhéroes con campos `id`, `nombre`, `poder` y `universo`.
- `backend/src/heroes/heroes.controller.ts`: Endpoint `@Get(':id')` que consulta al servicio.
- `frontend/src/app/_layout.tsx`: Layout limpio.
- `frontend/src/app/index.tsx`: Pantalla con título "🦸 Busca superhéroe", input de texto numérico, botón "Buscar" y visualización detallada del héroe.

---

## 🚀 ¿Cómo ha quedado el ejercicio?
1. El usuario introduce un ID en el campo de texto (por defecto `1`).
2. Pulsa el botón **"Buscar"**.
3. La aplicación consulta a NestJS y muestra la ficha completa del héroe:
   ```text
   Spider-Man · Poder 85
   Universo Marvel
   ```
4. Si cambia el número a `2` o `3`, se actualiza instantáneamente con el héroe correspondiente (ej. Batman, Iron Man, etc.).
