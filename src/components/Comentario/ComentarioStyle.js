import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  semana: {
    minHeight: 50,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    paddingVertical: 5,
  },
  imgProfile: {
    width: 20,
    height: 50,
    backgroundColor: '#6A6A6A',
    borderRadius: 100,
    margin: 15,
    flex: 1,
    borderWidth: 2,
  },
  tituloSemana: {
    fontSize: 15,
    flex: 4,
  },
  nombre: { marginBottom: 5 },
  fecha: { textAlign: 'right' },
});

export default styles;
