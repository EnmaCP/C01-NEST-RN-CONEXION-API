# Ejercicio 05 - Mi Primera Conexión

## 🎯 ¿Qué he aprendido?
- **Conexión Full-Stack móvil + backend**: Enlace directo entre una app en React Native (Expo) y una API en NestJS.
- **La importancia de la IP local**: Cuando un móvil físico ejecuta la aplicación, `localhost` apunta al propio teléfono. Para alcanzar la API en desarrollo hay que usar la IP local del ordenador en la red Wi-Fi (ej. `http://172.22.28.51:3000`).
- **Habilitación de CORS**: Configuración de `app.enableCors()` en el `main.ts` de NestJS para admitir peticiones entre distintos orígenes/dispositivos.
- **Peticiones HTTP con `fetch`**: Consumo asíncrono de APIs mediante `async/await` y parseo de respuestas con `response.json()`.
- **Manejo de estado en React**: Uso de `useState` para almacenar la información recibida del backend y provocar un nuevo renderizado de la UI.
- **Estructura de Expo Router**: Comprensión de que en proyectos modernos de Expo el punto de entrada es `src/app/index.tsx` y no el `App.tsx` tradicional.

---

## 🛠️ ¿Qué se ha modificado / creado?
- `backend/src/main.ts`: Activación de CORS con `app.enableCors()`.
- `backend/src/mensaje/mensaje.controller.ts`: Endpoint `@Get()` en `/mensaje`.
- `frontend/src/app/_layout.tsx`: Limpieza del layout raíz eliminando pestañas y pantallas de carga por defecto de Expo Starter.
- `frontend/src/app/index.tsx`: Pantalla con título "Mi primera conexión", botón para conectar y visualización del mensaje obtenido por `fetch`.

---

## 🚀 ¿Cómo ha quedado el ejercicio?
1. Al pulsar el botón **"Conectar con Nest"** en el móvil o navegador web.
2. La app realiza un `fetch('http://172.22.28.51:3000/mensaje')`.
3. El backend responde con el JSON y la app móvil actualiza el estado en pantalla mostrando la respuesta exitosa.
