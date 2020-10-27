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
    textAlign: 'center',
    marginBottom: '40%',
  },
  contenedorBotonNuevo: {
    marginTop: '10%',
    height: 50,
    width: '100%',
    borderRadius: 5,
  },
  contenedorBotonBorrar: {
    marginTop: 10,
    height: 50,
    width: '100%',
    borderRadius: 5,
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
  buttonLimpiar: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F97C7C',
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
  text_area: {
    backgroundColor: '#E7E7E7',
    borderRadius: 10,
    width: '100%',
  },
  caracteres: { fontSize: 10 },
});

export default styles;
