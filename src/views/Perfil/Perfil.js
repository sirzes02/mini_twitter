import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import styles from './PerfilStyle';
import Tweet from '../../components/Tweet/Tweet';

const Perfil = ({ navigation }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [avatar, setAvatar] = useState(0);
  const [tweets, setTweets] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    DatosToken();
  }, []);

  useEffect(() => {
    setCargando(false);
  }, [tweets]);

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

  const DatosToken = async () => {
    setTweets([]);
    setCargando(false);

    const token = firebase.auth().currentUser;

    const user = await firestore().collection('users').doc(token.uid).get();

    const aux = await firestore()
      .collection('tweets')
      .where('id', '==', token.uid)
      .get();

    setAvatar(user._data.avatar);
    setName(user._data.nombre);
    setDescription(user._data.descripcion);
    setTweets(aux.docs.reverse());
  };

  return (
    <View style={styles.bigContainer}>
      <View style={styles.contenedor}>
        <View style={styles.containerUp}>
          <Image style={styles.img} source={Avatars[avatar - 1]} />
          <View style={styles.containerInformation}>
            <Text style={styles.nombre}>{name}</Text>
            <Text style={styles.descripcion}>{description}</Text>
          </View>
          <TouchableHighlight underlayColor="transparent">
            <Ionicons
              style={styles.editar}
              name="edit"
              size={35}
              color="#F9DD7C"
              onPress={() => navigation.navigate('Edicion')}
            />
          </TouchableHighlight>
        </View>
        <Text style={styles.sub}>Tus Tweets</Text>
        {tweets.length > 0 ? (
          <ScrollView style={styles.scroll}>
            {tweets.map((tweet) => (
              <Tweet data={tweet} vista="perfil" />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.vacio}>
            <Text>Vacio... Ve a twittear</Text>
          </View>
        )}
      </View>
      <View style={styles.refresh}>
        <TouchableHighlight underlayColor="transparent" onPress={DatosToken}>
          <Ionicons name="refresh" size={30} color="black" />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Perfil;
