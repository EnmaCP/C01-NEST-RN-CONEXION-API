import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://172.22.28.51:3000';

export default function App() {
  const [conectado, setConectado] = useState(false);
  const [mensaje, setMensaje] = useState('Estado: sin conectar ✕');
  const [datosBackend, setDatosBackend] = useState<string | null>(null);

  const cargarMensaje = async () => {
    try {
      const respuesta = await fetch(API_URL + '/mensaje');
      const datos = await respuesta.json();
      
      setConectado(true);
      setMensaje('Estado: conectado ✓');
      if (datos.texto) {
        setDatosBackend(datos.texto);
      }
    } catch (error) {
      console.error('Error al conectar:', error);
      setConectado(false);
      setMensaje('Estado: error al conectar ✕');
      setDatosBackend(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>C01 • NEST + RN</Text>
        <Text style={styles.subtitulo}>JSON → pantalla</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardHeader}>📡 Datos recibidos desde NestJS</Text>
        <Text style={[styles.estado, conectado ? styles.estadoConectado : styles.estadoDesconectado]}>
          {mensaje}
        </Text>
        {datosBackend && (
          <Text style={styles.detalleBackend}>"{datosBackend}"</Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.boton}
        onPress={cargarMensaje}
        activeOpacity={0.8}
      >
        <Text style={styles.textoBoton}>ACCIÓN PRINCIPAL</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  header: {
    marginBottom: 24,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '900',
    color: '#0f172a',
    letterSpacing: 0.5,
  },
  subtitulo: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 6,
  },
  card: {
    backgroundColor: '#eff6ff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#dbeafe',
  },
  cardHeader: {
    fontSize: 15,
    color: '#334155',
    marginBottom: 16,
  },
  estado: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  estadoDesconectado: {
    color: '#ef4444', // Rojo al inicio
  },
  estadoConectado: {
    color: '#16a34a', // Verde al conectar con éxito
  },
  detalleBackend: {
    marginTop: 8,
    fontSize: 14,
    color: '#2563eb',
    fontStyle: 'italic',
  },
  boton: {
    backgroundColor: '#2563eb',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563eb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 3,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
});