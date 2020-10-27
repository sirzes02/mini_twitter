import React, { useState } from 'react';
import { Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import styles from './RegisterStyle';

const Register = ({ navigation }) => {
  const [correo, setCorreo] = useState('');
  const [nombre, setNombre] = useState('');
  const [contrasenia, setcontrasenia] = useState('');
  const [contraseniaV, setcontraseniaV] = useState('');
  const [ErrorNombre, setErrorNombre] = useState(false);
  const [ErrorCorreo, setErrorCorreo] = useState(false);
  const [Errorcontrasenia, setErrorCotraseña] = useState(false);

  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

  const Validacion = () => {
    if (nombre.length === 0) {
      setErrorNombre(true);
      return;
    } else setErrorNombre(false);

    if (correo.length === 0 || !correo.match(pattern)) {
      setErrorCorreo(true);
      return;
    } else setErrorCorreo(false);

    if (contrasenia.length < 8) {
      setErrorCotraseña(true);
      return;
    } else {
      if (contrasenia !== contraseniaV) {
        Alert.alert('Problemas', 'Las constraseñas no coinciden');
        return;
      }
    }

    navigation.navigate('Avatares', {
      correo: correo,
      nombre: nombre,
      contrasenia: contrasenia,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text_Header}>Registro</Text>
      {ErrorNombre ? (
        <Text style={styles.textError}>Este campo es requerido</Text>
      ) : null}
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => setNombre(text)}
        value={nombre}
        placeholder="Nombre"
        maxLength={200}
      />
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
      {Errorcontrasenia ? (
        <Text style={styles.textError}>
          Ingresa una contraseña valida (min. 8 caracteres)
        </Text>
      ) : null}
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => setcontrasenia(text)}
        value={contrasenia}
        secureTextEntry={true}
        placeholder="contrasenia"
        maxLength={200}
      />
      <TextInput
        style={styles.inputText}
        onChangeText={(text) => setcontraseniaV(text)}
        value={contraseniaV}
        secureTextEntry={true}
        placeholder="Confirmar contrasenia"
        maxLength={200}
      />
      <View style={styles.contenedorBotonRegistro}>
        <TouchableHighlight
          underlayColor="#32CF5E"
          style={styles.buttonRegistro}
          onPress={() => Validacion()}>
          <Text style={styles.textbuttonRegistro}>Siguiente</Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight
        underlayColor="rgba(0,0,0,0.0)"
        onPress={() => navigation.goBack()}>
        <Text style={styles.iniciarLink}>Iniciar sesión</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Register;
