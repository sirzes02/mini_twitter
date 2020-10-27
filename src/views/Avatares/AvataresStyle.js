import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 50,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_Header: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 40,
    paddingBottom: 10,
    textAlign: 'center',
    marginBottom: 25,
  },
  textErrorAvatar: {
    color: '#FF8557',
    marginBottom: 15,
  },
  avatarsContainer: {
    width: '100%',
    height: '35%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 50,
  },
  avatarImg: {
    width: '100%',
    height: '100%',
  },
  avatar: {
    width: '19%',
    marginHorizontal: '3%',
    height: '50%',
    marginBottom: 25,
    borderRadius: 5,
  },
  avatarImgOpacity: {
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  buttonRegistro: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74FF9B',
    borderRadius: 5,
    padding: 10,
  },
  textbuttonRegistro: {
    fontWeight: 'bold',
    color: 'black',
  },
  contenedorBotonRegistro: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 5,
    borderWidth: 2,
  },
});

export default styles;
