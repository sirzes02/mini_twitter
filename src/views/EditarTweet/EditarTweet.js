import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './EditarTweetStyle';
import firestore from '@react-native-firebase/firestore';

const NuevoTweet = ({ route, navigation }) => {
  const LIMIT = 115;
  const [cantCaracteres, setCantidadCaracteres] = useState(0);
  const [errorTweet, setErrorTweet] = useState(false);
  const [tweet, setTweet] = useState(route.params.data);
  const [cargando, setCargando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();

        if (!enviado) {
          Alert.alert(
            'Regresar',
            '¿Estás seguro de que quieres regresar? se borrará el cambio.',
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
        } else {
          navigation.dispatch(e.data.action);
        }
      }),
    [enviado, navigation],
  );

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

    await firestore()
      .collection('tweets')
      .doc(route.params.id)
      .update({ texto: tweet })
      .then(() => {
        setEnviado(true);
        Alert.alert('Actualización', 'Tweet actualizado con exito');
        setEnviado(true);
        navigation.goBack();
        route.params.func();
      });

    setCargando(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text_Header}>Editar tweet</Text>

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
      <Text style={styles.characteres}>
        {cantCaracteres}/{LIMIT}
      </Text>

      {!cargando ? (
        <>
          <View style={styles.contenedorBotonNuevo}>
            <TouchableHighlight
              underlayColor="#32CF5E"
              style={styles.buttonNuevo}
              onPress={Validacion}>
              <Text style={styles.textButton}>Finalizar</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.contenedorBotonBorrar}>
            <TouchableHighlight
              underlayColor="#C65656"
              style={styles.buttonLimpiar}
              onPress={limpiar}>
              <Text style={styles.textButton}>Limpiar</Text>
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
