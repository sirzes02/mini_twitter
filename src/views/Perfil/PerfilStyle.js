import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contenedor: {
    padding: 50,
  },
  img: {
    height: 100,
    width: 60,
  },
  nombre: {
    marginTop: 7,
    fontSize: 20,
  },
  descripcion: {
    textAlign: 'left',
  },
  containerUp: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerInformation: {},
  editar: { marginLeft: 10 },
  scroll: {
    paddingHorizontal: 13,
    height: '80%',
    marginTop: 20,
  },
  refresh: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 90,
    right: 15,
    borderWidth: 2,
  },
  vacio: {
    alignItems: 'center',
    marginTop: 100,
    borderWidth: 2,
    padding: 30,
    borderRadius: 10,
  },
  sub: { marginTop: 20 },
  bigContainer: { display: 'flex', flex: 1 },
});

export default styles;
