import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  semana: {
    display: 'flex',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    minHeight: 50,
    borderRadius: 7,
    alignItems: 'center',
    borderWidth: 2,
  },
  imgProfile: {
    width: 20,
    height: 50,
    backgroundColor: '#6A6A6A',
    borderRadius: 20,
    margin: 15,
    flex: 1,
    borderWidth: 2,
  },
  tituloSemana: {
    fontSize: 15,
    color: 'black',
    flex: 4,
  },
  container: { marginTop: 0, marginBottom: 0 },
  nombre: { marginBottom: 5 },
  fecha: { textAlign: 'right' },
  fecha2: { textAlign: 'right', marginBottom: 10 },
});

export default styles;
