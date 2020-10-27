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
    fontSize: 20,
  },
  descripcion: {
    textAlign: 'left',
  },
  containerUp: {
    display: 'flex',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editar: { marginLeft: 10 },
  scroll: {
    paddingHorizontal: 13,
    height: '80%',
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
  sub: { marginTop: 40, marginBottom: 20 },
  bigContainer: { display: 'flex', flex: 1 },
  lineUp: {
    opacity: 0.2,
    height: 1,
    backgroundColor: '#262626',
    position: 'absolute',
    top: 190,
    right: 15,
    left: 15,
  },
});

export default styles;
