import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerLoginRegister: {
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
  textError: {
    color: '#FF8557',
  },
  inputText: {
    height: 50,
    width: '100%',
    backgroundColor: '#F2F0F0',
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 5,
    padding: 10,
  },
  contenedorBotonRegistro: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 5,
  },
  textbuttonRegistro: {
    fontWeight: 'bold',
    color: 'black',
  },
  iniciarLink: {
    marginTop: 20,
    fontSize: 20,
  },
  buttonRegistro: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74FF9B',
    borderRadius: 5,
    padding: 10,
    borderWidth: 2,
  },
});

export default styles;
