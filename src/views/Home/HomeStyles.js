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
  scroll: { paddingHorizontal: 13, height: '100%' },
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
});

export default styles;
