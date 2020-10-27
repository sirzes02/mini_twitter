import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import styles from './HomeStyles';
import Icons from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import Tweet from '../../components/Tweet/Tweet';

const Weeks = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(0);
  const [tweets, setTweets] = useState([]);
  const [loadig, setLoadig] = useState(true);

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
  }, []);

  useEffect(() => {
    setLoadig(false);
  }, [tweets]);

  const DatosToken = async () => {
    setTweets([]);
    setLoadig(false);
    const token = firebase.auth().currentUser;
    const user = await firestore().collection('users').doc(token.uid).get();
    setAvatar(user.data().avatar);
    setName(user.data().nombre);

    const aux = await firestore()
      .collection('tweets')
      .orderBy('fecha', 'desc')
      .get();

    setTweets(aux.docs);
  };

  const LogOut = async () =>
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro de que quieres cerrar la sesión?',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Cerrar sesión',
          onPress: async () => {
            auth().signOut();
          },
        },
      ],
      { cancelable: false },
    );

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatarName}>
          <Image style={styles.imgProfile} source={Avatars[avatar - 1]} />
          <Text style={styles.ProfileName}>{name}</Text>
        </View>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => LogOut()}>
          <Icons name="sign-out" size={35} color="#C34F37" />
        </TouchableHighlight>
      </View>

      {loadig ? (
        <ActivityIndicator size="large" color="#32CF5E" />
      ) : (
        <ScrollView style={styles.scroll}>
          {tweets.map((tweet) => (
            <Tweet data={tweet} vista={true} />
          ))}
        </ScrollView>
      )}

      <View style={styles.refresh}>
        <TouchableHighlight underlayColor="transparent" onPress={DatosToken}>
          <Icons name="refresh" size={30} color="black" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Weeks;
