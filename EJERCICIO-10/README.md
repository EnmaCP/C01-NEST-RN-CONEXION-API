# Ejercicio 10 - Likes

## 🎯 ¿Qué he aprendido?
- **El método HTTP `PATCH`**: Empleo de `PATCH` en REST para modificaciones y actualizaciones parciales de un recurso (en este caso, incrementar un contador).
- **Rutas de acción en NestJS**: Creación de endpoints específicos con el decorador `@Patch(':id/like')`.
- **Configuración de métodos en `fetch`**: Especificar el método en el objeto de configuración de la petición:
  ```typescript
  fetch(API_URL + '/mascotas/1/like', { method: 'PATCH' })
  ```
- **Actualización de interfaz en tiempo real**: Obtener el nuevo valor retornado por el backend (`mascota.likes`) y reflejarlo inmediatamente en el estado (`setLikes(mascota.likes)`).

---

## 🛠️ ¿Qué se ha modificado / creado?
- `backend/src/mascotas/mascotas.service.ts`: Método `darLike(id: number)` que localiza la mascota, incrementa su propiedad `likes++` y devuelve el objeto modificado.
- `backend/src/mascotas/mascotas.controller.ts`: Endpoint `@Patch(':id/like') darLike(@Param('id') id: string)`.
- `frontend/src/app/_layout.tsx`: Layout limpio.
- `frontend/src/app/index.tsx`: Pantalla de Toby con contador de likes y botón "❤️ Me gusta".

---

## 🚀 ¿Cómo ha quedado el ejercicio?
- La pantalla muestra el nombre del perro (`🐶 Toby`) y su total de likes (`❤️ 14 likes`).
- Cada vez que el usuario presiona el botón **"❤️ Me gusta"**:
  1. Se emite una petición `PATCH` a NestJS.
  2. El servidor suma 1 like al registro.
  3. La app móvil recibe el dato actualizado y la pantalla pasa a `❤️ 15 likes`, `❤️ 16 likes`, etc. en tiempo real.
