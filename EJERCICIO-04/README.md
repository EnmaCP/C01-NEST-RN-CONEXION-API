# Ejercicio 04 - Filtra Videojuegos

## 🎯 ¿Qué he aprendido?
- **Filtrado dinámico de datos**: Aplicación del método `.filter()` de arrays para devolver subconjuntos de datos en función de criterios opcionales (por ejemplo, el género del videojuego).
- **Flexibilidad en métodos del servicio**: Definición de métodos con parámetros opcionales (`genero?: string`) que devuelven la colección completa si no se pasa filtro o una lista filtrada si se especifica.
- **Diferencia entre `.find()` y `.filter()`**:
  - `.find()` devuelve un único elemento (o `undefined`).
  - `.filter()` devuelve siempre un nuevo array con todos los elementos que cumplan la condición.

---

## 🛠️ ¿Qué se ha modificado / creado?
- `backend/src/juegos/juegos.service.ts`: Colección de juegos con `id`, `titulo`, `genero` y `precio`. Implementación de:
  - `findAll(genero?: string)`: Devuelve todos o filtra por género.
  - `findOne(id: number)`: Busca por ID.
- `backend/src/juegos/juegos.controller.ts`: Rutas para acceder a los videojuegos.
- `backend/src/app.module.ts`: Integración de `JuegosController` y `JuegosService`.

---

## 🚀 ¿Cómo ha quedado el ejercicio?
Al realizar peticiones a:
```http
GET http://localhost:3000/juegos/1
```

Devuelve el detalle del videojuego solicitado:
```json
{
  "id": 1,
  "titulo": "The Legend of Zelda",
  "genero": "Aventura",
  "precio": 60
}
```
Y permite gestionar listas completas de videojuegos con sus atributos.
