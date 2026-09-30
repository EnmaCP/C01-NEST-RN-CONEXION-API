# Ejercicio 06 - Estado de Conexión

## 🎯 ¿Qué he aprendido?
- **Maquetación visual con `StyleSheet`**: Construcción de interfaces profesionales en React Native usando tarjetas, bordes redondeados (`borderRadius`), espaciados (`padding`, `margin`) y sombras (`elevation` / `shadowOffset`).
- **Botones personalizados con `TouchableOpacity`**: Sustitución del `<Button>` nativo limitado por componentes táctiles totalmente estilizables con retroalimentación visual (`activeOpacity`).
- **Estilos dinámicos y condicionales**: Aplicación de clases de estilo condicionales basadas en el estado booleano de la conexión:
  ```tsx
  <Text style={[styles.estado, conectado ? styles.estadoConectado : styles.estadoDesconectado]}>
  ```
- **Control de excepciones con `try / catch`**: Detección de caídas de red o servidor apagado para actualizar el estado a "Error de conexión" sin que la aplicación se cierre abruptamente.

---

## 🛠️ ¿Qué se ha modificado / creado?
- `backend/src/mensaje/mensaje.controller.ts`: Endpoint `/mensaje` que retorna `{ texto: '¡Conexión conseguida!' }`.
- `frontend/src/app/_layout.tsx`: Layout limpio con `<Stack screenOptions={{ headerShown: false }} />`.
- `frontend/src/app/index.tsx`:
  - Encabezado con título `C01 • NEST + RN` y subtítulo `JSON → pantalla`.
  - Tarjeta contenedor azul suave `#eff6ff` con el estado.
  - Botón azul rey `#2563eb` con texto en mayúsculas `ACCIÓN PRINCIPAL`.

---

## 🚀 ¿Cómo ha quedado el ejercicio?
- **Al abrir la app (estado inicial)**:
  - La tarjeta muestra `Estado: sin conectar ✕` en color rojo vibrante `#ef4444`.
- **Al pulsar "ACCIÓN PRINCIPAL"**:
  - Se ejecuta la petición HTTP hacia NestJS.
  - El estado cambia inmediatamente a **color verde `#16a34a`** con `Estado: conectado ✓`.
  - Aparece debajo el texto devuelto por el backend: `"¡Conexión conseguida!"`.
