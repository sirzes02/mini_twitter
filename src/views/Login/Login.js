import React, { useState } from 'react';
import { ActivityIndicator, Text, View, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import styles from './LoginStyles';

const Login = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [contrasenia, setcontrasenia] = useState('');
  const [ErrorCorreo, setErrorCorreo] = useState(false);
  const [loading, setLoading] = useState(false);

  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

  const Validacion = () => {
    if (!correo.match(pattern)) {
      setErrorCorreo(true);
    } else {
      setErrorCorreo(false);
      PostData();
    }
  };

  const PostData = async () => {
    setLoading(true);
    try {
      auth().signInWithEmailAndPassword(correo, contrasenia);
    } catch (error) {
      Alert.alert(
        'Credenciales erroneas',
        'Esta cuenta no existe, intente de nuevo.',
      );
    }
    setLoading(false);
  };

  return (
    <View style={styles.containerLoginRegister}>
      <Text style={styles.text_Header}>Iniciar sesión</Text>
      {ErrorCorreo ? (
        <Text style={styles.textError}>
          Ingresa un correo electrónico valido
        </Text>
      ) : null}
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => setCorreo(text)}
        value={correo}
        placeholder="Correo"
        maxLength={200}
      />
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => setcontrasenia(text)}
        value={contrasenia}
        secureTextEntry={true}
        placeholder="contraseña"
        maxLength={200}
        autoCapitalize={false}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#32CF5E" />
      ) : (
        <View style={styles.contenedorBotonRegistro}>
          <TouchableHighlight
            underlayColor="#32CF5E"
            style={styles.buttonRegistro}
            onPress={() => Validacion()}>
            <Text style={styles.textbuttonRegistro}>Iniciar sesión</Text>
          </TouchableHighlight>
        </View>
      )}

      <TouchableHighlight
        underlayColor="rgba(0,0,0,0.0)"
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.iniciarLink}>Registrarse</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Login;
