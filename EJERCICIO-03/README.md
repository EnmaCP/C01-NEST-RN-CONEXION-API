# Ejercicio 03 - Busca Mascota

## 🎯 ¿Qué he aprendido?
- **Parámetros de ruta (`@Param`)**: Captura de segmentos variables en la URL mediante `@Get(':id')`.
- **Casting y tipado en TypeScript**: Los parámetros de ruta entran siempre como `string` por protocolo HTTP; aprendí a transformarlos a número mediante `Number(id)`.
- **Búsqueda en colecciones**: Empleo del método `.find()` de JavaScript en el servicio para buscar un elemento por su clave identificadora (`id`).
- **Control de alcance de clases**: La importancia de mantener los métodos y decoradores dentro de las llaves `{}` de la clase para evitar errores de compilación de TypeScript.

---

## 🛠️ ¿Qué se ha modificado / creado?
- `backend/src/mascotas/mascotas.service.ts`: Colección en memoria de mascotas (`id`, `nombre`, `especie`, `edad`) y método `findOne(id: number)`.
- `backend/src/mascotas/mascotas.controller.ts`: Endpoint `@Get(':id')` que extrae el parámetro y consulta al servicio con `this.mascotasService.findOne(Number(id))`.
- `backend/src/app.module.ts`: Registro del controlador y servicio de mascotas.

---

## 🚀 ¿Cómo ha quedado el ejercicio?
Al realizar una petición con un ID dinámico, por ejemplo:
```http
GET http://localhost:3000/mascotas/1
```

El servidor devuelve la mascota correspondiente:
```json
{
  "id": 1,
  "nombre": "Max",
  "especie": "Perro",
  "edad": 3
}
```
Si se prueba con `http://localhost:3000/mascotas/2`, devuelve a *Luna*.
