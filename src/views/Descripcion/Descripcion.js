import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import styles from './DescripcionStyles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Home = ({ route, navigation }) => {
  const LIMIT = 255;
  const [cantCaracteres, setCantidadCaracteres] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const [errorDescripcion, setErrorDescripcion] = useState(false);
  const { nombre, contrasenia, avatar, correo } = route.params;
  const [cargando, setCargando] = useState(false);

  useEffect(
    () => navigation.addListener('beforeRemove', (e) => e.preventDefault()),
    [navigation],
  );

  const Validacion = async () => {
    if (cantCaracteres === 0) {
      setErrorDescripcion(true);
      return;
    }
    setCargando(true);

    await auth()
      .createUserWithEmailAndPassword(correo, contrasenia)
      .then(async (user) => {
        firestore()
          .collection('users')
          .doc(user.user.uid)
          .set({ avatar: avatar, descripcion: descripcion, nombre: nombre })
          .then(() => {
            setCargando(false);
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text_Header}>Descripción</Text>
      <Text style={styles.text_sub}>Cuentanos sobre ti</Text>
      {errorDescripcion ? (
        <Text style={styles.textError}>Dejanos saber de ti...</Text>
      ) : null}
      <TextInput
        style={styles.text_area}
        onChangeText={(text) => {
          if (cantCaracteres < LIMIT - 1) {
            setDescripcion(text);
            setCantidadCaracteres(text.length);
          }
        }}
        value={descripcion}
        placeholder="Descripción breve"
        multiline={true}
        numberOfLines={5}
      />
      <Text style={styles.caracteres}>{cantCaracteres}/255</Text>
      {!cargando ? (
        <View style={styles.contenedorBotonRegistro}>
          <TouchableHighlight
            underlayColor="#32CF5E"
            style={styles.buttonRegistro}
            onPress={() => Validacion()}>
            <Text style={styles.textbuttonRegistro}>Finalizar</Text>
          </TouchableHighlight>
        </View>
      ) : (
        <ActivityIndicator size="large" color="#32CF5E" />
      )}
    </View>
  );
};

export default Home;
