import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import Tweet from '../../components/Tweet/Tweet';
import Comentario from '../../components/Comentario/Comentario';
import styles from './TweetIndividualStyle';
import Ionicons from 'react-native-vector-icons/FontAwesome';

const TweetIndividual = ({ route }) => {
  const [loading, setLoading] = useState(true);
  const [nombre, setNombre] = useState('');
  const [avatar, setAvatar] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const [comentario, setComentario] = useState('');
  const [id, setId] = useState('');
  const [like, setLike] = useState(false);

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
    setId(route.params.id);

    const aux = await firestore()
      .collection('comentarios')
      .where('id_tweet', '==', route.params.id)
      .get();

    setComentarios(aux.docs.reverse());
    setLoading(false);
  };

  const Validar = async () => {
    setLoading(true);
    await firestore().collection('comentarios').add({
      fecha: firebase.firestore.FieldValue.serverTimestamp(),
      texto: comentario,
      id_tweet: id,
      id_usu: firebase.auth().currentUser.uid,
    });
    setLoading(false);
    DatosToken();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img} source={Avatars[avatar - 1]} />
        <Text style={styles.name}>{nombre}</Text>
        <TouchableHighlight
          onPress={() => setLike(!like)}
          underlayColor="transparent">
          <Ionicons name="heart" color={like ? 'red' : 'black'} size={26} />
        </TouchableHighlight>
      </View>
      <Tweet data={route.params.data} />
      <Text style={styles.ComentText}>Publica un comentario</Text>
      <TextInput
        style={styles.text_area}
        placeholder="Descripción breve"
        multiline={true}
        numberOfLines={3}
        value={comentario}
        onChangeText={(e) => setComentario(e)}
      />
      <View style={styles.buttonContainer}>
        {!loading ? (
          <TouchableHighlight style={styles.button} onPress={Validar}>
            <Text style={styles.buttonText}>Comentar</Text>
          </TouchableHighlight>
        ) : (
          <ActivityIndicator size="large" color="#32CF5E" />
        )}
      </View>
      <View style={styles.lineUp} />
      <View style={styles.lineDown} />
      <ScrollView style={styles.scrollContainer}>
        {comentarios.map((comentario) => (
          <Comentario data={comentario} />
        ))}
        <View style={styles.espaciado} />
      </ScrollView>
    </View>
  );
};

export default TweetIndividual;
