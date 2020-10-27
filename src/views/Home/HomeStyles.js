import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerWeeks: {
    padding: 40,
    paddingTop: 20,
    zIndex: 1,
  },
  profileHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  NombreAvatar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgProfile: {
    width: 30,
    height: 45,
    marginRight: 15,
  },
  ProfileName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  NavbarIcon: {
    width: 25,
    height: 25,
  },
  semana: {
    height: 100,
    borderRadius: 5,
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    position: 'relative',
  },
  tituloSemana: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  imgSemana: {
    height: 120,
    position: 'absolute',
    bottom: 0,
    right: 15,
  },
  scroll: { paddingHorizontal: 13, height: '87%' },
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
  contenedorBotonRegistro: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    marginTop: 20,
  },
});

export default styles;
