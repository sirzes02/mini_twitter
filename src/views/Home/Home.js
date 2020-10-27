import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import styles from './HomeStyles';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import Tweet from '../../components/Tweet/Tweet';

const Weeks = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(0);
  const [tweets, setTweets] = useState([]);
  const [cargando, setCargando] = useState(true);

  const Avatars = [
    require('../../assets/avatars/a1.png'),
    require('../../assets/avatars/a2.png'),
    require('../../assets/avatars/a3.png'),
    require('../../assets/avatars/a4.png'),
    require('../../assets/avatars/a5.png'),
    require('../../assets/avatars/a6.png'),
    require('../../assets/avatars/a7.png'),
    require('../../assets/avatars/a8.png'),
  ];

  useEffect(() => {
    DatosToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCargando(false);
  }, [tweets]);

  const DatosToken = async () => {
    setTweets([]);
    setCargando(false);
    const token = firebase.auth().currentUser;
    const user = await firestore().collection('users').doc(token.uid).get();
    setAvatar(user._data.avatar);
    setName(user._data.nombre);

    const aux = await firestore().collection('tweets').get();
    setTweets(aux.docs.reverse());
  };

  const LogOut = async () =>
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro de que quieres cerrar la sesión?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Cerrar sesión',
          onPress: async () => {
            auth()
              .signOut()
              .then(() => console.log('User signed out!'));
          },
        },
      ],
      { cancelable: false },
    );

  return (
    <View style={styles.containerWeeks}>
      <View style={styles.profileHeader}>
        <View style={styles.NombreAvatar}>
          <Image style={styles.imgProfile} source={Avatars[avatar - 1]} />
          <Text style={styles.ProfileName}>{name}</Text>
        </View>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => LogOut()}>
          <Ionicons name="sign-out" size={35} color="#C34F37" />
        </TouchableHighlight>
      </View>
      {cargando ? (
        <Text>Preuba</Text>
      ) : (
        <ScrollView style={styles.scroll}>
          {tweets.map((tweet) => (
            <Tweet numeroSemana={4} data={tweet} />
          ))}
        </ScrollView>
      )}
      <View style={styles.contenedorBotonRegistro}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={DatosToken}
          style={styles.buttonRegistro}>
          <Text>Actualizar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Weeks;
