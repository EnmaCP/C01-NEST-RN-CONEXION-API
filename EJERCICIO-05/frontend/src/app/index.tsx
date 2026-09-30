import { useState } from 'react';
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://172.22.28.51:3000';

export default function App() {
  const cargarMensaje = async () => {
    const respuesta = await fetch(
      API_URL + '/mensaje'
    );

    const datos = await respuesta.json();
    console.log(datos);
  };

  return (
    <SafeAreaView>
      <Text>Mi primera conexión</Text>

      <Button
        title="Conectar con Nest"
        onPress={cargarMensaje}
      />
    </SafeAreaView>
  );
}
