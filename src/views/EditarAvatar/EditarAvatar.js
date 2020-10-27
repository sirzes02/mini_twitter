import React, { useState, useEffect } from 'react';
import {
  Text,
  Image,
  View,
  TouchableHighlight,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './EditarAvatarStyle';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

const Avatares = ({ navigation }) => {
  const [avatar, setAvatar] = useState(0);
  const [ErrorAvatar, setErrorAvatar] = useState(false);
  const [avatarOpacity, setAvatarOpacity] = useState([
    styles.avatarImg,
    styles.avatarImg,
    styles.avatarImg,
    styles.avatarImg,
    styles.avatarImg,
    styles.avatarImg,
    styles.avatarImg,
    styles.avatarImg,
  ]);
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();

        if (!enviado) {
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
        } else {
          navigation.dispatch(e.data.action);
        }
      }),
    [enviado, navigation],
  );

  const elegirAvatar = (n) => {
    setAvatar(n);

    const ArrayModificado = avatarOpacity.map((_, index) =>
      n - 1 !== index ? styles.avatarImgOpacity : styles.avatarImg,
    );

    setAvatarOpacity(ArrayModificado);
  };

  const ValidarAvatar = () => (avatar ? PostData() : setErrorAvatar(true));

  const PostData = async () => {
    setCargando(true);

    const token = firebase.auth().currentUser;

    firestore()
      .collection('users')
      .doc(token.uid)
      .update({
        avatar: avatar,
      })
      .then(() => {
        setEnviado(true);
        navigation.goBack();
      });
    setCargando(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text_Header}>Actualiza el avatar</Text>
      {ErrorAvatar ? (
        <Text style={styles.textErrorAvatar}>
          Por favor selecciona un avatar
        </Text>
      ) : null}
      <View style={styles.avatarsContainer}>
        <TouchableHighlight
          underlayColor="rgba(0,0,0,0.0)"
          onPress={() => elegirAvatar(1)}
          style={styles.avatar}>
          <Image
            style={avatarOpacity[0]}
            source={require('../../assets/avatars/a1.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="rgba(0,0,0,0.0)"
          onPress={() => elegirAvatar(2)}
          style={styles.avatar}>
          <Image
            style={avatarOpacity[1]}
            source={require('../../assets/avatars/a2.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="rgba(0,0,0,0.0)"
          onPress={() => elegirAvatar(3)}
          style={styles.avatar}>
          <Image
            style={avatarOpacity[2]}
            source={require('../../assets/avatars/a3.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="rgba(0,0,0,0.0)"
          onPress={() => elegirAvatar(4)}
          style={styles.avatar}>
          <Image
            style={avatarOpacity[3]}
            source={require('../../assets/avatars/a4.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="rgba(0,0,0,0.0)"
          onPress={() => elegirAvatar(5)}
          style={styles.avatar}>
          <Image
            style={avatarOpacity[4]}
            source={require('../../assets/avatars/a5.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="rgba(0,0,0,0.0)"
          onPress={() => elegirAvatar(6)}
          style={styles.avatar}>
          <Image
            style={avatarOpacity[5]}
            source={require('../../assets/avatars/a6.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="rgba(0,0,0,0.0)"
          onPress={() => elegirAvatar(7)}
          style={styles.avatar}>
          <Image
            style={avatarOpacity[6]}
            source={require('../../assets/avatars/a7.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="rgba(0,0,0,0.0)"
          onPress={() => elegirAvatar(8)}
          style={styles.avatar}>
          <Image
            style={avatarOpacity[7]}
            source={require('../../assets/avatars/a8.png')}
          />
        </TouchableHighlight>
      </View>
      {!cargando ? (
        <View style={styles.contenedorBotonRegistro}>
          <TouchableHighlight
            underlayColor="#32CF5E"
            style={styles.buttonRegistro}
            onPress={() => ValidarAvatar()}>
            <Text style={styles.textbuttonRegistro}>Actualizar</Text>
          </TouchableHighlight>
        </View>
      ) : (
        <ActivityIndicator size="large" color="#32CF5E" />
      )}
    </View>
  );
};

export default Avatares;
