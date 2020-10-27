import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    marginTop: 20,
    justifyContent: 'center',
  },
  header: {
    display: 'flex',
    marginBottom: 10,
    flexDirection: 'row',
  },
  img: { width: 50, height: 70, marginBottom: 10 },
  name: { marginLeft: 20, fontSize: 20 },
  ComentText: { marginTop: 30 },
  text_area: { backgroundColor: '#E7E7E7', borderRadius: 10, width: '100%' },
  buttonContainer: {
    marginTop: 10,
    height: 30,
    width: '100%',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'flex-end',
  },
  button: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74FF9B',
    borderRadius: 5,
    borderWidth: 2,
    padding: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
  },
  lineUp: {
    opacity: 0.2,
    height: 1,
    backgroundColor: '#262626',
    position: 'absolute',
    top: 180,
    right: 15,
    left: 15,
  },
  lineDown: {
    opacity: 0.2,
    height: 1,
    backgroundColor: '#262626',
    position: 'absolute',
    top: 340,
    right: 15,
    left: 15,
  },
  scrollContainer: {
    marginTop: 30,
    height: '50%',
    marginBottom: 30,
    paddingHorizontal: 13,
  },
  espaciado: { marginTop: 15 },
});

export default styles;
