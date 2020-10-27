import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import Tweet from '../../components/Tweet/Tweet';

const TweetIndividual = ({ route }) => {
  const [cargando, setCargando] = useState(true);
  const [nombre, setNombre] = useState('');
  const [avatar, setAvatar] = useState('');
  const [comentarios, setComentarios] = useState([]);

  console.log(route.params);

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

  const DatosToken = async () => {
    setNombre(route.params.nombre);
    setAvatar(route.params.avatar);
  };

  return (
    <View
      style={{
        paddingHorizontal: 50,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          display: 'flex',
          marginBottom: 10,
          flexDirection: 'row',
        }}>
        <Image
          style={{ width: 50, height: 70, marginBottom: 10 }}
          source={Avatars[avatar - 1]}
        />
        <Text style={{ marginLeft: 20 }}>{nombre}</Text>
      </View>
      <View style={{ width: '100%' }}>
        <Tweet data={route.params.data} />
      </View>
      <Text style={{ marginTop: 30 }}>Comentarios</Text>
      <TextInput
        style={{ backgroundColor: '#E7E7E7', borderRadius: 10, width: '100%' }}
        placeholder="Descripción breve"
        multiline={true}
        numberOfLines={5}
      />
      <View
        style={{
          opacity: 0.2,
          height: 1,
          backgroundColor: '#262626',
          position: 'absolute',
          top: 180,
          right: 15,
          left: 15,
        }}
      />
      <View
        style={{
          opacity: 0.2,
          height: 1,
          backgroundColor: '#262626',
          position: 'absolute',
          top: 340,
          right: 15,
          left: 15,
        }}
      />
    </View>
  );
};

export default TweetIndividual;
