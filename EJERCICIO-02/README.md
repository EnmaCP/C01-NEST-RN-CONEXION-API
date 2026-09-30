# Ejercicio 02 - API de Pizzas

## 🎯 ¿Qué he aprendido?
- **Separación de responsabilidades**:
  - **Controlador (`pizzas.controller.ts`)**: Se encarga únicamente de recibir peticiones HTTP, rutas y devolver respuestas.
  - **Servicio (`pizzas.service.ts`)**: Contiene la lógica de negocio y gestiona los datos (arrays, bases de datos).
- **Inyección de dependencias**: Uso del decorador `@Injectable()` para registrar un servicio como proveedor e inyectarlo en el controlador mediante el constructor:
  ```typescript
  constructor(private readonly pizzasService: PizzasService) {}
  ```
- **Generación de recursos con Nest CLI**: Uso de comandos como `nest g co pizzas` y `nest g s pizzas` para estructurar carpetas y módulos automáticamente.
- **Registro en módulos**: Configuración de `controllers: [PizzasController]` y `providers: [PizzasService]` en `app.module.ts`.

---

## 🛠️ ¿Qué se ha modificado / creado?
- `backend/src/pizzas/pizzas.service.ts`: Implementación de la colección de pizzas en memoria y el método `findAll()`.
- `backend/src/pizzas/pizzas.controller.ts`: Creación del controlador con la ruta base `/pizzas` y el método decorado con `@Get()` que invoca a `pizzasService.findAll()`.
- `backend/src/app.module.ts`: Importación y vinculación del controlador y servicio en el módulo raíz.

---

## 🚀 ¿Cómo ha quedado el ejercicio?
Al realizar una petición a:
```http
GET http://localhost:3000/pizzas
```

El servidor devuelve la lista completa de pizzas en formato JSON:
```json
[
  { "id": 1, "nombre": "Margarita", "precio": 9 },
  { "id": 2, "nombre": "Pepperoni", "precio": 11 }
]
```
