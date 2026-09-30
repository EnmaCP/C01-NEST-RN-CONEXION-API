# Ejercicio 07 - Carga Automática

## 🎯 ¿Qué he aprendido?
- **El hook `useEffect`**: Ejecución de efectos secundarios en el ciclo de vida del componente React.
- **Carga al montar la pantalla**: Uso del array de dependencias vacío `[]` para que una función se ejecute una única vez en cuanto el componente se monta en pantalla:
  ```tsx
  useEffect(() => {
    cargarMensaje();
  }, []);
  ```
- **Feedback de carga (UX)**: Implementación de un estado inicial `"Cargando…"` para informar al usuario mientras la petición HTTP está en tránsito por la red.
- **Acción manual de refresco**: Inclusión de un botón "Recargar" que reutiliza la función asíncrona para actualizar la información bajo demanda.

---

## 🛠️ ¿Qué se ha modificado / creado?
- `backend/src/main.ts`: Backend con CORS habilitado y servidor escuchando en puerto 3000.
- `backend/src/mensaje/mensaje.controller.ts`: Endpoint `/mensaje`.
- `frontend/src/app/_layout.tsx`: Layout limpio simplificado.
- `frontend/src/app/index.tsx`: Componente con `useEffect` que dispara `cargarMensaje()` automáticamente al inicio y muestra el estado en pantalla.

---

## 🚀 ¿Cómo ha quedado el ejercicio?
1. Nada más abrir la app, aparece brevemente el texto `Cargando…`.
2. Milisegundos después, sin necesidad de que el usuario pulse ningún botón, la pantalla se actualiza automáticamente mostrando:
   `🟢 ¡Conexión conseguida!`
3. El usuario dispone de un botón "Recargar" para volver a realizar la consulta cuando lo necesite.
