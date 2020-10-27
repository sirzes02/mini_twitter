import React, { useState, useEffect } from 'react';
import { Text, Image, View, TouchableHighlight } from 'react-native';
import styles from './AvataresStyle';

const Avatares = ({ route, navigation }) => {
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

  useEffect(
    () => navigation.addListener('beforeRemove', (e) => e.preventDefault()),
    [navigation],
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
    navigation.navigate('Descripcion', { avatar: avatar, ...route.params });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text_Header}>Selecciona tu avatar</Text>
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

      <View style={styles.contenedorBotonRegistro}>
        <TouchableHighlight
          underlayColor="#32CF5E"
          style={styles.buttonRegistro}
          onPress={() => ValidarAvatar()}>
          <Text style={styles.textbuttonRegistro}>Registrarse</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Avatares;
