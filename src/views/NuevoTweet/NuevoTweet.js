import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './NuevoTweetStyle';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

const NuevoTweet = () => {
  const LIMIT = 115;
  const [cantCaracteres, setCantidadCaracteres] = useState(0);
  const [errorTweet, setErrorTweet] = useState(false);
  const [tweet, setTweet] = useState('');
  const [cargando, setCargando] = useState(false);

  const handleChanges = (e) => {
    if (cantCaracteres < LIMIT - 1) {
      setTweet(e);
      setCantidadCaracteres(e.length);
    }
  };

  const limpiar = () => {
    setTweet('');
    setCantidadCaracteres(0);
    setErrorTweet(false);
  };

  const Validacion = async () => {
    if (cantCaracteres === 0) {
      setErrorTweet(true);
      return;
    }
    setCargando(true);

    const token = firebase.auth().currentUser;

    firestore()
      .collection('tweets')
      .add({
        fecha: 'preuba',
        id: token.uid,
        texto: tweet,
      })
      .then(() => {
        limpiar();
        setCargando(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text_Header}>Nuevo Tweet</Text>
      {errorTweet ? (
        <Text style={styles.textError}>
          Te queremos, no nos dejes en blanco...
        </Text>
      ) : null}
      <TextInput
        style={styles.text_area}
        placeholder="Escriba su experiencia!"
        onChangeText={handleChanges}
        value={tweet}
        multiline={true}
        numberOfLines={7}
      />
      <Text style={styles.caracteres}>
        {cantCaracteres}/{LIMIT}
      </Text>
      {!cargando ? (
        <>
          <View style={styles.contenedorBotonNuevo}>
            <TouchableHighlight
              underlayColor="#32CF5E"
              style={styles.buttonRegistro}
              onPress={Validacion}>
              <Text style={styles.textbuttonRegistro}>Finalizar</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.contenedorBotonBorrar}>
            <TouchableHighlight
              underlayColor="#32CF5E"
              style={styles.buttonLimpiar}
              onPress={limpiar}>
              <Text style={styles.textbuttonRegistro}>Limpiar</Text>
            </TouchableHighlight>
          </View>
        </>
      ) : (
        <ActivityIndicator size="large" color="#32CF5E" />
      )}
    </View>
  );
};

export default NuevoTweet;
