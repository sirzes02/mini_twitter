import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 50,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottonContainer: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 5,
  },
  botton: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74ff9b',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_Header: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 40,
    paddingBottom: 10,
    textAlign: 'center',
    marginBottom: 25,
  },
  contenedorBotonRegistro: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    marginBottom: 15,
    marginTop: 5,
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
  textbuttonRegistro: {
    fontWeight: 'bold',
    color: 'black',
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
  text_area: {
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    width: '100%',
    marginBottom: 5,
  },
  caracteres: { marginBottom: 15 },
});

export default styles;
