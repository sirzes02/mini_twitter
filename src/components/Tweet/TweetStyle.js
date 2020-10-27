import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  semana: {
    height: 120,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
  },
  imgProfile: {
    width: 45,
    height: '72%',
    backgroundColor: '#6A6A6A',
    borderRadius: 100,
    margin: 15,
    flex: 1,
    borderWidth: 2,
  },
  tituloSemana: {
    fontSize: 20,
    color: 'white',
    flex: 4,
  },
  container: { marginTop: 10, marginBottom: 5 },
  nombre: { marginBottom: 5 },
  fecha: { textAlign: 'right' },
});

export default styles;
