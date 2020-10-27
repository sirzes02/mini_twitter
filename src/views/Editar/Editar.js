import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import styles from './EditarStyles';

const Editar = ({ route, navigation }) => {
  const LIMIT = 255;
  const [cantCaracteres, setCantidadCaracteres] = useState(0);
  const [descripcion, setDescripcion] = useState('');
  const [nombre, setNombre] = useState();
  const [correo, setCorreo] = useState();
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    cargar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();

        Alert.alert(
          'Regresar',
          '¿Estás seguro de que quieres regresar?',
          [
            {
              text: 'Cancelar',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'Regresar',
              onPress: () => {
                navigation.dispatch(e.data.action);
              },
            },
          ],
          { cancelable: false },
        );
      }),
    [navigation],
  );

  const handleChanges = (e) => {
    if (cantCaracteres < LIMIT - 1) {
      setDescripcion(e);
      setCantidadCaracteres(e.length);
    }
  };

  const cargar = () => {
    const token = firebase.auth().currentUser;

    setNombre(route.params.name);
    setCorreo(token.email);
  };

  const Validacion = async () => {
    if (cantCaracteres === 0) {
      return;
    }

    setCargando(true);

    const token = firebase.auth().currentUser;

    firestore()
      .collection('users')
      .doc(token.uid)
      .update({
        descripcion: descripcion,
      })
      .then(() => navigation.goBack());

    setCargando(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text_Header}>Actualiza tus datos</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Nombre"
        maxLength={200}
        value={nombre}
        editable={false}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Correo"
        value={correo}
        maxLength={200}
        editable={false}
      />
      <Text>Descripción</Text>
      <TextInput
        style={styles.text_area}
        placeholder="Comentanos que eres..."
        value={descripcion}
        onChangeText={handleChanges}
        multiline={true}
        numberOfLines={7}
      />
      <Text style={styles.caracteres}>
        {cantCaracteres}/{LIMIT}
      </Text>

      {!cargando ? (
        <>
          <View style={styles.buttonContainer}>
            <TouchableHighlight
              underlayColor="#32CF5E"
              onPress={Validacion}
              style={styles.button}>
              <Text style={styles.textbutton}>Actualizar</Text>
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            underlayColor="rgba(0,0,0,0.0)"
            onPress={() => navigation.goBack()}>
            <Text>Cancelar</Text>
          </TouchableHighlight>
        </>
      ) : (
        <ActivityIndicator size="large" color="#32CF5E" />
      )}
    </View>
  );
};

export default Editar;
