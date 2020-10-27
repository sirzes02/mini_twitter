import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import styles from './TweetStyle';

const Tweet = ({ vista, data, func, actions, navegation }) => {
  const [cargando, setCargando] = useState(true);
  const [nombre, setNombre] = useState('');
  const [avatar, setAvatar] = useState('');
  const [fecha, setFecha] = useState('');
  const [id, setId] = useState('');

  const navigation = useNavigation();

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

  const Colors = [
    ['#A18CD1', '#FBC2EB'],
    ['#96E6A1', '#D4FC79'],
    ['#FDA085', '#F6D365'],
    ['#66A6FF', '#89F7FE'],
  ];

  useEffect(() => {
    DatosToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCargando(false);
  }, [id]);

  const DatosToken = async () => {
    const aux = await firestore().collection('users').doc(data.data().id).get();

    setNombre(aux.data().nombre);
    setAvatar(aux.data().avatar);
    setFecha(data.data().fecha.toDate().toLocaleString());
    setId(data._ref._documentPath._parts[1]);
  };

  const remove = async () => {
    Alert.alert(
      'Regresar',
      '¿Estás seguro de que deseas eliminar el tweet?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: async () => {
            await firestore()
              .collection('tweets')
              .doc(id)
              .delete()
              .then(() => {
                Alert.alert('Borrado', 'Tweet borrado con exito');
                func();
              });
          },
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <View style={styles.container}>
      {!cargando ? (
        <View>
          {vista && <Text style={styles.nombre}>{nombre}</Text>}
          <TouchableHighlight
            underlayColor="transparent"
            onPress={() =>
              navigation.navigate('TweetIndividual', {
                data,
                nombre,
                avatar,
                id,
              })
            }>
            <LinearGradient
              colors={Colors[Math.floor(Math.random() * Math.floor(4))]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0.9, y: 0.9 }}
              style={styles.semana}>
              {vista && (
                <Image style={styles.imgProfile} source={Avatars[avatar - 1]} />
              )}
              <Text style={styles.tituloSemana}> {data.data().texto}</Text>
            </LinearGradient>
          </TouchableHighlight>
          <Text style={styles.fecha}>{fecha}</Text>
          {actions && (
            <View style={styles.containerActions}>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() =>
                  navigation.navigate('EditarTweet', {
                    data: data.data().texto,
                    id,
                    func,
                  })
                }>
                <Icons
                  style={styles.editar}
                  name="edit"
                  size={35}
                  color="black"
                />
              </TouchableHighlight>
              <TouchableHighlight underlayColor="transparent" onPress={remove}>
                <Icons
                  style={styles.editar}
                  name="remove"
                  size={35}
                  color="red"
                />
              </TouchableHighlight>
            </View>
          )}
        </View>
      ) : (
        <ActivityIndicator size="large" color="#32CF5E" />
      )}
    </View>
  );
};

export default Tweet;
