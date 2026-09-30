# Ejercicio 01 - Hello Backend

## 🎯 ¿Qué he aprendido?
- **Fundamentos de NestJS**: Comprensión de la arquitectura modular de NestJS estructurada en módulos, controladores y servicios mediante decoradores de TypeScript.
- **Controlador HTTP básico**: Uso del decorador `@Controller('hola')` para definir el prefijo de la ruta en la API.
- **Endpoints GET**: Empleo del decorador `@Get()` para responder a peticiones HTTP GET.
- **Serialización JSON automática**: NestJS serializa automáticamente objetos y arrays de JavaScript a formato JSON al retornarlos desde un método del controlador.
- **Puesta en marcha del servidor**: Arranque y depuración con `npm run start:dev` escuchando peticiones en el puerto `3000`.

---

## 🛠️ ¿Qué se ha modificado / creado?
- `backend/src/hola/app.controller.ts`: Creación del controlador con la ruta `/hola` y el método `saludar()`.
- `backend/src/hola/app.module.ts`: Declaración y registro del controlador dentro de la propiedad `controllers` del módulo.
- `backend/src/main.ts`: Inicialización de la aplicación NestJS con `NestFactory.create()` y escucha en el puerto `3000`.

---

## 🚀 ¿Cómo ha quedado el ejercicio?
Al levantar el backend y hacer una petición `GET` a:
```http
GET http://localhost:3000/hola
```

El servidor responde inmediatamente con un código `200 OK` y el siguiente cuerpo JSON:
```json
{
  "mensaje": "¡Hola desde NestJS! 🚀"
}
```
