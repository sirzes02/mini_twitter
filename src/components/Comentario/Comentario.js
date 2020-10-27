import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import styles from './ComentarioStyle';

const Tweet = ({ data }) => {
  const [cargando, setCargando] = useState(true);
  const [nombre, setNombre] = useState('');
  const [avatar, setAvatar] = useState(2);
  const [fecha, setFecha] = useState('');
  const [comentario, setComentario] = useState();

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
  }, [fecha]);

  const DatosToken = async () => {
    setComentario(data.data().texto);

    const aux = await firestore()
      .collection('users')
      .doc(data.data().id_usu)
      .get();

    setNombre(aux.data().nombre);
    setAvatar(aux.data().avatar);
    setFecha(data.data().fecha.toDate().toLocaleString());
  };

  return (
    <View style={styles.container}>
      <View>
        {!cargando ? (
          <>
            <Text style={styles.nombre}>{nombre}</Text>
            <TouchableHighlight underlayColor="transparent">
              <LinearGradient
                colors={Colors[Math.floor(Math.random() * Math.floor(4))]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.9, y: 0.9 }}
                style={styles.semana}>
                <Image style={styles.imgProfile} source={Avatars[avatar - 1]} />
                <Text style={styles.tituloSemana}>{comentario}</Text>
              </LinearGradient>
            </TouchableHighlight>
            <Text style={styles.fecha}>{fecha}</Text>
          </>
        ) : (
          <ActivityIndicator size="large" color="#32CF5E" />
        )}
      </View>
    </View>
  );
};

export default Tweet;
